import React, { FC } from "react";
import { Kaushan_Script } from "next/font/google";

const kaushan = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
});

const Home: FC = (props: any) => {
  return <div className={kaushan.className}>Home</div>;
};

export default Home;
