import { useEffect,useState } from 'react';
import './App.css';
import firebase from './firebase';

function App() {

  const ref = firebase.firestore().collection("devs")
  console.log(ref);

  const [data, setdata] = useState([])
  const [loader, setloader] = useState(true)
  
  function getData(){
    ref.onSnapshot((querySnapshot) =>{
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setdata(items)
      setloader(false)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <h1>We are learning firebase firestore database</h1>
      {loader === false && data.map((dev) => (
        <div key={dev.id}>
        <h2>{dev.name}</h2>
        <h3>{dev.skill}</h3>
        <p>{dev.experience}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
