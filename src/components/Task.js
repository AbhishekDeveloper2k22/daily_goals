import React from 'react'

function Task({title, desc, deleteItem, index}) {

  return (
    <>
        <div className='task'>
            <div>
                <p>{title}</p>
                <span>{desc}</span>
            </div>
            <button onClick={()=>{
                deleteItem(index)}}>-</button>
        </div>
    </>
    
  )
}

export default Task