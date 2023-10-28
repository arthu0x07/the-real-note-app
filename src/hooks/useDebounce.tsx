import { useState, useEffect } from "react";

export function useDebounce(callback: () => void, delay: number) {
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | undefined>();

  useEffect(() => {
    return () => {
      clearTimeout(debounceTimeout);
    };

  }, [debounceTimeout]);

  const debouncedCallback = () => {
    clearTimeout(debounceTimeout);
    const newDebounceTimeout = setTimeout(() => {
      callback();
    }, delay);
    setDebounceTimeout(newDebounceTimeout);
  };

  return debouncedCallback;
}
