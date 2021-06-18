import { useState } from 'react'
import './App.css';

import { Animated } from 'react-animated-css'

function App() {
  const [availableTask, setAvailableTask] = useState([])
  const [completedTask, setCompletedTask] = useState([])
  const [todo, setToDO] = useState('')

  const removeTask = (isAvailable = Boolean, data) => {
    if (isAvailable) {
      var array = [...availableTask]
      array[array.indexOf(data)].status = false
      setAvailableTask(array)
      setTimeout(() => {
        array = [...availableTask]
        array.splice(array.indexOf(data), 1)
        setAvailableTask(array)
      }, 100)
    } else {
      array = [...completedTask]
      array[array.indexOf(data)].status = false
      setCompletedTask(array)
      setTimeout(() => {
        array = [...completedTask]
        array.splice(array.indexOf(data), 1)
        setCompletedTask(array)
      }, 100)
    }
  }
  let taskInput
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input ref={(textbox)=>{taskInput=textbox}} onChange={(e) => setToDO(e.target.value)} value={todo} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => {
          !todo ? alert("There is no task written") : setAvailableTask([...availableTask, { id: Date.now(), text: todo, status: true }])
          setToDO('')
          taskInput.focus()
        }} className="fas fa-plus"></i>
      </div>

      <div className="taskContainer">
        {<div className="availableContainer">
          <h2 className="task-title">Available task</h2>
          <div className="todos">
            {//available task
              !availableTask[0] ? <h3>There is no Available Task</h3> : availableTask.map((obj) => {
                return (
                  <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration={100} animationOutDuration={100} isVisible={obj.status}>
                    <div className="todo" key={obj.id}>
                      <div className="left">
                        <div>
                          <input onClick={(e) => {
                            var tasks = [...availableTask]
                            tasks[tasks.indexOf(obj)].status = false
                            console.log(tasks[tasks.indexOf(obj)].status);
                            setAvailableTask(tasks)
                            setTimeout(() => {
                              tasks = [...availableTask]
                              tasks.splice(tasks.indexOf(obj), 1)
                              setAvailableTask(tasks)
                              setCompletedTask([...completedTask, { id: obj.id, text: obj.text }])
                            }, 100)
                            e.target.checked = false
                          }} value={false} type="checkbox" name="" id="" />
                        </div>
                        <p>{obj.text}</p>
                      </div>
                      <div className="right">
                        <i className="fas fa-times" onClick={() => removeTask(true, obj)}></i>
                      </div>
                    </div>
                  </Animated>
                )
              })
            }
          </div>
        </div>}


        {<div className="completedContainer">
          <h2 className="task-title">completed task</h2>
          <div className="todos">
            {//completed task
              !completedTask[0] ? <h3>There is no Completed Task</h3> : completedTask.map((obj, index) => {
                return (
                  <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration={100} animationOutDuration={100} isVisible={obj.status}>
                    <div className="todo" key={index}>
                      <div className="left">
                        <div>
                          <input onClick={(e) => {
                            var tasks = [...completedTask]
                            tasks[tasks.indexOf(obj)].status = false
                            setCompletedTask(tasks)
                            setTimeout(() => {
                              tasks = [...completedTask]
                              tasks.splice(tasks.indexOf(obj), 1)
                              setCompletedTask(tasks)
                              setAvailableTask([...availableTask, { id: obj.id, text: obj.text }])
                            }, 100)
                            e.target.checked = true
                          }} checked type="checkbox" name="" id="" />
                        </div>
                        <p><del>{obj.text}</del></p>
                      </div>
                      <div className="right" onClick={() => removeTask(false, obj)}>
                        <i className="fas fa-times"></i>
                      </div>
                    </div>
                  </Animated>
                )
              })
            }
          </div>
        </div>}
      </div>

    </div>
  );
}

export default App;