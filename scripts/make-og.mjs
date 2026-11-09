// Generates public/og.jpg: the 1200x630 social preview used by WhatsApp, Facebook, LinkedIn and X.
// Run with: npm run og
// Text is converted to vector paths by satori, so no fonts are needed on the machine that views the image.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const font = (f) => fs.readFileSync(path.join(root, 'scripts/fonts', f));

// Brand colours, matching app/globals.css (cream and yellow).
const C = { paper: '#f8f1dc', paper2: '#efe3c3', ink: '#2a2218', ink2: '#54483a', yellow: '#f6d84a' };

const W = 1200;
const H = 630;

// Portrait: rounded square. Avatar: the chibi from the favicon pack, cropped to a clean circle.
const portrait = await sharp(path.join(root, 'public/rafid_hero.webp'))
  .resize(452, 452, { fit: 'cover', position: 'attention' })
  .png()
  .toBuffer();
const portraitUri = `data:image/png;base64,${portrait.toString('base64')}`;

const avatarSize = 168;
const avatarSrc = path.join(root, 'public/favicon/rafid-bhai-chibi.png');
const big = avatarSize * 2; // render at 2x for crispness, then the browser scales down
const r = Math.round(big * 0.478); // trims stray specks outside the yellow disc
const mask = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${big}" height="${big}" viewBox="0 0 ${big} ${big}"><circle cx="${big / 2}" cy="${big / 2}" r="${r}" fill="#fff"/></svg>`,
);
const avatar = await sharp(avatarSrc)
  .resize(big, big)
  .ensureAlpha()
  .composite([{ input: mask, blend: 'dest-in' }])
  .png()
  .toBuffer();
const avatarUri = `data:image/png;base64,${avatar.toString('base64')}`;

const chip = (text) => ({
  type: 'div',
  props: {
    style: {
      display: 'flex',
      padding: '9px 20px',
      borderRadius: 999,
      background: C.paper2,
      color: C.ink,
      fontFamily: 'DM Sans',
      fontWeight: 700,
      fontSize: 23,
    },
    children: text,
  },
});

const tree = {
  type: 'div',
  props: {
    style: { width: W, height: H, display: 'flex', background: C.paper, position: 'relative' },
    children: [
      // Left: name, role, focus areas, place
      {
        type: 'div',
        props: {
          style: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'absolute', left: 56, top: 56, width: 590, height: 518 },
          children: [
            {
              type: 'div',
              props: {
                style: { display: 'flex', flexDirection: 'column' },
                children: [
                  {
                    type: 'div',
                    props: {
                      style: { display: 'flex', flexDirection: 'column', fontFamily: 'Bricolage Grotesque', fontWeight: 800, fontSize: 116, lineHeight: 0.98, letterSpacing: -4, color: C.ink },
                      children: [
                        { type: 'div', props: { children: 'Rafid' } },
                        { type: 'div', props: { children: 'Abrar' } },
                      ],
                    },
                  },
                  {
                    type: 'div',
                    props: {
                      style: { display: 'flex', marginTop: 22, fontFamily: 'DM Sans', fontWeight: 400, fontSize: 34, lineHeight: 1.25, color: C.ink2 },
                      children: 'Finance graduate and researcher',
                    },
                  },
                ],
              },
            },
            {
              type: 'div',
              props: {
                style: { display: 'flex', flexDirection: 'column', gap: 14 },
                children: [
                  {
                    type: 'div',
                    props: {
                      style: { display: 'flex', gap: 12, flexWrap: 'wrap' },
                      children: [chip('Financial modeling'), chip('Econometric research')],
                    },
                  },
                  {
                    type: 'div',
                    props: {
                      style: { display: 'flex', gap: 12 },
                      children: [
                        chip('Financial inclusion'),
                        {
                          type: 'div',
                          props: {
                            style: { display: 'flex', padding: '9px 20px', borderRadius: 999, background: C.yellow, color: C.ink, fontFamily: 'DM Sans', fontWeight: 700, fontSize: 23 },
                            children: 'Dhaka, Bangladesh',
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      // Right: portrait in a yellow plate, avatar badge on its corner
      {
        type: 'div',
        props: {
          style: { display: 'flex', position: 'absolute', left: 674, top: 80, width: 470, height: 470, borderRadius: 52, background: C.yellow, padding: 9 },
          children: [
            { type: 'img', props: { src: portraitUri, width: 452, height: 452, style: { borderRadius: 44 } } },
          ],
        },
      },
      {
        type: 'div',
        props: {
          style: { display: 'flex', position: 'absolute', left: 674 + 470 - (avatarSize + 20) + 30, top: 80 + 470 - (avatarSize + 20) + 30, width: avatarSize + 20, height: avatarSize + 20, borderRadius: 999, background: C.paper, alignItems: 'center', justifyContent: 'center' },
          children: [{ type: 'img', props: { src: avatarUri, width: avatarSize, height: avatarSize } }],
        },
      },
    ],
  },
};

const svg = await satori(tree, {
  width: W,
  height: H,
  fonts: [
    { name: 'Bricolage Grotesque', data: font('bricolage-800.ttf'), weight: 800, style: 'normal' },
    { name: 'DM Sans', data: font('dmsans-400.ttf'), weight: 400, style: 'normal' },
    { name: 'DM Sans', data: font('dmsans-700.ttf'), weight: 700, style: 'normal' },
  ],
});

// JPEG at 1200x630 stays well under WhatsApp's ~300 KB preview limit.
let quality = 86;
let out;
do {
  out = await sharp(Buffer.from(svg)).flatten({ background: C.paper }).jpeg({ quality, mozjpeg: true, chromaSubsampling: '4:4:4' }).toBuffer();
  quality -= 4;
} while (out.length > 280 * 1024 && quality > 60);

fs.writeFileSync(path.join(root, 'public/og.jpg'), out);
console.log(`public/og.jpg  ${W}x${H}  ${(out.length / 1024).toFixed(0)} KB  (quality ${quality + 4})`);
