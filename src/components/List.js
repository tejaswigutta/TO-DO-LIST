function List({list,removeItem}){
    
    function clickHandle(e){
        removeItem(e.target.id)
    }
 
    return(
     <ul>
           {list.map((data,index)=><div className="item" key={index}><li key={index} id={index}>{data} </li><button id={index} onClick={clickHandle}>❌</button></div>)}
      </ul>
    )
 }
 export default List;