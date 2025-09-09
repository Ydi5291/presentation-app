import React, { useState } from "react";
import './Documents.css';
import { FileText } from "lucide-react";

const docs = [
  { name: "Lebenslauf", file: "Lebenslauf_Youssouf_Diallo-img.pdf" },
  { name: "Attestation", file: "Attestation.pdf" },
  { name: "Bescheinigung", file: "Bescheinigung.pdf" },
  { name: "Arbeitszeugnis", file: "Arbeitszeugnis.pdf" }
];

const BASE_PATH = "/presentation-app/"; 

const Documents: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  return (
    <div className="documents-container">
      <h2>📂 Meine Unterlagen</h2>
      <ul className="documents-list">
        {docs.map((doc, index) => (
          <li key={index} className="document-item">
            <FileText className="icon" size={20} />
            <a
              href={`${BASE_PATH}assets/${doc.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-6"
            >
              {doc.name}
            </a>
            <button
              className="preview-btn"
              onClick={() => setSelectedDoc(doc.file)}
            >
              ansehen
            </button>
          </li>
        ))}
      </ul>

      {selectedDoc && (
        <div className="pdf-preview">
          <iframe
            src={`${BASE_PATH}assets/${selectedDoc}#toolbar=0`}
            title=" PDF ansehen"
            className="b-neutral mt-8"
          />
        </div>
      )}
    </div>
  );
};

export default Documents;


