"use client";

export const TextInput = ({
  label,
  placeholder,
  onChange,
}: {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
}): JSX.Element => {
  return (
    <>
      <div className="pt-3 font-semibold">{label}</div>
      <input
        className="w-full my-2 py-2 px-2 rounded-lg text-sm border border-gray-300"
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};
