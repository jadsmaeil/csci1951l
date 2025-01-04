import { FC } from "react";
import Lectures from "../data/lectures.json";

interface LecturesTableProps {}

const LecturesTable: FC<LecturesTableProps> = () => {
    return (
        <table className="lecture-table">
            <thead>
                <tr className="lecture-table-header">
                    <th className="pb-3">Topic</th>
                    <th>Date</th>
                    <th>Slides</th>
                    <th>Recording</th>
                </tr>
            </thead>
            <tbody>
                {Lectures.map((lecture) => (
                    <tr key={lecture.topic} className="lecture-table-row">
                        <td className="py-3 neon-text-green">{lecture.topic}</td>
                        <td>{lecture.date}</td>
                        <td>
                            {lecture.slidesLink ? (
                                <a className="lecture-link" target="_blank" href={lecture.slidesLink}>
                                    Slides
                                </a>
                            ) : (
                                <span>-</span>
                            )}
                        </td>
                        <td>
                            {lecture.recordingLink ? (
                                <a className="lecture-link" target="_blank" href={lecture.recordingLink}>
                                    Recording
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