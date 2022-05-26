import React from 'react'
import Todo from './Todo'

const List = (props) => {
    let list = props.tasks.map((elem, index) => {
        return <Todo key={index} task={elem} />
    });

    return <div>{list}</div>
}

export default List


