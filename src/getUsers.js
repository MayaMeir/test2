import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Todo from './todo';
function Users() {
    const [users, setUsers] = useState([]);
    const [id, setId] = useState(0);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            setUsers(res.data);
        })
    })

    function foo(id) {
        setId(id)
    }


    return (
        <div>
            <ul>
                {
                    users.map((user, index) => {
                        return (
                            <div style={{textAlign:"left"}} key={index}>
                                <li onClick={() => foo(user.id)} >User Name:{user.name}</li>
                        
                            </div>
                          );
                    })
                }
                
            </ul>
    <Todo id={id} />
        </div>
    );
}

export default Users;
