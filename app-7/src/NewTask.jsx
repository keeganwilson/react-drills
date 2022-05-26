import React, { useState } from 'react'


const NewTask = (props) => {
    const [userInput, setUserInput] = useState("")

    const inputChangeHandler = (event) => {
        setUserInput(event.target.value)
    }

    const clickHandler = () => {
        props.addTask(userInput);
        setUserInput("");
    }

    return (
        <div>
            <input onChange={inputChangeHandler}></input>
            <button onClick={clickHandler}></button>
        </div>
    )
}

export default NewTask