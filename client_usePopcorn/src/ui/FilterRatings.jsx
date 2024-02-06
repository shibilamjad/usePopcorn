import Select from "react-select";
import makeAnimated from "react-select/animated";

export function FilterRatings({ options, handleRatingFilter }) {
  const animatedComponents = makeAnimated();

  return (
    <Select
      options={options}
      closeMenuOnSelect={false}
      components={animatedComponents}
      // value={currentSortBy}
      onChage={handleRatingFilter}
    />
  );
}
