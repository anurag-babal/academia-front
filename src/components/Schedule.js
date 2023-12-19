import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Schedule(props) {
  const [courses, setCourses] = useState([]);
  const { user, onError } = props;

  async function getCourses() {
    try {
      const respose = await axios.get("http://localhost:8080/api/v1/employees/" + user.employeeId + "/schedule");
      setCourses(respose.data.data);
    } catch (error) {
      onError('Website not reachable', 'warning')
    }
  }

  useEffect(() => { getCourses() }, []);

  return (
    <div className="container my-5">
      <h1>Schedule</h1>
      {
        user.role === "FACULTY" ? (
          courses.map((course, index) => (
            <div className="card border-dark shadow my-3" key={index}>
              <div className="card-header">
                <h3 className="cart-title fw-bold">{course.course.name}</h3>
                {
                  course.specialisations.map((specialisation, index) => (
                    <h4 className="card-subtitle mb-2" key={index}>
                      {specialisation.code}
                    </h4>
                  ))
                }
              </div>
              <div className="card-body">
                <table className="table table-striped table-bordered border-dark card-text">
                  <thead className="table-dark">
                    <tr>
                      <th>Time</th>
                      <th>Day</th>
                      <th>Room Number</th>
                      <th>Building</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {
                      course.schedules.map((schedule, index) => (
                        <tr key={index}>
                          <th>{schedule.time}</th>
                          <th>{schedule.day}</th>
                          <th>{schedule.room}</th>
                          <th>{schedule.building}</th>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                <Link to={`/students/${course.course.courseId}`} className="btn btn-outline-dark btn-lg card-title">
                  View Students
                </Link>
              </div>
            </div>
          ))
        ) : (
          <h1>Not Authorised to view this page</h1>
        )
      }
    </div>
  );
}