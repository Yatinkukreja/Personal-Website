import React, { FC } from 'react';

const Resume: FC = () => {
    return (
        <div>
      {/* Embedding the PDF within an iframe */}
      {/* <img src="/logo192.png"></img> */}
      <iframe
        src="/Resume_Yatin_Kukreja_March_2024.pdf"
        style={{ width: '100%', height: '87vh'}}
        frameBorder="0"
      >
        This browser does not support PDFs. Please download the PDF to view it: <a href="/resume.pdf">Download PDF</a>.
      </iframe>
    </div>
    )
};

export default Resume;