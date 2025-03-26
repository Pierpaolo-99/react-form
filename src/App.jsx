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

  const [newTitle, setNewTitle] = useState('')
  const [titles, setTitles] = useState(blogTitles)
  const [error, setError] = useState(null)

  function handleFormSubmit(e) {
    e.preventDefault()
    console.log(newTitle);

    if (newTitle.length <= 0) {
      setError('Error!')
    }
    else {
      setError(null)

      setTitles([...titles, newTitle])

      console.log(titles);

      setNewTitle('')
    }

  }

  return (

    <>

      <div className="container">

        {error !== null ? (<div className="alert alert-danger">{error}</div>) : ''}

        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="" className="form-label">Titolo</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              aria-describedby="helpId"
              placeholder="inserisci il titolo"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <small id="helpId" className="form-text text-muted">inserisci un titolo per il blog</small>
          </div>
        </form>

        <ul className="list-group">
          {titles.map((title, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-center"
              key={index}
            >{title}</li>
          ))}
        </ul>

      </div>
    </>

  )
}