import React, { FC } from "react";
import { Kaushan_Script } from "next/font/google";

const kaushan = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
});

type Props = {};

const Home: FC = (props: Props) => {
  return <div className={kaushan.className}>Home</div>;
};

export default Home;
