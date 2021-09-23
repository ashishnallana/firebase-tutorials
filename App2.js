import './App.css';
import { useState, useEffect } from 'react';
import firebase from './Firebase';

function App() {

  const ref = firebase.firestore().collection("developers")
  // console.log(ref);

  const [data, setdata] = useState([])
  const [loader, setloader] = useState(true)

  // function getData(){
 // *An initial call using the callback you provide creates a document snapshot immediately with the current contents 
 // *of the single document. Then, each time the contents change, another call updates the document snapshot.
//   
//   
//   
  ************listener to receive data-change events.
  //   ref.onSnapshot((querySnapshot) => {
  //     const items = []
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data())
  //     })
  //     setdata(items)
  //     setloader(false)
  //   })
  // }

  function getData2(){
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data())
      setdata(items)
      setloader(false)
    })
  }

  useEffect(() => {
    // getData()
    getData2()
  }, [])

  return (
    <div className="App">
      <h1>#firebase firestore database</h1>
      
      {loader === false && (data.map((dev) => (
        <div key={dev.id}>
          <h1>Name : {dev.name}</h1>
          <p>Skill : {dev.skill}</p>
        </div>
        )))}
    </div>
  );
}

export default App;
