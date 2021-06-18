import React from 'react'

function AvailableTask(props) {
    const { availableTask, setAvailableTask,completedTask,setCompletedTask } = props
    
    return (
        <div>
            <div className="todos">
                {
                    availableTask.map((obj) => {
                        return (
                            <div className="todo">
                                <div className="left">
                                    <div>
                                        <input onChange={(e) => {
                                            const newObj=availableTask.filter(item=>item.id===e.target.id)
                                            const newObj2=availableTask.filter(item=>item.id!==e.target.id)
                                            setAvailableTask(newObj2)
                                            console.log(availableTask);
                                            setCompletedTask(completedTask,newObj)
                                            console.log(completedTask);
                                        }} value={obj.status} type="checkbox" name="" id="" />
                                    </div>
                                    <p>{obj.text}</p>
                                </div>
                                <div className="right">
                                    <i className="fas fa-times"></i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default AvailableTask
