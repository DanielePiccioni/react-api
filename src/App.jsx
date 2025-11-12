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
    </>
  )
}

export default App
