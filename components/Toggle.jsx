import React, { useEffect, useState } from "react";
import "./toggle.css";
import { PieChart, Pie, Sector, Cell } from "recharts";

const Toggle = () => {
  const [data, setData] = useState([]);
  //   { name: "Group A", value: 400, label: "Fuck yeah", labelColor: "red" },
  // { name: "Group B", value: 300, label: "Label B", labelColor: "blue" },
  // { name: "Group C", value: 300, label: "Label C", labelColor: "green" },
  // { name: "Group D", value: 200, label: "Label D", labelColor: "yellow" },

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    payload, // This gives you access to the current data object
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Customize label content based on the payload (current data object)
    const labelContent = payload.label || ""; // Use the 'label' property from the data object
    const labelColor = payload.labelColor || "white"; // Use a 'labelColor' property if needed

    return (
      <text
        x={x}
        y={y}
        fill={labelColor}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {labelContent}
      </text>
    );
  };

  const [isSpin, setSpin] = useState(false);

  const handleClick = () => {
    setSpin(true);

    setTimeout(() => {
      setSpin(false);
    }, 2000);
  };

  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const addToArray = () => {
    setArray((prev) => [...prev, input]);
    setInput("");
  };

  function dataFactory() {
    const chartData = array.map((element) => ({
        name: "element",
        value: 400,
        label: element,
        labelColor: "blue",
    }))
    setData(chartData)
  }

  useEffect(() => {
    console.log(array);
    dataFactory();
  }, [array]);

  return (
    <div className="container">
      <input type="text" value={input} onChange={handleInput}></input>
      <button onClick={addToArray}>Submit</button>
      <div className="item">
        <div className={`wheel ${isSpin ? "spin" : ""}`}>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
      <button onClick={handleClick} className="button">
        Spin
      </button>
    </div>
  );
};

export default Toggle;
