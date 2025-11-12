import { useEffect, useState } from "react"
import axios from "axios"


function App() {
  /* salvare lista attori */
  const [attori, setAttori] = useState([]);
  /* salvare il link api dentro una constante */
  const API = "https://lanciweb.github.io/demo/api/actors/"

  useEffect(() => {
    /* call azios */
    axios
      .get(API)
      .then((risposta) => {
        setAttori(risposta.data);
        console.log("Lista attori:", risposta.data);
      })
      .catch((errore) => {
        console.error("Errore:", errore);
      });
  }, []);
  return (
    <>
      <div className="container my-4">
        <h1 className="text-center mb-4">meowattori</h1>
        <div className="row">
          {attori.map((attore) => (
            <div key={attore.id} className="col-12 col-lg-3 mb-4">
              <div className="card h-100">
                <img src={attore.image} alt={attore.name} className="card-img-top immagine-attore" />
                <div className="card-body">
                  <h5 className="card-title">{attore.name}</h5>
                  <p className="card-text mb-1">Anno di nascita: {attore.birth_year}</p>
                  <p className="card-text mb-1">Nazionalità: {attore.nationality}</p>
                  <p className="card-text mb-1">Riconoscimenti: {attore.awards}</p>
                  <p className="card-text">Biografia: {attore.biography}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
