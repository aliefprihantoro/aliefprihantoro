/**
 * @argument {import('pdfkit')} doc
 * @argument {string} text
 */
export default function (doc, text) {
  doc
    .fontSize(8)
    .font("assets/fonts/Lato-Regular.ttf")
    .text(text, {
      align: "left",
    })
    .moveDown();
}
