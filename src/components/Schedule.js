import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Schedule() {
  const [courses, setCourses] = useState([]);
  const id = 1;
  async function getCourses() {
    const respose = await axios.get("http://localhost:8080/api/v1/employees/" + id + "/schedule");
    setCourses(respose.data.data);
    console.log(courses);
  }

  useEffect(() => { getCourses() }, []);

  return (
    <div>
      <h1>Schedule</h1>
      {
        courses.map(course => (
          <div>
            <Link to={`/students/${course.course.courseId}`}>{course.course.name}</Link>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Day</th>
                  <th>Room Number</th>
                  <th>Building</th>
                </tr>
              </thead>
              <tbody>
                {
                  course.schedules.map(schedule => (
                    <tr>
                      <th>{schedule.time}</th>
                      <th>{schedule.day}</th>
                      <th>{schedule.room}</th>
                      <th>{schedule.building}</th>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        ))
      }
    </div>
  );
}