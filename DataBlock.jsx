import React,{useState} from 'react'
import { ref } from './App'
import FbEdit from './FbEdit'

function DataBlock({dev}) {

    const [editbox, seteditbox] = useState(false)

    function deleteDoc(docx){
        ref.doc(docx.id).delete()
    }

    return (
        <div key={dev.id}>
          <h1>Name : {dev.name}</h1>
          <p>Skill : {dev.skill}</p>
          <button onClick={() => deleteDoc(dev)}>delete</button>
          <button onClick={() => seteditbox(true)}>edit</button>
          {editbox === true && <FbEdit  dev={dev} seteditbox={seteditbox} />}
        </div>
    )
}

export default DataBlock
