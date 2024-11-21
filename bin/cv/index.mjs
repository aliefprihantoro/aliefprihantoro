import {
  CERTIVICATE,
  PROJECT_JS,
  PROJECT_NVIM,
  PROJECT_WEB,
  TECH,
} from "../data.mjs";
import header from "./component/header.mjs";
import heading from "./component/heading.mjs";
import Layouts from "./component/layouts.mjs";
import List from "./component/list.mjs";
import paragraf from "./component/paragraf.mjs";

export default function () {
  Layouts((doc) => {
    header(doc);
    heading(doc, "TECH");
    TECH.forEach(({ list, name }) => {
      List(doc, (docc) => {
        docc
          .fontSize(10)
          .font("bold")
          .text(`${name} : `, {
            continued: true,
          })
          .font("regular")
          .text(list.join(" , "));
      });
    });
    doc.moveDown();
    heading(doc, "CERTIVICATE");
    CERTIVICATE.map(({ url, to, from, title, institute }) => {
      List(doc, (docc) => {
        docc
          .fontSize(10)
          .text(title, {
            link: url,
          })
          .font("regular")
          .text(`${institute} | ${from}${to ? " - " : ""}${to || ""}`);
      });
    });
    doc.moveDown();
    heading(doc, "PROJECT WEB");
    PROJECT_WEB.forEach(({ title, repo, description }) => {
      List(doc, (docc) => {
        docc
          .fontSize(10)
          .text(title, {
            link: "https://github.com/" + repo,
          })
          .font("regular")
          .text(description || "");
      });
    });
    doc.moveDown();
    heading(doc, "PROJECT JS/TS");
    PROJECT_JS.forEach(({ title, repo, description }) => {
      List(doc, (docc) => {
        docc
          .fontSize(10)
          .text(title, {
            link: "https://github.com/" + repo,
          })
          .font("regular")
          .text(description || "");
      });
    });
    doc.moveDown();
    heading(doc, "PROJECT NVIM");
    PROJECT_NVIM.forEach((repo) => {
      List(doc, (docc) => {
        docc.fontSize(10).text(repo, {
          link: `https://github.com/muryp/${repo}`,
        });
      });
    });
  });
}
