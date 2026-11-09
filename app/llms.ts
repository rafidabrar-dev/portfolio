// Plain-text and Markdown renderings of the site for language models and crawlers.
// Generated from app/data.ts, so they never drift from the page content.
import { about, cfaCredentialUrl, contact, educationPage, experience, focus, olympiad, site } from './data';

const abs = (path = '') => `${site.url}${path}`;

/** /llms.txt: a short index in the llmstxt.org format. */
export function llmsIndex(): string {
  return `# ${site.name}

> ${site.description}

${site.name} is a finance graduate and researcher based in ${site.location}. He is General Secretary of the Bangladesh Economics Olympiad, a Teaching Assistant at the Bangladesh University of Professionals (BUP), and has passed the CFA Level I exam.

## Pages

- [Home](${abs('/')}): overview, experience, the Economics Olympiad and areas of work
- [Education](${abs('/education')}): MBA and BBA at BUP, Notre Dame College, Govt. Laboratory High School Rajshahi, CFA Level I
- [Contact](${abs('/contact')}): email, LinkedIn and a message form

## Reference

- [Full content as Markdown](${abs('/llms-full.txt')}): everything on this site in one file
- [LinkedIn](${site.linkedin}): professional profile
- [Facebook](${site.facebook}): personal profile
- [BUP alumni profile](https://alumni.bup.edu.bd/student-profile/1080): Bangladesh University of Professionals alumni directory
- [CFA Level I credential](${cfaCredentialUrl}): verifiable digital badge from CFA Institute
- [Bangladesh Economics Olympiad committee](${olympiad.committeeUrl}): lists ${site.name} on the executive committee

## Optional

- [Sitemap](${abs('/sitemap.xml')})
`;
}

/** /llms-full.txt: all factual content in one Markdown document. */
export function llmsFull(): string {
  const exp = experience
    .map((e) => `- **${e.title}**, ${e.body} (${e.when}${e.current ? ', current' : ''})`)
    .join('\n');

  const edu = educationPage.entries
    .map((e) => `- **${e.institution}**, ${e.title} (${e.period}). ${e.description}`)
    .join('\n');

  const news = olympiad.news.map((n) => `- [${n.title}](${n.url}) (${n.source}, ${n.date})`).join('\n');

  const focusAreas =focus.items.map((f) => `- **${f.title}:** ${f.body}`).join('\n');

  return `# ${site.name}

> ${site.description}

- Location: ${site.location}
- Email: ${site.email}
- LinkedIn: ${site.linkedin}
- Facebook: ${site.facebook}
- CFA Level I credential (verifiable): ${cfaCredentialUrl}
- Website: ${abs('/')}

## About

${about.lead} Highlights: BBA in Finance and Banking at BUP with a CGPA of 4.00; CFA Level I exam passed; MBA in Finance and Banking at BUP, expected March 2027.

## Experience

${exp}

## ${olympiad.heading.replace(/\.$/, '')}

${olympiad.lead} Listed on the executive committee: ${olympiad.committeeUrl}

${olympiad.photos.map((p) => `- ${p.caption}`).join('\n')}
- ${olympiad.press.body} Video: ${olympiad.press.url}

Press coverage of the Bangladesh Economics Olympiad:

${news}

## Areas of work

${focusAreas}

## Education

${edu}

## Contact

${contact.lead}

- Email: ${site.email}
- LinkedIn: ${site.linkedin}
- Contact page: ${abs('/contact')}
`;
}
