import React from "react";
import Car from "./Car";

type Props = {
  params: {
    id: string;
  };
};

const CarPage = (props: Props) => {
  console.log({ props });

  return (
    <>
      <h1>Car page:</h1>
      <Car {...props} fallback={<p>Loading car...</p>} />
    </>
  );
};

export default CarPage;
