import { FC } from "react";
import Lectures from "../data/lectures.json";

interface LecturesTableProps {}

const LecturesTable: FC<LecturesTableProps> = () => {
  return (
    <table className="lecture-table">
      <thead>
        <tr className="lecture-table-header">
          <th className="py-4 px-4">Topic</th>
          <th className="py-4 px-4">Date</th>
          <th className="py-4 px-4">Slides</th>
          <th className="py-4 px-4">Recording</th>
        </tr>
      </thead>
      <tbody>
        {Lectures.map((lecture) => (
          <tr key={lecture.topic} className="lecture-table-row">
            <td className="py-3 neon-text-green">{lecture.topic}</td>
            <td>{lecture.date}</td>
            <td>
              {lecture.slidesLink ? (
                <a
                  className="lecture-link inline-flex items-center"
                  target="_blank"
                  href={lecture.slidesLink}
                >
                  Slides
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2 text-teal-400"
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
                </a>
              ) : (
                <span>-</span>
              )}
            </td>
            <td>
              {lecture.recordingLink ? (
                <a
                  className="lecture-link inline-flex items-center"
                  target="_blank"
                  href={lecture.recordingLink}
                >
                  Recording
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2 text-teal-400"
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
                </a>
              ) : (
                <span>-</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LecturesTable;
