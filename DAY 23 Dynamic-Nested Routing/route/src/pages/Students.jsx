import React from 'react';
import { useNavigate } from 'react-router-dom';

const students = [
  { name: "Janak Pathak", email: "jab@gmail.com", sId: 1 },
  { name: "Pradip Pyakurel", email: "py@gmail.com", sId: 2 },
  { name: "Adam Giri", email: "adam@gmail.com", sId: 3 },
  { name: "Jack Lamechhane", email: "jack@gmail.com", sId: 4 },
];

const Students = () => {
  const navigate = useNavigate();

  const goDetails = (studentId) => {
    navigate(`/students/${studentId}`);
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li
            key={student.sId}
            onClick={() => goDetails(student.sId)}
            style={{ listStyleType: 'none', cursor: 'pointer', margin: '5px 0' }}
          >
            <strong>{student.name}</strong> - {student.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
