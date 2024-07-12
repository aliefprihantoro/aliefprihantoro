import { CONTACT } from "../../data.mjs";
/**
 * @argument {import('pdfkit')} doc
 */
export default function (doc) {
  doc
    .fontSize(15)
    .font("assets/fonts/Lato-Bold.ttf")
    .text(`ALIEF PRIHANTORO`, {
      align: "left",
      continued: true,
    })
    .fontSize(8)
    .font("assets/fonts/Lato-Regular.ttf")
    .text(`email :${CONTACT.email}`, {
      align: "right",
    })
    .text(`github/linkedin : @alifprihantoro`, {
      align: "right",
    })
    .text(`telp : ${CONTACT.telp}`, {
      align: "right",
    })
    .text(`FULL STACK WEB DEV`, {
      continued: false,
      align: "left",
    });

  doc.moveDown();
}
