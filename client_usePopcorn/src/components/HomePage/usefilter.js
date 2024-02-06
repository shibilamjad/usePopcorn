import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getFilterMovies } from "../../service/movieApi";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/PAGE_SIZE";

export function useFilter() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const currentPage = Number(searchParams.get("page") || 1);

  const { mutate: filter, isLoading } = useMutation({
    mutationFn: (filterParams) =>
      getFilterMovies({
        ...filterParams,
        page: currentPage,
        limit: PAGE_SIZE,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["movies", currentPage]);
      toast.success("Movies filtered successfully");
    },
    onError: (error) => {
      toast.error(`Filtering movies failed: ${error.message}`);
    },
  });

  return { filter, isLoading };
}
