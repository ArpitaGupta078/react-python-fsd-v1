// src/components/sp.jsx

import React, { useState } from 'react';
import { createStudyPlan } from '../services/api';

const StudyPlanner = () => {
  const [userId, setUserId] = useState('');
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');
  const [availableHours, setAvailableHours] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [timetable, setTimetable] = useState(null);

  const addTask = (e) => {
    e.preventDefault();
    if (task && date && hours) {
      setTasks([
        ...tasks,
        {
          name: task,
          exam_date: date,
          total_hours: parseInt(hours),
        },
      ]);
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

  const submitStudyPlan = async () => {
    if (!userId || tasks.length === 0 || !availableHours) {
      alert('Please enter User ID, tasks, and available hours.');
      return;
    }

    const payload = {
      subjects: tasks,
      available_hours_per_day: parseInt(availableHours),
    };

    try {
      const response = await createStudyPlan(userId, payload);
      setTimetable(response.timetable);
      alert('📅 Study plan generated!');
    } catch (error) {
      console.error('Error submitting study plan:', error);
      alert('❌ Failed to generate study plan: ' + error.message);
    }
  };

  return (
    <div className="study-background min-vh-100 d-flex justify-content-center align-items-center">
      <div className="planner-container p-4 shadow rounded-4" style={{ backgroundColor: '#fff0f5', maxWidth: '600px', width: '100%' }}>
        <h1 className="planner-title text-center mb-4">📚 Study Planner</h1>

        <div className="mb-3">
          <label>User ID:</label>
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter User ID"
            className="form-control"
          />
        </div>

        <form className="task-form mb-3" onSubmit={addTask}>
          <div className="d-flex gap-2">
            <input
              type="text"
              placeholder="Subject"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="form-control"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="form-control"
            />
            <input
              type="number"
              placeholder="Hours"
              min="1"
              step="1"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="form-control"
            />
            <button type="submit" className="btn btn-primary">Add ✨</button>
          </div>
        </form>

        <ul className="task-list list-group mb-3">
          {tasks.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>📌 {item.name} — {item.total_hours} hour(s) by {item.exam_date}</span>
              <button className="btn btn-sm btn-danger" onClick={() => deleteTask(index)}>❌</button>
            </li>
          ))}
        </ul>

        <div className="mb-3">
          <label>Available Hours Per Day:</label>
          <input
            type="number"
            min="1"
            step="1"
            value={availableHours}
            onChange={(e) => setAvailableHours(e.target.value)}
            className="form-control"
          />
        </div>

        <button className="btn btn-success w-100 mb-4" onClick={submitStudyPlan}>
          Submit Study Plan 🚀
        </button>

        {/* 📅 Timetable Table */}
        {timetable && (
            <div className="timetable mt-4">
              <h3 className="text-center mb-3">🗓️ Your Study Timetable</h3>
              <div className="list-group">
                {timetable.map((day, index) => (
                  <div key={index} className="list-group-item">
                    <h5 className="fw-bold">📅 {new Date(day.date).toLocaleDateString()}</h5>
                    <ul className="ms-3">
                      {Object.entries(day.subjects).map(([subject, hours]) => (
                        <li key={subject}>📘 <strong>{subject}</strong>: {hours} hour(s)</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

      </div>
    </div>
  );
};

export default StudyPlanner;
