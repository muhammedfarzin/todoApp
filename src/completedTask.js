const { obj, toDos, setToDos } = props
if (obj.status === false) {
    return (
        <div className="todo">
            <div className="left">
                <div>
                    <input onChange={(e) => {
                        console.log(e.target.checked);
                        console.log(obj);
                        setToDos(toDos.filter(obj2 => {
                            if (obj2.id === obj.id) {
                                obj2.status = e.target.checked
                            }
                            return obj2
                        }))
                    }} value={obj.status} type="checkbox" name="" id="" />
                </div>
                <p>{obj.text}</p>
            </div>
            <div className="right">
                <i className="fas fa-times"></i>
            </div>
        </div>
    )
}
return null