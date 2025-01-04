import { FC } from "react";
import Assignments from "../data/assignments.json";

interface AssignmentsTableProps {}

const AssignmentsTable: FC<AssignmentsTableProps> = () => {
  return (
    <table className="table">
      <thead>
        <tr className="table-header">
        <th className="pb-3">Assignment</th>
          <th>Out</th>
          <th>In</th>
        </tr>
      </thead>
      <tbody>
        {Assignments.map((assignment) => (
          <tr key={assignment.name} className="table-row">
            <td>
              {assignment.link ? (
                <a
                  href={assignment.link}
                  target="_blank"
                  className="assignment-link"
                >
                  {assignment.name}
                </a>
              ) : (
                <span className="opacity-30 neon-text-yellow">
                  {assignment.name}
                </span>
              )}
            </td>
            <td>{assignment.out}</td>
            <td>{assignment.in}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssignmentsTable;
