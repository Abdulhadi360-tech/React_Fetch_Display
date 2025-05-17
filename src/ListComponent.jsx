export default function ListComponent({
  studentsInfo: students,
  title,
  
}) {
  return (
    <div className="student-Bio">
      <h2 className="title">{title}</h2>
      <ul>
        {students.map((student) => (
          <li key={student.Reg_No}>
            <h2>{student.Name}</h2>
            <p>
              <span>Registation No.: </span>
              {student.Reg_No}
            </p>
            <p>
              <span>Course: </span>
              {student.Course}
            </p>
            <p>
              <span>Location: </span>
              {student.Location}
            </p>
            <p>
              <span>Gender: </span>
              {student.Sex}
            </p>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
