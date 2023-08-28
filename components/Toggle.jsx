import React, { useState } from "react";
import "./toggle.css";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
import { Pie } from "react-chartjs-2";

const Toggle = () => {
  const data = {
    datasets: [
      {
        data: [30, 40, 20, 10], // Dữ liệu của các phần
        backgroundColor: ["red", "blue", "green", "yellow"], // Màu sắc cho các phần
      },
    ],
    labels: ["Red", "Blue", "Green", "Yellow"], // Nhãn cho các phần
  };

  const [isSpin, setSpin] = useState(false);

  const handleClick = () => {
    setSpin(true);

    setTimeout(() => {
      setSpin(false);
    }, 2000);
  };

  return (
    <div className="container">
      <div className="item">
        <div className={`wheel ${isSpin ? "spin" : ""}`}>
          <Pie data={data} />
        </div>
      </div>
      <button onClick={handleClick} className="button">
        Spin
      </button>
    </div>
  );
};

export default Toggle;
