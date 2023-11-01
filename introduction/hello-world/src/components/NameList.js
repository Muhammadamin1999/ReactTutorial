import React from "react";

function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  const nameList = names.map((el) => <h2>{el}</h2>);
  return <div>{nameList}</div>;
}

export default NameList;
