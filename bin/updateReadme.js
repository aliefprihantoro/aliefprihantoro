const fs = require("fs");

// UPDATE ASSETS
const isProfileUpdate = fs.existsSync("./assets/new.png");
if (isProfileUpdate) {
  fs.renameSync("./assets/new.png", "./assets/profile.png");
}
const checkPdf = fs.existsSync("./assets/*.pdf");
if (checkPdf) {
  fs.rmSync("./assets/*.pdf");
}

const jsonToObj = (path) => JSON.parse(fs.readFileSync(path, "utf8"));
const DESCRIPTION = fs.readFileSync("./data/description.md", "utf8");
const CONTACT = jsonToObj("./data/contact.json");
const LINKS = jsonToObj("./data/links.json");
const TECH = jsonToObj("./data/tech.json");
const PROJECT_WEB = jsonToObj("./data/project/web.json");
const PROJECT_NVIM = jsonToObj("./data/project/nvim.json");
const CERTIVICATE = jsonToObj("./data/certivicate.json");

let README = DESCRIPTION;

README += `
## CONTACT
![telp](https://img.shields.io/badge/${CONTACT.telp}-Call_Me!-informational?style=flat&logo=whatsapp&logoColor=white&color=rgb(0,0,139,.5)&labelColor=00008b)
![email](https://img.shields.io/badge/${CONTACT.email}-Email_Me!-informational?style=flat&logo=gmail&logoColor=white&color=rgb(0,0,139,.5)&labelColor=00008b)
![location](https://img.shields.io/badge/Indonesia,-Central_Java-informational?style=flat&logo=google-maps&logoColor=white&color=rgb(0,0,139,.5)&labelColor=00008b)
`;

const btnLinks = LINKS.map(
  ({ name, username, url }) =>
    `[![${name}](https://img.shields.io/badge/${username || name}-visit-informational?style=flat&logo=${name}&logoColor=white&color=rgb(0,0,139,.5)&labelColor=00008b)](${url}${username || ""})`,
).join("  ");

README += `
## SOCIAL MEDIA and LINKS
${btnLinks}
`;

README += `
## TECH
${TECH.map(({ name, list }) => `- ${name}: ${list.map((name) => `![${name}](https://img.shields.io/badge/-${name}-00008b?style=flat&logo=${name}&logoColor=white&color=rgb(0,0,139,.5)&labelColor=00008b)`).join(" ")}`).join("\n")}
`;

README += `
## PROJECT
### WEB
${PROJECT_WEB.map(({ title, repo, preview }) => {
  repo = `[repo](https://github.com/${repo})`;
  preview = preview ? ` | [preview](${preview})` : "";
  return `- ${title}: ${repo}${preview}`;
}).join("\n")}
### NVIM
${PROJECT_NVIM.map((name) => `- [${name}](https://github.com/muryp/${name})`).join("\n")}
`;

README += `
## CERTIVICATE
${CERTIVICATE.map(({ title, institute, from, to, url }) => `- [${title}](${url}): ${institute} | ${from}${to ? " - " : ""}${to || ""}`).join("\n")}
`;

fs.writeFileSync("./README.md", README);
