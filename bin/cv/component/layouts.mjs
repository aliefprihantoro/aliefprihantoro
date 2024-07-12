import { createWriteStream } from "fs";
import { CV_PATH } from "../../data.mjs";
import PDFDocument from "pdfkit";

/**
 *@param {(prompt: import('pdfkit')) => void} callback - The function to call with a string argument.
 */
export default function (callback) {
  const doc = new PDFDocument({
    margin: 72,
    size: "A4",
  });
  doc.registerFont("regular", "assets/fonts/Lato-Regular.ttf");
  doc.registerFont("bold", "assets/fonts/Lato-Bold.ttf");
  callback(doc);
  doc.pipe(createWriteStream(CV_PATH));
  doc.end();
}
