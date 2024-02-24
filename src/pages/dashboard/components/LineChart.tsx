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
    <>
      <div className="lg:block hidden w-96 lg:w-full">
        <ResponsiveContainer minWidth="100%" height={200}>
          <AreaChart
            data={data}
            margin={{ top: -25, right: 50, bottom: 40, left: -30 }}
          >
            <Legend
              iconType="plainline"
              iconSize={18}
              wrapperStyle={{
                marginInline: -100,
                marginBlock: 0,
                fontSize: 13,
              }}
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
      <div
        className="block -ml-16 lg:hidden"
        style={{ width: "100%", height: "100%" }}
      >
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}

            // margin={{ top: -30, right: 50, bottom: 50, left: 50 }}
          >
            <Legend
              iconType="plainline"
              iconSize={18}
              wrapperStyle={{
                marginInline: -50,
                marginBlock: 0,
                fontSize: 13,
              }}
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
    </>
  );
}

export default LineChart;
