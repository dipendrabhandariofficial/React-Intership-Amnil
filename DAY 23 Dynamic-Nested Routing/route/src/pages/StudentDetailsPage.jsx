import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Sample students array (can also import from Students.jsx)
const students = [
  { sId: 1, name: 'Janak Pathak', email: 'jab@gmail.com' },
  { sId: 2, name: 'Pradip Pyakurel', email: 'py@gmail.com' },
  { sId: 3, name: 'Adam Giri', email: 'adam@gmail.com' },
  { sId: 4, name: 'Jack Lamechhane', email: 'jack@gmail.com' },
];

const StudentDetailsPage = () => {
  const { studentId } = useParams(); // get the id from URL
  const student = students.find((s) => s.sId === parseInt(studentId));

  if (!student) {
    return (
      <div>
        <p>Student not found!</p>
        <Link to="/students">Back to Student List</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Student Details</h2>
      <p><strong>ID:</strong> {student.sId}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>

      <Link to="/students">Back to Student List</Link>
    </div>
  );
};

export default StudentDetailsPage;
