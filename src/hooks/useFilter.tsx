import { useContext } from "react";
import { FilterContext } from "@context/FilterProvider";

export function useFilter() {
  return useContext(FilterContext);
}
