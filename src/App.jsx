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
      <h1>meowattori</h1>

      <div>
        {attori.map((attore) => (
          <div key={attore.id}>
            <img src={attore.image} alt={attore.name} />
            <h2>{attore.name}</h2>
            <p>Anno di nascita: {attore.birth_year}</p>
            <p>Nazionalità: {attore.nationality}</p>
            <p>Biografia: {attore.bio}</p>
            <p>Riconoscimenti: {attore.awards}</p>
            <p>{attore.bio}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
