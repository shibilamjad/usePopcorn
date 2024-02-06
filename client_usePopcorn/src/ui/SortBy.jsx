import { useSearchParams } from "react-router-dom";
// import Select from "./Select";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useFilter } from "../components/HomePage/usefilter";

function SortBy({ options, handleGenreFilter }) {
  const animatedComponents = makeAnimated();

  return (
    <Select
      options={options}
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      onChange={handleGenreFilter}
      // value={options.value}
      // onChange={(selectedOptions) => handleFilter(selectedOptions)}
    />
  );
}

export default SortBy;
