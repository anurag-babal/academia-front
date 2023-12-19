import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Students(props) {
  const { courseId } = useParams();
  const [students, setStudents] = useState([]);
  const { onError, user } = props;

  async function getStudents() {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/students/courses/" + courseId);
      setStudents(response.data.data);
    } catch (error) {
      onError('Website not reachable', 'warning')
    }
  }

  useEffect(() => { getStudents() }, []);

  return (
    <div className="container my-5">
      <h1>Students</h1>
      {
        user.role === "FACULTY" ? (
          students.length == 0 ? (
            <h3>No Student registered for this course</h3>
          ) : (
            <div>
              <table className="table table-striped table-bordered border-primary table-sm my-3">
                <thead className="table-dark">
                  <tr>
                    <th>RollNumber</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>cgpa</th>
                    <th>Total Credits</th>
                    <th>Graduation Year</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {
                    students.map((student, index) => (
                      <tr key={index}>
                        <th>{student.rollNumber}</th>
                        <th>{student.firstName}</th>
                        <th>{student.email}</th>
                        <th>{student.cgpa}</th>
                        <th>{student.totalCredits}</th>
                        <th>{student.graduationYear}</th>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          )) : (
          <h1>Not Authorised to view this page</h1>
        )
      }
    </div>
  );
}