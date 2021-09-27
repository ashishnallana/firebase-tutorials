import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import { ref } from './App'

function FbCreate() {

    const [name, setname] = useState("")
    const [skill, setskill] = useState("")

    function createDoc(newDataObj){
        console.log("😊");
        ref
        // .doc() // * firebase generated id
        .doc(newDataObj.id) // * our generated id
        .set(newDataObj)
        .catch((err) => {
            alert(err)
            console.error(err)
        })
        console.log("❤");
    }

    return (
        <div>
            <input type="text" id="name1" placeholder="name" onChange={(e) => setname(e.target.value)} />
            <input type="text" id="skill1" placeholder="skill" onChange={(e) => setskill(e.target.value)} />
            <button onClick={() => {
                createDoc({name,skill, id: uuidv4()})
                document.getElementById("name1").value = ""
                document.getElementById("skill1").value = ""
            }}>click to create new doc</button>
        </div>
    )
}

export default FbCreate
