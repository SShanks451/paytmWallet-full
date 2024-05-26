import { Card } from "@repo/ui/card";

export const OnRampTransactions = ({
  transactions,
}: {
  transactions: { time: Date; amount: number; status: string; provider: string }[];
}): JSX.Element => {
  if (transactions.length === 0) {
    return <Card title="Recent Transaction"></Card>;
  }

  return (
    <>
      <Card title="Recent Transactions">
        <div>
          {transactions.map((t) => (
            <div className="flex justify-between">
              <div className="mt-2">
                <div className="text-md">Received INR</div>
                <div className="text-sm text-slate-600">{t.time.toDateString()}</div>
              </div>
              <div className="flex flex-col justify-center">+ Rs {t.amount / 100}</div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};
