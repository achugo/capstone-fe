import React from "react";
import { Oval } from "react-loader-spinner";

type spinnerProps = {
  loading: boolean;
};

const Loader = () => {
  return (
    <Oval
      height={40}
      width={40}
      color="#f3f7f3"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#f3f7f3"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loader;
