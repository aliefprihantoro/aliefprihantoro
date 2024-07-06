import { existsSync, renameSync, rmSync, writeFileSync } from "fs";
import {
  DESCRIPTION,
  CONTACT,
  TECH,
  LINKS,
  CERTIVICATE,
  PROJECT_WEB,
  PROJECT_NVIM,
} from "./data.mjs";

// UPDATE ASSETS
const isProfileUpdate = existsSync("./assets/new.png");
if (isProfileUpdate) {
  renameSync("./assets/new.png", "./assets/profile.png");
}
const checkPdf = existsSync("./assets/*.pdf");
if (checkPdf) {
  rmSync("./assets/*.pdf");
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

writeFileSync("./CV.md", update_cv);
