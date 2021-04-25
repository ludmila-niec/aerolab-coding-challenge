import { useState, useMemo} from "react";

export const TYPES = {
  MOST_RECENT: "MOST_RECENT",
  LOWEST_PRICE: "LOWEST_PRICE",
  HIGHEST_PRICE: "HIGHEST_PRICE",
};

function useFilter(productList) {
  const [filteredList, setFilteredList] = useState([]);
  const [filterApplyed, setFilterApplyed] = useState(TYPES.MOST_RECENT);

  useMemo(() => {
    switch (filterApplyed) {
      case TYPES.LOWEST_PRICE:
        const lowestPriceList = [...productList].sort(
          (a, b) => a.cost - b.cost
        );
        return setFilteredList(lowestPriceList);

      case TYPES.HIGHEST_PRICE:
        const highestPriceList = [...productList].sort(
          (a, b) => b.cost - a.cost
        );
        return setFilteredList(highestPriceList);

      case TYPES.MOST_RECENT:
      default:
        return setFilteredList(productList);
    }
  }, [productList, filterApplyed]);


  return {
    filteredList,
    setFilterApplyed,
    filterApplyed,

  };
}

export default useFilter;