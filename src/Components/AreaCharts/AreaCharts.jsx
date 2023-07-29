import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Napa",
    pv: 189,
  },
  {
    name: "Panadol demo",
    pv: 180,
  },
  {
    name: "Zinc",
    pv: 410,
  },
  {
    name: "Antiva",
    pv: 840,
  },
  {
    name: "Entacyd",
    pv: 210,
  },
  {
    name: "Lumertam",
    pv: 1084,
  },
  {
    name: "Rupa",
    pv: 859,
  },
  {
    name: "Panadol",
    pv: 410,
  },
  {
    name: "Mylam",
    pv: 100,
  },
];

const AreaCharts = () => {
  return (
    <div className="p-4 bg-white mt-4 w-full rounded-lg overflow-auto text-[#424e79]">
      <h1 className="font-bold">Best Sales Of The Month</h1>
      <hr className="mb-7 mt-2" />
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaCharts;
