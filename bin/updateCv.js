const fs = require("fs");
const {
  DESCRIPTION,
  CONTACT,
  TECH,
  LINKS,
  CERTIVICATE,
  PROJECT_WEB,
  PROJECT_NVIM,
} = require("./data");

// UPDATE ASSETS
const isProfileUpdate = fs.existsSync("./assets/new.png");
if (isProfileUpdate) {
  fs.renameSync("./assets/new.png", "./assets/profile.png");
}
const checkPdf = fs.existsSync("./assets/*.pdf");
if (checkPdf) {
  fs.rmSync("./assets/*.pdf");
}

let update_cv = DESCRIPTION;

update_cv += `
## CONTACT
- CONATACT : ${CONTACT.telp}
- EMAIL : ${CONTACT.email}
- LOCATION : Indonesia, Central Java
- WEB : ${LINKS[0].url}
`;

update_cv += `
## TECH
${TECH.map(({ name, list }) => `- ${name}: ${list.map((name) => `${name}`).join(" , ")}`).join("\n")}
`;

update_cv += `
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

update_cv += `
## CERTIVICATE
${CERTIVICATE.map(({ title, institute, from, to, url }) => `- [${title}](${url}): ${institute} | ${from}${to ? " - " : ""}${to || ""}`).join("\n")}
`;

fs.writeFileSync("./CV.md", update_cv);
