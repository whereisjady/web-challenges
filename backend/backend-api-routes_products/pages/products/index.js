import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);
}
