import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function CV() {

    const [pdfState, setPdfState] = useState({ numPages: null, pageNumber: 1 })


    const onDocumentLoadSuccess = ({ num }) => {
        setPdfState({ ...pdfState, numPages: num });
    };

    return (
        <div className="container-fluid">
            <object data="CV_General_March2022-EN.pdf" type="application/pdf" width="100%" height="800px">
                <div className="alert alert-warning mt-1" role="alert">
                    It appears you don't have a PDF plugin for this browser. Click <a href="CV_General_March2022-EN.pdf">here</a> to download the PDF
                </div>

            </object>
        </div>

    )
}
