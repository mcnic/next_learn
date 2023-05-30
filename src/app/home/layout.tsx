import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Home screen",
  description: "My Home screen",
};

const CarLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className='flex min-h-screen flex-col items-top p-8'>{children}</div>
  );
};

export default CarLayout;
