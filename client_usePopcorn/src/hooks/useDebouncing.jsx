import { useEffect, useState } from "react";

export function useDebouncing(value, milliSeconds, initialMovie, SearchMovie) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    if (!value) {
      initialMovie();
    }
    const timeout = setTimeout(() => {
      if (value) {
        SearchMovie();
      }
    }, milliSeconds);
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return debouncedValue;
}
