"use client";

export const Select = ({
  title,
  options,
  onSelect,
}: {
  title: string;
  options: { key: string; value: string }[];
  onSelect: (value: string) => void;
}): JSX.Element => {
  return (
    <>
      <div className="pt-3 font-semibold">{title}</div>
      <select className="w-full my-2 py-2 px-2 rounded-lg text-sm border border-gray-300" onChange={(e) => onSelect(e.target.value)}>
        {options.map((option) => (
          <option value={option.key}>{option.value}</option>
        ))}
      </select>
    </>
  );
};
