import fs from "fs";
const jsonToObj = (path) => JSON.parse(fs.readFileSync(path, "utf8"));
/**
 * @type {{name:string,description:string,role:string,language:string[]}}
 */
export const HEADER = jsonToObj("./data/header.json");
/**
 * @type {{telp:string,email:string}}
 */
export const CONTACT = jsonToObj("./data/contact.json");
/**
 * @type {{name:string,url:string,username:string}[]}
 */
export const LINKS = jsonToObj("./data/links.json");

/**
 * @type {{name:string,list:string[]}[]}
 */
export const TECH = jsonToObj("./data/tech.json");
/**
 * @type {{title:string,repo:string,preview?:string[]}[]}
 */
export const PROJECT_WEB = jsonToObj("./data/project/web.json");
/**
 * @type {string[]}
 */
export const PROJECT_NVIM = jsonToObj("./data/project/nvim.json");
/**
 * @type {{
    title:string,
    institute:string,
    from:string,
    to?: string,
    id?: string,
    url: string}[]}
 */
export const CERTIVICATE = jsonToObj("./data/certivicate.json");
const CURR_DATE = new Date()
  .toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" })
  .replace(/\s/g, "-")
  .replace(/,/g, "");
export const CV_PATH = `assets/CV_ALIEF_PRIHANTORO_${CURR_DATE}.pdf`;
