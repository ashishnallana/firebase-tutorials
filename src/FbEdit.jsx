import React,{useState} from 'react'
import { ref } from './App'

function FbEdit({dev,seteditbox}) {

    
    const [name, setname] = useState("")
    const [skill, setskill] = useState("")

    function editDoc(updtedDoc){
        ref
        .doc(updtedDoc.id)
        .update(updtedDoc)
        .catch((err) => {
            alert(err)
            console.error(err);
        })
    }

    return (
        <div>
            <p>edit box</p>
            <input type="text" placeholder="name" onChange={(e) => setname(e.target.value)} />
            <input type="text" placeholder="skill" onChange={(e) => setskill(e.target.value)} />
            <button onClick={() => {
                editDoc({name: name, skill: skill,id: dev.id})
                seteditbox(false)
            }}>update</button>
        </div>
    )
}

export default FbEdit
