import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter as BRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Addtask from './components/Addtask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [showAdd, setAdd] = useState(false);
  // using useState hook: the state is immutable, everytime we try to create/delete/edit, we need to reacreate it and send down to the required node
  const [tasks, setTasks] = useState([])
  // the default tasks which is an array, the data will be stored in the db.json which is a json server acting as a mock backend

  //set task from db.json
  useEffect(() => {
    const getTasks = async () => {
      const taskfromJson = await fetchTasks();
      setTasks(taskfromJson);
    }
    getTasks();
  }, []) // : dependency array, no dependency in this proj so its empty array


  //fetch all tasks from backend
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    return data;
  }

  //add
  const addTask = async (task) => {
    //adding/posting to the json server
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task) // js object to a json string
    })

    const data = await response.json();
    // changing the state
    setTasks([...tasks, data]);
  }

  // delete
  const deletetask = async (id) => {
    //delete from the json server
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    // filter out elements which doesn't match with the deleted id
    setTasks(tasks.filter((task) => task.id !== id));
  }



  //remind
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await response.json();
    return data;
  }

  const taskremind = async (id) => {

    const taskForRemind = await fetchTask(id);
    const updateReminder = { ...taskForRemind, reminder: !taskForRemind.reminder }

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateReminder)
    })

    const data = await response.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task)
      //first we update the reminder inside the data from response, and then we set/change the reminder to data.reminder which is the updated true/false
    )
  }
  return (
    <BRouter>
      <div className='container'>
        <Header onAdd={() => setAdd(!showAdd)}
          showAddBtn={showAdd}
        />
        <Routes>
          <Route exact path="/" element={
            <React.Fragment>
              {showAdd ? <Addtask onAdd={addTask} /> : ""}
              {tasks.length > 0 ? <Tasks tasks={tasks}
                onDelete={deletetask}
                onToggle={taskremind} /> : <p>No tasks to show. Add new tasks?</p>}
            </React.Fragment>
          }></Route>

          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
        <div style={{ textAlign: "center" }}>
          <Link style={linkStyle} to="/">Home</Link>|<Link style={linkStyle} to="/about">About</Link>
        </div>
      </div>
    </BRouter>
  );
}
const linkStyle = {
  fontSize: '1.2rem',
  padding: '10px',
  fontWeight: '800',
  color: 'black',
  textDecoration: 'none'
}
export default App;
