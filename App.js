import './App.css';
import { useState, useEffect } from 'react';
import firebase from './Firebase';
import FbCreate from './FbCreate';
import DataBlock from './DataBlock';

const ref = firebase.firestore().collection("developers")

function App() {


  // console.log(ref);

  const [data, setdata] = useState([])
  const [loader, setloader] = useState(true)
  // const [name, setname] = useState("")
  // const [skill, setskill] = useState("")

  // * load data whenever db is updated

  function getData(){
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setdata(items)
      setloader(false)
    })
  }

  // * load data whenever page is reloaded

  // function getData2(){
  //   ref.get().then((item) => {
  //     const items = item.docs.map((doc) => doc.data())
  //     setdata(items)
  //     setloader(false)
  //   })
  // }

  useEffect(() => {
    getData()
    // getData2()
  }, [])





  return (
    <div className="App">
      <h1>#firebase firestore database</h1>
      
      {loader === false && (data.map((dev) => (
        <DataBlock dev={dev} />
        )))}

        <FbCreate />
    </div>
  );
}

export {ref}
export default App;
