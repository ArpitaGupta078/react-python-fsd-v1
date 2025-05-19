import React, { useState } from 'react';


const StudyPlanner = () => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (task && date && hours) {
      setTasks([...tasks, { task, date, hours }]);
      setTask('');
      setDate('');
      setHours('');
    }
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <div className="study-background min-vh-100 d-flex justify-content-center align-items-center">
  <div className="planner-container p-4 shadow rounded-4" style={{ backgroundColor: '#fff0f5', maxWidth: '500px', width: '100%' }}>
    <h1 className="planner-title text-center mb-4">📚 Study Planner</h1>

      <form className="task-form" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Subject"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Hours"
          min="0.5"
          step="0.5"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
        <button type="submit">Add ✨</button>
      </form>

      <ul className="task-list">
        {tasks.map((item, index) => (
          <li key={index} className="task-item">
            <span>
              📌 {item.task}  
              <small> — {item.hours} hour(s) on {item.date}</small>
            </span>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default StudyPlanner;
