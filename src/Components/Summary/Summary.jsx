const data = [
  {
    type: "Total Sales",
    amount: 2930,
  },
  {
    type: "Total Purchase",
    amount: 1232,
  },
  {
    type: "Cash Received",
    amount: 1789.50,
  },
  {
    type: "Bank Received",
    amount: 50,
  },
  {
    type: "E-Banking",
    amount: 510,
  },
  {
    type: "Mobile-Banking",
    amount: 70,
  },
  {
    type: "Others",
    amount: 7498,
  },
  {
    type: "Total Service",
    amount: 754,
  },
];

const Summary = () => {
  return (
    <div className="p-4 bg-white  mt-4 rounded-lg border-b-4 text-[#424e79]">
      <h1 className="mb-4 font-bold">Summary</h1>
      <hr className="mb-7" />
      <div className="border">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-green bg-opacity-20">
              <th className="px-4 py-2 text-left border">Today Report</th>
              <th className="px-4 py-2 text-right border">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 1 ? "bg-white" : "bg-green-50"
                }
              >
                <td className="px-4 py-2 border">{item.type}</td>
                <td className="px-4 py-2 text-right border">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Summary;
