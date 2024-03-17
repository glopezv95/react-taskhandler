import { useState } from 'react'

export default function Tasks() {

    const [tasklist, setTasklist] = useState([]);
    const [tasklistLength, setTasklistLength] = useState(0);

    const handleChange = (e) => {

        e.preventDefault();
        const value = e.target[0].value;

        if (value !== "") {

            const newTask = {
                name: value,
                date: new Date().toLocaleDateString()
            };

            setTasklist(prevTasklist => [newTask, ...prevTasklist])
            setTasklistLength(prevTasklistLength => prevTasklistLength +1);
        };
        
        e.target[0].value = "";
    }

    const deleteTask = (index) => {
        setTasklist(prevTasklist => prevTasklist.filter((_, i) => i !== index));
        setTasklistLength(prevTasklistLength => prevTasklistLength -1);
    };

    return (

        <div className='tasks'>

            <h3>{tasklistLength} tasks currently added</h3>

            <form onSubmit={handleChange}>

                <div id="input-line">
                    <input type='text' id="task-input"></input>
                    <input type='submit' value='SUBMIT'></input>
                </div>

            </form>

            <ul>

                {tasklist.map((task, index) => 
                    <li
                        key={index}
                        onClick={() => deleteTask(index)}>
                        {task.name} <span>Added {task.date}</span>
                    </li>)}

            </ul>

        </div>

    )
}