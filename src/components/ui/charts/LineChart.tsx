import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface Props {
  width: number;
  height: number;
  data: object[];
}

function LineChart({ width, height, data }: Props) {
  return (
    <>
      <ResponsiveContainer width="50%" height={205}>
        <AreaChart
          width={width}
          height={height}
          data={data}
          margin={{ top: 0, right: 30, left: -35, bottom: -25 }}
        >
          <Legend verticalAlign="bottom" height={36} />
          <defs>
            <linearGradient
              id="colorUv"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            ></linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF7A50" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#FF7A50" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis dataKey="completed" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="created"
            stroke="#000"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="completed"
            stroke="#FF7A50"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

export default LineChart;
