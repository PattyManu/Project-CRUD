import React from "react";
import { jsPDF, HTMLOptionImage } from "jspdf";
import { toPng, toCanvas } from "html-to-image";
type props = {
    html?: React.RefObject<HTMLDivElement>;
};


const GeneratePdf: React.FC<props> = ({ html }) => {
    // const generatePdf = () => {
    //     const doc = new jsPDF();

    //     let textElement = document.getElementById("text");
    //     let split = textElement ? doc.splitTextToSize(textElement.innerText, 200) : '';
    //     let h1Element = document.querySelector(".content > h1");
    //     let h1Text = h1Element ? h1Element.innerHTML : '';

    //     var valor = document.getElementById("#nome-teste")
    //     console.log(valor?.textContent)
    //     doc.text(h1Text, 75, 5);
    //     doc.text(split, 5, 75);
    //     doc.output("dataurlnewwindow");

    // };

    const generateImage = async () => {
        if (html && html.current) {
            const image = await toPng(html.current, { quality: 0.95 });
            const doc = new jsPDF();

            doc.addImage(image, 'JPEG', 5, 22, 200, 160);
            doc.save();
        }


    }
    return (

        <div className="button-container">
            <button onClick={generateImage}>
                Get PDF using image
            </button>
            {/* <button onClick={generatePdf}>
                Get PDF as text
            </button> */}
        </div>

    );
};

export default GeneratePdf;