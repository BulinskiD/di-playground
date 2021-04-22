import { useFetchList } from "./useFetchList";

export function List() {
  const { data, isLoading } = useFetchList();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {data?.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
