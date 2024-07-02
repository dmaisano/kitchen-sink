import React, { SetStateAction } from "react";

type SearchFilterProps = {
  setState: SetStateAction<any>;
  state: any;
  toggle: () => any;
};

const SearchFilter: React.FC<SearchFilterProps> = ({ state, toggle }) => {
  return <section className="bg-gray-800 xl:w-72"></section>;
};

export default SearchFilter;
