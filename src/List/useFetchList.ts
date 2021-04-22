import axios from "axios";
import { useQuery } from "react-query";
import { ListItem } from "./ListItem";

const fetchList = () => axios.get<ListItem[]>("/list").then(({ data }) => data);

export function useFetchList(): {
  data: ListItem[] | undefined;
  isLoading: boolean;
} {
  const { data, isLoading } = useQuery("list", fetchList);

  return { data, isLoading };
}
