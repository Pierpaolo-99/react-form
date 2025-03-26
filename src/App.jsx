import { useState } from "react";


const blogTitles = [
  "Come iniziare con React",
  "10 consigli per migliorare il tuo JavaScript",
  "Guida completa a CSS Flexbox",
  "Introduzione a Node.js",
  "Come creare un portfolio online",
  "Le migliori librerie per sviluppatori React",
  "Ottimizzazione delle performance in React",
  "Come utilizzare gli hook in React",
  "Guida passo passo a Git e GitHub",
  "Come diventare uno sviluppatore full-stack"
];

export default function App() {


  return (
    <div className="container">
      <ul className="list-group">
        {blogTitles.map((title, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >{title}</li>
        ))}
      </ul>
    </div>
  )
}