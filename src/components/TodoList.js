import React,{ useState,useEffect } from 'react'
import todo from '../image/todo.png';
import "../App.css"

const getLocalItems=()=>{
    let list=localStorage.getItem('lists');
    console.log(list);
    if(list){
        return JSON.parse(localStorage.getItem('lists'))
    }else{
        return [];
    }
}
  
const TodoList = () => {
    const[inputData,setInputData]=useState('');
    const[data,setData]=useState(getLocalItems());

   const AddItem=()=>{
    if(!setInputData){
        alert("fill the field")
         }else{
          setData([...data,inputData]);
          setInputData("");
          
         }
   }
   const deleteItem=(i)=>{

 
 setData(data.filter((elem,id)=>id!==i))

}
const removeAll=()=>{
    setData([])
}
useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(data))
},[data]);

return (
    <>
    <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src={todo} alt='todo'/>
                <figcaption>Add your List Here ✌️</figcaption>
            </figure>
            <div className='addItems'>
                <input type='text' placeholder='✍️  Add item...' value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
                <i className="fa fa-plus" title="Add item" onClick={AddItem}></i>
            </div>
            <div className='showItems'>
                {
                   data.map((ele,id)=>{
                        return(
                        <div className='eachItem' key={id}>
                        <h3>{ele}</h3>
                        <i className="far fa-trash-alt" title="Delete item" onClick={()=>deleteItem(id)}></i>
                    </div>

                     ) })
                }
               
            </div>
            <div className='showItems'>
                <button className='btn effect04'data-sm-link-text="Remove All"onClick={removeAll}><span>Check List</span></button>

            </div>
        </div>
    </div>
    </>
  )
}

export default TodoList