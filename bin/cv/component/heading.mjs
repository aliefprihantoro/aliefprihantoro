/**
 * @argument {import('pdfkit')} doc
 * @argument {string} text
 */
export default function (doc, text) {
  doc.fontSize(15).font("bold").text(text, {
    align: "left",
  });
}
