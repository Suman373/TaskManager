const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((task) => (
                <div style={taskStyler} key={task.id} className={`task-container ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=> onToggle(task.id)}>
                    <h3>{task.text}</h3>
                    <h4>{task.day}</h4>
                    <button 
                    style={delStyle} 
                    onClick={()=> onDelete(task.id)}
                    onToggle={onToggle}>X</button>
                </div>
            ))}
        </>
    )
}
const delStyle={
    fontSize:'1.3rem',
    position:'absolute',
    top:'1rem',
    background:'transparent',
    border:'none',
    textShadow:'0 0 2px black',
    color:'red',
    right:'10px',
    cursor:'pointer'
}
const taskStyler = {
    height: '4rem',
    width: 'calc(100% - 1rem)',
    margin: '1rem auto',
    color: 'white',
    position:'relative',
    padding: '4px 10px',
    background: 'rgb(89, 70, 300)'
}


export default Tasks;