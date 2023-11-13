// import { useEffect, useState } from 'react';

// const useSearchCancellation = () => {
//   const [cancelController, setCancelController] = useState(new AbortController());

//   const cancelPreviousRequest = () => {
//     cancelController.abort();
//     const newController = new AbortController();
//     setCancelController(newController);
//   };

//   useEffect(() => {
//     return () => cancelPreviousRequest();
//   }, []);

//   return { cancelController, cancelPreviousRequest };
// };

// export const handleCancelSearch = () => {
//   const { cancelController, cancelPreviousRequest } = useSearchCancellation();
//   return {
//     signal: cancelController.signal,
//     onStart: () => cancelPreviousRequest(),
//   };
// };

// export default useSearchCancellation;

import { useSearchItemsQuery, SearchItemsQueryParams } from "@/store/SearchSlice";
import useSearchCancellation, { CancelController } from "@/components/useSearchCancellation";

interface CustomSearchQueryResult {
  data: /* Define your data type here */;
  isLoading: boolean;
  isError: boolean;
  error: /* Define your error type here */;
  cancelPreviousRequest: () => void;
}

const useCustomSearchQuery = (
  queryVariable: string,
  variables
): CustomSearchQueryResult => {
  const { cancelController, cancelPreviousRequest } = useSearchCancellation();
  const queryResult = useSearchItemsQuery<SearchItemsQueryParams>(
    { queryVariable, variables },
    {
      signal: cancelController.signal,
    }
  );

  return {
    ...queryResult,
    cancelPreviousRequest,
  };
};

export default useCustomSearchQuery;
