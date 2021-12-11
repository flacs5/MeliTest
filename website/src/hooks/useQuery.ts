import { useLocation } from "react-router-dom";

export default function useQuery() {
  const params = useLocation().search;

  return new URLSearchParams(params);
}
