import "./App.css";
import { useState, useEffect } from "react";
import firebase from "./Firebase";
import DataBlock from "./DataBlock";
import FbCreate from "./FbCreate";
import Auth from "./auth/Auth";
import Login from "./auth/Login";
import AfterAuth from "./AfterAuth";

const ref = firebase.firestore().collection("developers");

function App() {
  // console.log(ref);

  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);
  // const [logged, setlogged] = useState(false)
  // const [loggedIn, setloggedIn] = useState(localStorage.getItem("userLogged"));

  // * load data whenever db is updated

  function getData() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setdata(items);
      setloader(false);
    });
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
    getData();
    // getData2()
  }, []);

  return (
    <>
      <Auth>
        <AfterAuth />
        <Login />
        {/* <div className="App">
          <h1>#firebase firestore database</h1>

          {loader === false && data.map((dev) => <DataBlock dev={dev} />)}

          <FbCreate />
        </div> */}
        {/* {get ? <GetFirebase /> : <SnapshotFirebase />} */}
        {/* <SnapshotFirebaseAdvanced /> */}
      </Auth>
    </>
  );
}

export { ref };
export default App;
