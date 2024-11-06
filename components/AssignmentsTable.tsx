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
          <tr key={assignment.name}>
            <td className="py-3">
              {assignment.link ? (
                <a
                  href={assignment.link}
                  target="_blank"
                  className={`inline-flex items-center ${
                    assignment.link && "assignment-link"
                  }`}
                >
                  {assignment.name}{" "}
                  {assignment.link && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
                </a>
              ) : (
                <p className="inline-flex items-center opacity-30 neon-text-yellow">
                  {assignment.name}
                </p>
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
