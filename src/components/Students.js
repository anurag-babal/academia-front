import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Students() {
  const { courseId } = useParams();
  const [students, setStudents] = useState([]);
  async function getStudents() {
    const response = await axios.get("http://localhost:8080/api/v1/students/courses/" + courseId);
    setStudents(response.data.data);
  }

  useEffect(() => { getStudents() }, []);
  
  return (
    <div>
      <h1>Students</h1>
      {
        students.map(student => (
          <div className="row">
            <p>{student.firstName}</p>
          </div>
        ))
      }
    </div>
  );
}