import { getServerSession } from "next-auth";
import { AddMoneyCard } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import prisma from "@repo/db/client";
import { authOptions } from "../../lib/auth";

async function getBalance() {
  const session = await getServerSession(authOptions);
  const balance = await prisma.balance.findFirst({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0,
  };
}

async function getOnRampTransaction() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
  });

  return txns.map((txn: any) => ({
    time: txn.startTime,
    amount: txn.amount,
    status: txn.status,
    provider: txn.provider,
  }));
}

export default async function Page() {
  const balance = await getBalance();
  const transactions = await getOnRampTransaction();

  return (
    <div className="w-[100%]">
      <div className="mt-6 mx-5 text-4xl text-violet-700 font-semibold mb-20">Transfer</div>
      <div className="grid grid-cols-2 gap-4">
        <AddMoneyCard />
        <div>
          <BalanceCard amount={balance.amount} locked={balance.locked} />
          <OnRampTransactions transactions={transactions} />
        </div>
      </div>
    </div>
  );
}
