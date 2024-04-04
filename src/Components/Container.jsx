import React from 'react'
import icon from '../Assets/icon.png'
import './Container.css'
import TaskInput from './TaskInput'
import TaskList from './TaskList'

const Container = () => {
    return (
        <>
            <div className="container">
                <h2>To-Do List <img src={icon} alt="notes-icon" /></h2>
                <TaskInput />
                <TaskList />

            </div>

        </>
    )
}

export default Container