"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

const Car = (props: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const [t] = useState(0);

  return (
    <React.Fragment>
      Car {t}
      <div>
        props:<pre>{JSON.stringify(props)}</pre>
        pathname:<pre>{JSON.stringify(pathname)}</pre>
        params:<pre>{JSON.stringify(params)}</pre>
      </div>
      <button onClick={(e) => router.push("/car/01")}>go</button>
    </React.Fragment>
  );
};

export default Car;
