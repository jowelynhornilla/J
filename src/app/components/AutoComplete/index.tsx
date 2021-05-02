import * as React from "react";
import { AutoCompleteProps } from "./types";
import "./styles.css";

export const AutoComplete = (props: AutoCompleteProps) => {
  const { data, handleClickItem } = props;
  return (
    <div id="auto-complete">
      <div className="auto-complete-wrapper">
        {data?.map((item, key) => (
          <div
            key={key}
            className="details-wrapper"
            onClick={() => handleClickItem(item)}
          >
            <img
              src={item?.avatar_url}
              alt="avatar-logo"
              width="50"
              height="50"
              id="avatar-icon"
            />
            <span>{item?.login}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
