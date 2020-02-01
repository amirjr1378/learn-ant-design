import React from "react";
import "./less/main.less";
import { DatePicker } from "antd";

const App = () => {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return <DatePicker onChange={onChange} />;
};

export default App;
