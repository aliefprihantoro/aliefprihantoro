const jsonToObj = (path) => JSON.parse(fs.readFileSync(path, "utf8"));
export const DESCRIPTION = fs.readFileSync("./data/description.md", "utf8");
export const CONTACT = jsonToObj("./data/contact.json");
export const LINKS = jsonToObj("./data/links.json");
export const TECH = jsonToObj("./data/tech.json");
export const PROJECT_WEB = jsonToObj("./data/project/web.json");
export const PROJECT_NVIM = jsonToObj("./data/project/nvim.json");
export const CERTIVICATE = jsonToObj("./data/certivicate.json");
const CURR_DATE = new Date()
  .toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" })
  .replace(/\s/g, "-")
  .replace(/,/g, "");
export const CV_PATH = `./assets/CV_ALIEF_PRIHANTORO_${CURR_DATE}.pdf`;
