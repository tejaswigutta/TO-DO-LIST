import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import List from "./components/List.js"

function App() {
  const [currentItem,setCurrentItem]=useState("");
  const [itemList,setItemList]=useState([])

  const onChangeHandler=(e)=>{
    setCurrentItem(e.target.value)
  }

  const addItem=()=>{
    if(currentItem==="")
      return
    setItemList(prev=>[...prev,currentItem])
    setCurrentItem("")
  }

  const removeItem=(id)=>{
     setItemList(itemList.filter((item,index)=>index!=id))

  }
  
  return (
    <div className="App-header">
      <div className="wrapper">
        <div className="Input-wrapper">
          <input  value={currentItem} type="text" onChange={onChangeHandler} placeholder="ADD ITEM"/>
          <button onClick={addItem}>➕</button>
        </div>
        <List list={itemList} removeItem={removeItem}/>
        
      </div>
    </div>
  );
}

export default App;
