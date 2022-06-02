import { ClassListProps } from "../types";
import ClassListContainer from "./ClassListContainer";

function ClassList(props: ClassListProps) {
  return (
    <div>
      <div className="header">
        <h1>Classes</h1>
        <button className="logout-button" onClick={props.handleLogout}>
          Logout
        </button>
      </div>
      <div className="classrooms">
        {props.classrooms.map((classroom) => (
          <div key={classroom.id} className="classroom">
            <h2>{classroom.name}</h2>
            <span>
              <strong>Students: </strong>
              {classroom.students.map((student) => student.name).join(", ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassListContainer(ClassList);
