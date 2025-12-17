import React, { useState } from "react"
import Task from "./Task"


const List = () => {

    const [taskList, setTaskList] = useState(["Hola", "amigo"])
    const [task, setTask] = useState("No hacer nada")

    const addNewTask = (e) => {
        if (e.key === "Enter" && task.trim() !== "") {
            setTaskList([...taskList, task])
            setTask("")
        } else if (e.key === "Enter") {
            alert("No has escrito nada")
        }
    }

    const deleteTask = (e) => {
        setTaskList(taskList.filter((elem) => elem.key != e.target.key))
    }


    return (
        <div>
            <div className="mx-auto" style={{ width: "600px", height: "60px" }}>
                <input className="border-2" style={{ width: "100%", height: "100%" }} type="text" value={task} onChange={(e) => { setTask(e.target.value) }} onKeyUp={addNewTask} />

                {taskList.map((task, index) => (
                    <div key={index} className="bg-success d-flex justify-content-between">
                        <Task doWhat={task} />
                        <button type="button" onClick={deleteTask} style={{backgroundColor:"transparent", border:"0px"}}><span class="material-symbols-outlined">
                            delete
                        </span></button>
                    </div>

                ))}</div>
        </div>
    )
}

export default List