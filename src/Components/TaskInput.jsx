import React, { useEffect, useState } from 'react';
import './TaskInput.css';
import TaskList from './TaskList';

const getLocalItem = () => {
    let savedData = localStorage.getItem('myData');
    if (savedData) {
        return JSON.parse(savedData);
    } else {
        return [];
    }
}; // to get data from localStorage

export const TaskInput = () => {

    const [activity, setActivity] = useState('');
    const [listData, setListData] = useState(getLocalItem());

    useEffect(() => {
        localStorage.setItem('myData', JSON.stringify(listData));
    }, [listData]); // to set the localStorage

    const handleInputChange = (e) => {
        setActivity(e.target.value);
    };

    const handleAddTask = () => {
        if (activity.trim() !== '') {
            // Update the data structure to include an id for each task
            const newTask = {
                id: new Date().getTime(), // Unique id based on current timestamp
                task: activity
            };
            setListData([...listData, newTask]);
            setActivity('');
        } else {
            alert('Enter a task!');
        }
    };

    const removeAll = () => {
        setListData([]);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <>
            <div className="row">
                <input
                    required
                    type="text"
                    placeholder="Enter your task"
                    value={activity}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleAddTask}>Add</button>
            </div>
            <TaskList listData={listData} setListData={setListData} />
            {listData.length >= 1 && (
                <button className='remove-btn' onClick={removeAll}>Clear Tasks</button>
            )}
        </>
    );
};

export default TaskInput;


