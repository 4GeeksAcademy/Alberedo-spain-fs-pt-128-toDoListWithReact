import React, { useState } from "react"
import Task from "./Task"


const List = () => {

    const [taskList, setTaskList] = useState(["Barrer los platos", "Fregar el cielo"])
    const [task, setTask] = useState("")

    const addNewTask = (e) => {
        if (e.key === "Enter" && task.trim() !== "") {
            setTaskList([...taskList, task])
            setTask("")
        } else if (e.key === "Enter") {
            alert("No has escrito nada")
        }
    }

    const deleteTask = (indexToDelete) => {

        const newList = taskList.filter((_, index) => index !== indexToDelete);
        setTaskList(newList);
    }


    return (
        <div className="mt-5">
            <div className="mx-auto" style={{ width: "600px", backgroundColor: "white", boxShadow: "0px 1px 5px #00000054" }}>
                <input className="border border-1 ps-5" placeholder="¿Que debes recordar?" style={{ width: "100%", height: "60px", fontFamily: "Indie Flower", fontSize: "30px" }} type="text" value={task} onChange={(e) => { setTask(e.target.value) }} onKeyUp={addNewTask} />

                {taskList.length == 0 ?
                    <>
                        <div className="task border border-1 d-flex justify-content-between align-items-center">
                            <p className="m-3">No hay tareas, añadir tarea</p>
                        </div>
                    </>
                    :
                    taskList.map((task, index) => (
                        <div key={index} className="task border border-1 d-flex justify-content-between align-items-center">
                            <Task doWhat={task} />
                            <button type="button" className="delete-btn" onClick={() => deleteTask(index)} style={{ backgroundColor: "transparent", border: "0px" }}><span class="material-symbols-outlined">
                                delete
                            </span></button>
                        </div>

                    ))}

                {taskList.length != 0 &&
                    <> <div className="border border-1 mx-auto ps-2" style={{ width: "600px", height: "60px", color: "grey", alignContent: "center", textAlign: "start" }}>Tareas restantes: {taskList.length} </div>


                    </>}
            </div>
            <div className="border border-1 border-top-0 mx-auto " style={{ width: "590px", height: "5px", boxShadow: "0px 1px 5px #00000054" }}></div>
            <div className="border border-1 border-top-0 mx-auto " style={{ width: "580px", height: "5px", boxShadow: "0px 1px 5px #00000054" }}></div>
            <div className="border border-1 border-top-0 mx-auto " style={{ width: "570px", height: "5px", boxShadow: "0px 1px 5px #00000054" }}></div>
        </div>
    )
}

export default List