import React from "react";

export const Card = ({ title, children }: { title: string; children?: React.ReactNode }): JSX.Element => {
  return (
    <div className="border rounded-lg bg-gray-100 px-5 mx-6 py-4 mb-4 h-fit">
      <div className="border-b text-xl pb-2 font-semibold">{title}</div>
      <div>{children}</div>
    </div>
  );
};
