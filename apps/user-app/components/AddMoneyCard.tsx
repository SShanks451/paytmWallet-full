"use client";

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/TextInput";
import { Select } from "@repo/ui/Select";
import { useState } from "react";
import { createOnRampTranasction } from "../app/lib/actions/createOnrampTransaction";

const SUPPORTED_BANKS = [
  {
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com",
  },
  {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/",
  },
];

export const AddMoneyCard = () => {
  const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);

  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
  const [value, setValue] = useState(0);

  return (
    <>
      <Card title="Add Money">
        <TextInput label="Amount" placeholder="Amount" onChange={(val) => setValue(Number(val))} />
        <Select
          title="Bank"
          onSelect={(value) => {
            setRedirectUrl(SUPPORTED_BANKS.find((x) => x.name === value)?.redirectUrl || "");
            setProvider(SUPPORTED_BANKS.find((x) => x.name === value)?.name || "");
          }}
          options={SUPPORTED_BANKS.map((x) => ({ key: x.name, value: x.name }))}
        />
        <div className="flex justify-center my-3">
          <Button
            onClick={async () => {
              await createOnRampTranasction(provider, value * 100);
              window.location.href = redirectUrl || "";
            }}
          >
            Add Money
          </Button>
        </div>
      </Card>
    </>
  );
};
