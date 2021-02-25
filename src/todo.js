import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Todo(props) {

    const [tasks, setTasks] = useState([]);
    let id = props.id
    useEffect(() => {
       axios.get(`http://jsonplaceholder.typicode.com/todos/?userId=${id}`).then((res) => {
            setTasks(res.data);
        })
        
    })
    return (
        <div>
            <ul style={{textAlign:"left"}}>
                {
                    tasks.map((task, index) => {
                        return <li key={index}>task: {task.title}</li>
                    })
                    
                }
            </ul>

        </div>
    );
}

export default Todo;
