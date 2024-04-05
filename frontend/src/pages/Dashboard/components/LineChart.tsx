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
  data: object[];
}

function LineChart({ data }: Props) {
  return (
    <>
      <div className="flex min-w-[300px] w-96 lg:w-full">
        <ResponsiveContainer minWidth="100%" height={200}>
          <AreaChart
            data={data}
            margin={{ top: -25, right: 50, bottom: 40, left: -30 }}
          >
            <Legend
              iconType="plainline"
              iconSize={18}
              wrapperStyle={{
                marginBlock: 0,
                fontSize: 13,
                marginLeft: 50, // Adjust this value as needed
              }}
              align="left"
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
    </>
  );
}

export default LineChart;
