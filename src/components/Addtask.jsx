import { useState } from "react";

// the component for adding/creating a task for the user
const Addtask = ({onAdd}) => {
    // component level states for each of the form control inputs ::: text day and reminder
    const[text, setText]= useState('');
    const[day, setDay]= useState('');
    const[reminder, setReminder]= useState(false);
    
    // not directly taking onAdd prop, need validation and prevent default first so that we don't get page refresh after subit
    const onSubmit = (e)=>{
        e.preventDefault();
        if(!text){ 
            alert("Add task before saving");
            return; 
        }
        onAdd({text , day, reminder})
        setText('');
        setDay('');
        setReminder(false);
    }
    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="task">Task</label>
                <input 
                type="text" 
                placeholder="write your task"
                value={text}
                onChange={(e)=> setText(e.target.value)}
                 />
            </div>
            <div className="form-control">
                <label htmlFor="date">Date & Time</label>
                <input type="text" 
                placeholder="enter the day and time" 
                value={day}
                onChange={(e)=> setDay(e.target.value)}
                />
            </div>
            <div className="form-control" style={{alignItems:'center'}}>
                <label htmlFor="reminder">Add reminder</label>
                <input type="checkbox"
                value={reminder}
                // checked={reminder}
                onChange={(e)=> setReminder(e.currentTarget.checked)}
                />
            </div>
            <div style={{textAlign:'center'}}>
            <button  style={saveStyle}
             type="submit">Save</button>
            </div>
        </form>
    )
}
const saveStyle={
    height: '2rem',
    background: '#309c1e',
    width: '4rem',
    fontSize: '1.2rem',
    color:'white',
    marginTop:'5px',
    outline: 'none',
    border: '1px solid black',
    borderRadius:'5px',
    cursor:'pointer'
}
export default Addtask;