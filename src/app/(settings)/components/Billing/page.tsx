const Billing = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Payment Methods</h2>

      <div className="my-4 border border-gray-300 h-20 flex justify-center items-center rounded-lg text-sm">
        No payment methods saved.
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">Transaction History</h2>
        <p className="text-gray-600">
          View your transaction history and download invoices.
        </p>

        <div className="mt-4 rounded-lg border border-gray-300">
          <table className="w-full text-left">
            <thead className="text-xs bg-[#F3F3F3] text-[#7A7A7A]">
              <tr>
                <th className="p-3">Date</th>
                <th className="p-3">Description</th>
                <th className="p-3">Amount</th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr>
                <td colSpan={3} className="text-xs p-4 text-center">
                  No transactions found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Billing;
