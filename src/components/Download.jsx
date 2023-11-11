import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Download () {
  const html = document.querySelector('.resume');

  html2canvas(html)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("download.pdf");  
  })

}