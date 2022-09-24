import React, { useState , useEffect } from 'react';
import Task from './Task';

const Home = () => {
    
 
    // let initialArr = sessionStorage.getItem("taskItem") ? JSON.parse(sessionStorage.getItem("taskItem")) : [];
    let initialArr = localStorage.getItem("taskItem") ? JSON.parse(localStorage.getItem("taskItem")) : [];
    // const[tasks,setTask] = useState([]);
    const[tasks,setTask] = useState(initialArr);
    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");

    const submitHandler = (event) =>{
        event.preventDefault();

        if(title !== '' && description !== ''){
            // setTask([...tasks,{title,description}]);

            let itemsObj = {
                title : title,
                description : description,
            }

            tasks.push(itemsObj);

            setTask(tasks);

            console.log("Line no. 25 ",tasks);

        }else{
            alert("Please Fill Mandatory Fields!")
        }

        setTitle(''); 
        setDescription('');

        // console.log(JSON.parse(sessionStorage.getItem("taskItem")));
        if(localStorage.getItem("taskItem")){
            console.log(JSON.parse(localStorage.getItem("taskItem")));
        }

    }

    const deleteTask = (index) => {

        const filteredArr = tasks.filter((val,i) =>{
            return i !== index;
        });

        console.log(filteredArr);
        setTask(filteredArr);

    }

    useEffect(() => {
        console.log("Use Effect Method Called");
        // sessionStorage.setItem("taskItem",JSON.stringify(tasks));
        localStorage.setItem("taskItem",JSON.stringify(tasks));
    }, [tasks]);

  return (
    <>
        <div className='container'>
            <h1>Daily Goals</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Title' className='formTag' value = {title} onChange = {(e)=>setTitle(e.target.value)} />
                <textarea name="" id="" cols="30" rows="5" placeholder='Description' className='formTag' value = {description} onChange = {(e)=>setDescription(e.target.value)}></textarea>
                <button className='formTag btn'>Add To List</button>
            </form>

            {tasks.map( (items,index) => (
                // <Task title={"Learning React"} desc = {"React is a javascript light-weight library"}/>
                <Task key = {index} title = {items['title']} desc = {items['description']} deleteItem = {deleteTask} index = {index}/>
            ))}

            
        </div>
    </>
   
  )
}

export default Home