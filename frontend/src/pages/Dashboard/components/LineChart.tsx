import { formatDate } from "../../../utils/formatting";
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
import { startOfWeek, endOfWeek, eachDayOfInterval } from "date-fns";

// Function to generate dates for the current week
function generateWeekData() {
  const start = startOfWeek(new Date(), { weekStartsOn: 1 });
  const end = endOfWeek(new Date(), { weekStartsOn: 1 });
  const dates = eachDayOfInterval({ start, end });

  return dates.map((date) => ({
    date: formatDate({
      dateString: date,
      options: { month: "short", day: "numeric" },
    }), // Assuming formatDate takes a Date object and options
    created: Math.floor(Math.random() * 100), // Example random data
    completed: Math.floor(Math.random() * 100), // Example random data
  }));
}

function LineChart() {
  const data = generateWeekData();

  return (
    <div className="flex min-w-[300px] w-96 lg:w-full h-full">
      <ResponsiveContainer minWidth="100%" height={150}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 50, bottom: -20, left: -25 }}
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
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1"></linearGradient>
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
