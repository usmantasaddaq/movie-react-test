import React from "react";

const Loading = ({ isLoading }) => {
  return <>{isLoading && <p>Loading...</p>}</>;
};

export default Loading;
