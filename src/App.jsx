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
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');

  function handleFormSubmit(e) {
    e.preventDefault()
    console.log(newTitle);

    if (newTitle.length <= 0) {
      setError('Error!')
    }
    else {
      setError(null)
      setTitles([...titles, newTitle])
      setNewTitle('')
    }

  }

  function handleDelete(index) {
    setTitles(titles.filter((_, i) => i !== index));
  }

  function handleEdit(index) {
    setEditingIndex(index);
    setEditingTitle(titles[index]);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    const updatedTitles = [...titles];
    updatedTitles[editingIndex] = editingTitle;
    setTitles(updatedTitles);
    setEditingIndex(null);
    setEditingTitle('');
  }


  return (
    <div className="container">
      {error !== null ? (
        <div className="alert alert-danger">{error}</div>
      ) : (
        ''
      )}

      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Titolo
          </label>
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
          <small id="helpId" className="form-text text-muted">
            inserisci un titolo per il blog
          </small>
        </div>
      </form>

      <ul className="list-group">
        {titles.map((title, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >
            {editingIndex === index ? (
              <form onSubmit={handleEditSubmit} className="d-flex w-100">
                <input
                  type="text"
                  className="form-control me-2"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                />
                <button type="submit" className="btn btn-success btn-sm">
                  Salva
                </button>
              </form>
            ) : (
              <>
                {title}
                <div>
                  <button
                    onClick={() => handleEdit(index)}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Modifica
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn btn-danger btn-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
