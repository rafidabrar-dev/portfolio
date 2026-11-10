// Plain-text and Markdown renderings of the site for language models and crawlers.
// Generated from app/data.ts, so they never drift from the page content.
import { about, cfaCredentialUrl, contact, educationPage, experience, focus, olympiad, site } from './data';

const abs = (path = '') => `${site.url}${path}`;
const alumniUrl = 'https://alumni.bup.edu.bd/student-profile/1080';

export type PageKey = 'home' | 'education' | 'contact';

/** /llms.txt: a short index in the llmstxt.org format. */
export function llmsIndex(): string {
  return `# ${site.name}

> ${site.description}

${site.name} is a finance graduate and researcher based in ${site.location}. He is General Secretary of the Bangladesh Economics Olympiad, a Teaching Assistant at the Bangladesh University of Professionals (BUP), and has passed the CFA Level I exam.

## Pages

- [Home](${abs('/')}): overview, experience, the Economics Olympiad and areas of work ([Markdown](${abs('/index.md')}))
- [Education](${abs('/education')}): MBA and BBA at BUP, Notre Dame College, Govt. Laboratory High School Rajshahi, CFA Level I ([Markdown](${abs('/education.md')}))
- [Contact](${abs('/contact')}): email, LinkedIn and Facebook ([Markdown](${abs('/contact.md')}))

## Reference

- [Full content as Markdown](${abs('/llms-full.txt')}): everything on this site in one file
- [LinkedIn](${site.linkedin}): professional profile
- [Facebook](${site.facebook}): personal profile
- [BUP alumni profile](${alumniUrl}): Bangladesh University of Professionals alumni directory
- [CFA Level I credential](${cfaCredentialUrl}): verifiable digital badge from CFA Institute
- [Bangladesh Economics Olympiad committee](${olympiad.committeeUrl}): lists ${site.name} on the executive committee

## Optional

- [Sitemap](${abs('/sitemap.xml')})

Last updated: ${site.updated}. Every page is also served as Markdown: send the header "Accept: text/markdown", or add ".md" to the address ("/index.md" for the home page).
`;
}

const experienceList = () =>
  experience.map((e) => `- **${e.title}**, ${e.body} (${e.when}${e.current ? ', current' : ''})`).join('\n');

const educationList = () =>
  educationPage.entries.map((e) => `- **${e.institution}**, ${e.title} (${e.period}). ${e.description}`).join('\n');

const newsList = () => olympiad.news.map((n) => `- [${n.title}](${n.url}) (${n.source}, ${n.date}). ${n.mention}`).join('\n');

const focusList = () => focus.items.map((f) => `- **${f.title}:** ${f.body}`).join('\n');

/** /llms-full.txt: all factual content in one Markdown document. */
export function llmsFull(): string {
  return `# ${site.name}

> ${site.description}

- Location: ${site.location}
- Email: ${site.email}
- LinkedIn: ${site.linkedin}
- Facebook: ${site.facebook}
- CFA Level I credential (verifiable): ${cfaCredentialUrl}
- Website: ${abs('/')}
- Last updated: ${site.updated}

## About

${about.lead} Highlights: BBA in Finance and Banking at BUP with a CGPA of 4.00; CFA Level I exam passed; MBA in Finance and Banking at BUP, expected March 2027.

## Experience

${experienceList()}

## ${olympiad.heading.replace(/\.$/, '')}

${olympiad.lead} Listed on the executive committee: ${olympiad.committeeUrl}

${olympiad.photos.map((p) => `- ${p.caption}`).join('\n')}
- ${olympiad.press.body} Video on YouTube (${olympiad.press.video.channel}, ${olympiad.press.video.uploadDate}): ${olympiad.press.video.watchUrl}

Press coverage naming Rafid Abrar:

${newsList()}

## Areas of work

${focusList()}

## Education

${educationList()}

## Contact

${contact.lead}

- Email: ${site.email}
- LinkedIn: ${site.linkedin}
- Contact page: ${abs('/contact')}
`;
}

/** One page as Markdown: /index.md, /education.md, /contact.md, or the page URL with "Accept: text/markdown". */
export function pageMarkdown(page: PageKey): string {
  const head = (title: string, path: string, summary: string) =>
    `# ${title}

> ${summary}

- Page: ${abs(path)}
- Person: ${site.name}, ${site.location}
- Last updated: ${site.updated}
- Site index for LLMs: ${abs('/llms.txt')}

`;

  if (page === 'education') {
    const entries = educationPage.entries
      .map((e) => `## ${e.institution}\n\n- Institution: ${e.title}\n- Period: ${e.period}\n- ${e.description}`)
      .join('\n\n');
    return `${head('Education and academic qualifications', '/education', `Academic background of ${site.name}.`)}${entries}\n`;
  }

  if (page === 'contact') {
    return `${head(`Contact ${site.name}`, '/contact', contact.lead)}- Email: ${site.email}
- LinkedIn: ${site.linkedin}
- Facebook: ${site.facebook}
- Based in: ${site.location}
`;
  }

  return `${head(site.title, '/', site.description)}## About

${about.lead} Highlights: BBA in Finance and Banking at BUP with a CGPA of 4.00; CFA Level I exam passed; MBA in Finance and Banking at BUP, expected March 2027.

## Experience

${experienceList()}

## ${olympiad.heading.replace(/\.$/, '')}

${olympiad.lead} Listed on the executive committee: ${olympiad.committeeUrl}

${olympiad.photos.map((p) => `- ${p.caption}`).join('\n')}
- ${olympiad.press.body} Video on YouTube (${olympiad.press.video.channel}, ${olympiad.press.video.uploadDate}): ${olympiad.press.video.watchUrl}

Press coverage naming Rafid Abrar:

${newsList()}

## Areas of work

${focusList()}

## More

- Education in full: ${abs('/education')}
- Contact: ${abs('/contact')}
`;
}
