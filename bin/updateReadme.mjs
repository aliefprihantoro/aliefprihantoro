import { writeFileSync } from "fs";
import {
  CONTACT,
  TECH,
  LINKS,
  CERTIVICATE,
  PROJECT_WEB,
  PROJECT_NVIM,
  CV_PATH,
  HEADER,
  PROJECT_JS,
} from "./data.mjs";

export default function () {
  let readme = `
# ${HEADER.name}
### ${HEADER.role}
> LANGUAGE : ID | EN

${HEADER.description}

`;
  readme += `
[![CV](https://img.shields.io/badge/CV-Download-informational?style=flat&logo=googledocs&logoColor=white&color=rgb(0,0,139,.5)&labelColor=00008b)](${CV_PATH})
`;

  readme += `
## CONTACT
![telp](https://img.shields.io/badge/${CONTACT.telp}-Call_Me!-informational?style=flat&logo=whatsapp&logoColor=white&color=rgb(0,0,139,.5)&labelColor=00008b)
![email](https://img.shields.io/badge/${CONTACT.email}-Email_Me!-informational?style=flat&logo=gmail&logoColor=white&color=rgb(0,0,139,.5)&labelColor=00008b)
![location](https://img.shields.io/badge/Indonesia,-Central_Java-informational?style=flat&logo=google-maps&logoColor=white&color=rgb(0,0,139,.5)&labelColor=00008b)
`;

  const btnLinks = LINKS.map(
    ({ name, icon, username, url }) =>
      `[![${name}](https://img.shields.io/badge/${username || name}-visit-informational?style=flat&logo=${icon || name}&logoColor=white&color=rgb(0,0,139,.5)&labelColor=00008b)](${url}${username || ""})`,
  ).join("  ");

  readme += `
## SOCIAL MEDIA and LINKS
${btnLinks}
`;

  readme += `
## TECH
${TECH.map(({ name, list }) => `- ${name}: ${list.map((name) => `![${name}](https://img.shields.io/badge/-${name}-00008b?style=flat&logo=${name}&logoColor=white&color=rgb(0,0,139,.5)&labelColor=00008b)`).join(" ")}`).join("\n")}
`;

  readme += `
## PROJECT
### WEB
${PROJECT_WEB.map(({ title, repo, preview, description }) => {
  repo = `[repo](https://github.com/${repo})`;
  preview = preview ? ` | [preview](${preview[0]})` : "";
  return `- ${title} (${repo}${preview})

${description || ""}
`;
}).join("\n")}
### JS/TS PLUG
${PROJECT_JS.map(({ title, repo, preview, description }) => {
  repo = `[repo](https://github.com/${repo})`;
  preview = preview ? ` | [preview](${preview[0]})` : "";
  return `- ${title} (${repo}${preview})

${description || ""}
`;
}).join("\n")}
### NVIM PLUG
${PROJECT_NVIM.map((name) => `- [${name}](https://github.com/muryp/${name})`).join("\n")}
`;

  readme += `
## CERTIVICATE
${CERTIVICATE.map(({ title, institute, from, to, url }) => `- [${title}](${url}): ${institute} | ${from}${to ? " - " : ""}${to || ""}`).join("\n")}
`;

  writeFileSync("./README.md", readme);
}
