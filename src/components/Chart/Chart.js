import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = () => {
  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => {
        <CharBar />;
      })}
    </div>
  );
};
export default Chart;
