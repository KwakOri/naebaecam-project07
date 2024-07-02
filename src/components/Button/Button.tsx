"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const handleClickButton = () => {
    router.back();
  };

  return (
    <button
      onClick={handleClickButton}
      className="bg-blue-500 text-sm text-white px-4 py-1.5 rounded-md brightness-90 hover:brightness-75 transition"
    >
      {children}
    </button>
  );
};

export default Button;
