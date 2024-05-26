"use client";

import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/TextInput";
import { Button } from "@repo/ui/button";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";

export const SendCard = (): JSX.Element => {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="h-screen w-screen">
      <div className="flex justify-center flex-col h-full">
        <div className="flex justify-center">
          <Card title="Send">
            <div className="w-80">
              <TextInput label="Number" placeholder="Number" onChange={(val) => setNumber(val)} />
              <TextInput label="Amount" placeholder="Amount" onChange={(val) => setAmount(val)} />
              <div className="flex justify-center mt-2">
                <Button
                  onClick={async () => {
                    await p2pTransfer(number, Number(amount) * 100);
                  }}
                >
                  Send
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
