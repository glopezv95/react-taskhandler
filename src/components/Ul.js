import close from '../close.png';

export default function Ul({ tasklist, deleteTask }) {

    return (

        <ul>

                {tasklist.map((task, index) => (

                    <div key={`${index}-div`} className="task-li">

                        <li
                            key={`${index}-li`}>
                                {task.name} 
                                <span>Added {task.date}</span>
                        </li>

                        <div id="button" onClick={() => deleteTask(index)}>
                            <img src={close} alt="Eliminate task"/>
                            <span>Delete</span>
                        </div>

                    </div>

                    
                    ))
                }

            </ul>
    )
}