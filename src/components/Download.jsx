import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Download () {
  const html = document.querySelector('.resume');

  html2canvas(html)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      var pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
      var pdfWidth = pdf.internal.pageSize.getWidth();
      var pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save("mypdf.pdf");

  })

}