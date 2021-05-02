import * as React from "react";

import { InputProps } from "./types";

import "./styles.css";

export const Input = (props: InputProps) => {
  const { onChange } = props;
  return (
    <>
      <div id="input-container">
        <input
          type="text"
          placeholder="Search Github User"
          name="search2"
          onChange={onChange}
        />
      </div>
    </>
  );
};
