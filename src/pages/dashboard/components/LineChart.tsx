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

function LineChart({ data }: Props) {
  return (
    <div className="-ml-20">
      <ResponsiveContainer width={500} height={160} aspect={2}>
        <AreaChart
          data={data}
          margin={{ top: -30, right: 0, bottom: 25, left: -40 }}
        >
          <Legend
            iconType="plainline"
            iconSize={18}
            wrapperStyle={{ marginInline: -50, marginBlock: -30, fontSize: 13 }}
            align="center"
            verticalAlign="bottom"
          />

          <defs>
            <linearGradient
              id="colorUv"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            ></linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="2">
              <stop offset="5%" stopColor="#FF7A50" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#FF7A50" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis dataKey="completed" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="created"
            stroke="#333"
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
    </div>
  );
}

export default LineChart;
