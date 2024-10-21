import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import logo from '../../assets/logo.png';
import watermark from '../../assets/logo.png';

const PdfGenerator = () => {
  const generatePDF = () => {
    const pdfDoc = new jsPDF();

    const logoX = 20;
    const logoY = 20;
    const logoWidth = 25;
    const logoHeight = 30;
    pdfDoc.addImage(logo, 'PNG', logoX, logoY, logoWidth, logoHeight);


    pdfDoc.setFont('helvetica', 'bold');
    pdfDoc.setFontSize(19);
    pdfDoc.text('Dika Lestari Catering', logoX + 25, logoY + 13);

    pdfDoc.setFontSize(17);
    pdfDoc.text('Invoice', logoX + 150, logoY + 13);

   
    pdfDoc.setFont('helvetica', 'normal');
    pdfDoc.setFontSize(10);
    pdfDoc.text('INV/20240616/MPL/3969248704', logoX + 120, logoY + 18);

    pdfDoc.setFont('helvetica', 'bold');
    pdfDoc.setFontSize(10);
    pdfDoc.text('DITERBITKAN ATAS NAMA', logoX + 5, logoY + 30);
    
    pdfDoc.setFont('helvetica', 'normal');
    pdfDoc.setFontSize(9);
    pdfDoc.text('Penjual: Emina Official Store', logoX + 5, logoY + 35);

    pdfDoc.setFont('helvetica', 'bold');
    pdfDoc.setFontSize(10);
    pdfDoc.text('Untuk', logoX + 90, logoY + 30);

    const dataWilayah = [
        { label: 'Pembeli', value: 'astyy' },
        { label: 'Tanggal Pembelian', value: '11 September 2024' },
        { label: 'Alamat Pengirimian', value: 'Negara SPN' },
        { label: 'Nomor', value: '65dd753e12690359cbc59add/01/STDB/I65'},
      ];
      
      let cY = 58; 
      const maxWidth = 53; 
      
     
      let maxLabelWidth = 0;
      dataWilayah.forEach(item => {
        const labelWidth = pdfDoc.getTextWidth(item.label);
        if (labelWidth > maxLabelWidth) {
          maxLabelWidth = labelWidth;
        }
      });
      
      
      const labelX = 110; 
      const colonX = labelX + maxLabelWidth + 5; 
      const valueX = colonX + 5; 
      
      dataWilayah.forEach(item => {
        pdfDoc.setFontSize(9);
        pdfDoc.setFont('helvetica', 'normal');
      
       
        pdfDoc.text(`${item.label}`, labelX, cY);
      
       
        pdfDoc.text(':', colonX, cY);
      
       
        const splitText = pdfDoc.splitTextToSize(`${item.value}`, maxWidth);
      
        
        pdfDoc.text(splitText, valueX, cY);
      
       
        cY += splitText.length * 6;
      });
      
    const items = [
        ['MUST HAVE EMINA GLASSY BRIGHT KIT - NIGHT ROUTINE', '1', 'Rp82.400', 'Rp82.400'],
        ['Emina Bright Stuff for Acne Prone Skin Moisturizing Cream', '1', 'Rp25.175', 'Rp25.175'],
        ['Emina Bright Stuff Face Toner - Toner Wajah Cerah', '1', 'Rp26.350', 'Rp26.350'],
        ['Emina Sun Battle Spf 50 Pa++++ Cica Acne Fighter Sunscreen', '1', 'Rp40.500', 'Rp40.500'],
      ];
      
      pdfDoc.autoTable({
        head: [['INFO PRODUK', 'JUMLAH', 'HARGA SATUAN', 'TOTAL HARGA']],
        body: items,
        startY: logoY + 80,
        startX: logoX + 70,
        styles: {
      
          textColor: [0, 0, 0], 
        },
        headStyles: {
          fillColor: [204, 251, 241], 
          textColor: [0, 0, 0],
        },
        alternateRowStyles: {
        },
      });
      


    const totalY = pdfDoc.lastAutoTable.finalY + 10;
    pdfDoc.setFontSize(10);
    pdfDoc.text('TOTAL HARGA 4 BARANG:', logoX, totalY);
    pdfDoc.text('Rp174.865', logoX + 60, totalY);

    pdfDoc.text('TOTAL BELANJA:', logoX, totalY + 10);
    pdfDoc.text('Rp156.670', logoX + 60, totalY + 10);

    pdfDoc.text('BIAYA APLIKASI:', logoX, totalY + 20);
    pdfDoc.text('Rp500', logoX + 60, totalY + 20);

    pdfDoc.text('TOTAL TAGIHAN:', logoX, totalY + 30);
    pdfDoc.text('Rp156.670', logoX + 60, totalY + 30);

    

    const pageWidth = pdfDoc.internal.pageSize.getWidth();
    const pageHeight = pdfDoc.internal.pageSize.getHeight();
    pdfDoc.rect(2, 2, pageWidth - 4, pageHeight - 4);

    pdfDoc.save('Invoice.pdf');
  };

  return (
    <div>
      <h1>Download Invoice</h1>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default PdfGenerator;

