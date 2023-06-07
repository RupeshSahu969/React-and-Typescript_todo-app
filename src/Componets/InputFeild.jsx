import React from 'react'
import "./style.css"

interface Props {
    todo:string,
    setTodo:Recat.Dispatch<React.SetStateAction<string>>;
}

const InputFeild = ({todo,setTodo} : Props) => {

  return (
    <div>
      <form className='input'>
    <input placeholder='Enter a task' className='input_box' />
    <button className='input_submit'>Go</button>
      </form>
    </div>
  )
}

export default InputFeild
