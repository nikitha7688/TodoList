import axios from "axios";
import { useEffect, useState } from "react";

function App()
{
  
  const [enteredvalue,setevalue] =useState("")
  const [fruit,setfruit] = useState([])
  
  


  useEffect (function(){
    axios.get("http://localhost:5000/fruitlist").then(function(data){
      setfruit(data.data)
  })
},[])



  function handlevalue(evt)
  {
    setevalue(evt.target.value)
  }
   
  function add()
  {

    axios.post("http://localhost:5000/addfruit",{newfruit:enteredvalue})
    setfruit([...fruit,{name:enteredvalue}])
    setevalue("");
  }
  
  

  
  
  return(
    <div className="card">
      <h1 className="h1">Todo-List</h1>
      <input  className ="input" onChange={handlevalue}></input>
      <button  className = " button" onClick={add}>Add</button>

      {fruit.map(function(item,index){
        return <h1 key={index}>{item.name}</h1>

      })}

  
      </div>
  )
}
    


export default App