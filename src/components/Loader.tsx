import React from "react";
import { FidgetSpinner } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        backgroundColor="#104977"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
      />
    </div>
  );
};

export default Loader;
