import React from "react";
import { Oval } from "react-loader-spinner";

type SpinnerProps = {
  color?: string;
  height?: number;
  width?: number;
};

const Loader: React.FC<SpinnerProps> = ({ color = "#f3f7f3", height= 40, width= 40 }) => {
  return (
    <Oval
      height={height}
      width={width}
      color={color}
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
