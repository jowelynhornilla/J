import * as React from "react";
import TrainEffective from "../../assets/img/trainEffective.png";
import { Api, Search } from "./../../../utils";
import { GitHubInterface, ItemInterface } from "../../../types";
import { Input, AutoComplete } from "../../components";

import "./styles.css";

const { useState, useEffect } = React;

export const Home = () => {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState<ItemInterface[]>([]);

  const clientId = async (userName: string) => {
    const data: GitHubInterface = await Api.GET(
      `search/users?q=${userName}&per_page=6`
    );
    setData(data?.items);
  };

  const handleSetUsername = Search.debounceEvent(
    (args: string) => setUserName(args),
    1000
  );
  const debounceUsername = (value: string) => {
    handleSetUsername(value);
  };

  useEffect(() => {
    if (userName) {
      clientId(userName);
    } else {
      setData([]);
    }
  }, [userName]);

  const handleClickItem = (item: ItemInterface) => {
    const win = window.open(item.html_url, "_blank");
    win?.focus();
  };
  return (
    <>
      <div id="form-container">
        <img
          src={TrainEffective}
          alt="train-effective-logo"
          id="train-effective-icon"
        />
        <Input onChange={(e) => debounceUsername(e.target.value)} />

        {data?.length > 0 ? (
          <AutoComplete data={data} handleClickItem={handleClickItem} />
        ) : null}
      </div>
    </>
  );
};
