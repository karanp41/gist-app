import React, { useState } from "react";
import { Input } from 'antd';

const { Search } = Input;

const SearchGist = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = () => {
    search(searchValue);
    resetInputField();
  };

  return (
    <>
        <Search
            placeholder="Enter username to search gists"
            allowClear
            enterButton="Search"
            size="large"
            value={searchValue}
            onChange={handleSearchInputChanges}
            onSearch={callSearchFunction} />
    </>
  );
};

export default SearchGist;
