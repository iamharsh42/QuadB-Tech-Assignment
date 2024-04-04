import React from 'react';
import './TaskList.css';

const TaskList = ({ listData, setListData }) => {

    const handleDelete = (taskId) => {
        const updatedList = listData.filter(task => task.id !== taskId);
        setListData(updatedList);
    };

    return (
        <div className="listContainer">
            <ul id="taskContainer">
                {listData && listData.map((task) => (
                    <li key={task.id} onClick={(e) => { e.target.classList.toggle("checked") }}>
                        {task.task}
                        <img
                            className='img'
                            src={'https://cdn-icons-png.flaticon.com/512/3405/3405244.png'}
                            onClick={() => handleDelete(task.id)}
                            style={{ height: '20px', width: '20px' }}
                            alt='cross'
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
