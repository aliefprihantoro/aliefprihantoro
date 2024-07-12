/**
 * @argument {import('pdfkit')} doc
 * @argument {(docc:import('pdfkit'))=>void} content
 */
export default function (doc, content) {
  // doc
  //   .fontSize(8)
  //   .font("assets/fonts/Lato-Regular.ttf")
  //   .list(content, doc.x, doc.y, {
  //     listType: "bullet",
  //     bulletRadius: 1.5,
  //   })
  //   .moveDown();
  const translateY = 0;
  const translateX = 10;
  doc
    .fontSize(13)
    .font("bold")
    .text("-", {})
    .translate(translateX, translateY)
    .moveUp();
  content(doc);
  doc.translate(translateX * -1, translateY * -1);
}
