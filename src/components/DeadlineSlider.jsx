import { useEffect, useState } from "react";
import "../styles/deadlineslider.scss";
import { getDeadlines } from "../api/deadlinesApi";

const DeadlineSlider = () => {
  const [deadlines, setDeadlines] = useState([]);

  useEffect(() => {
    const fetchDeadlines = async () => {
      try {
        const response = await getDeadlines();
        // setDeadlines(response || []);
      } catch (error) {
        console.error("Error fetching deadlines:", error);
      }
    };

    fetchDeadlines();
  }, []);

  return (
    <div className="deadline-slider">
      <h3>Deadlines to Submit Today</h3>
      <ul>
        {deadlines.map((deadline, index) => (
          <li key={index}>
            <strong>{deadline.task}</strong>
            <span>{deadline.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeadlineSlider;
