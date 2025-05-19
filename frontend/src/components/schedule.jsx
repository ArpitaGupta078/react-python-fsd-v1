
import { Container, Row, Col, Table } from 'react-bootstrap';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const times = [
  '9:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00',
];

const Schedule = () => {
  return (
    <div className="schedule study-planner">
      <Container>
        <h2 className="planner-title ">Schedule 🎓</h2>
        <p className="planner-subtitle">Timetable</p>

        <Row>
          <Col lg={9} xs={12}>
            <div className="table-responsive ">
              <Table bordered className="planner-table text-center n1 ">
                <thead>
                  <tr>
                    <th>Time</th>
                    {days.map((day, index) => (
                      <th key={index}>{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {times.map((time, rowIdx) => (
                    <tr key={rowIdx}>
                      <td className="time-col">{time}</td>
                      {days.map((_, colIdx) => (
                        <td key={colIdx} className="planner-cell"></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>

          <Col lg={3} xs={12}>
            <div className="sidebar">
              <div className="note-box">
                <h5>📌 Remember</h5>
                 <textarea className="form-control" rows="5" placeholder="Important reminders..."></textarea>
              </div>
              <div className="important-box">
                <h5>❗ Important</h5>
                <textarea className="form-control" rows="4" placeholder="Urgent notes..."></textarea>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Schedule;
