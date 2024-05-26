"use client";

import { usePathname, useRouter } from "next/navigation";

export const SideBarItem = ({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) => {
  const router = useRouter();
  const pathName = usePathname();
  const selected = pathName === href;

  return (
    <div
      className={`cursor-pointer w-fit flex ml-10 ${selected ? "text-[#6a51a6]" : "text-slate-500"}`}
      onClick={() => {
        router.push(href);
      }}
    >
      <div>{icon}</div>
      <div className="my-auto mx-1 font-bold">{title}</div>
    </div>
  );
};
