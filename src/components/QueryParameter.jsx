import { useSearchParams } from "react-router-dom";

export const QueryParameter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsObject = Object.fromEntries([...searchParams]);
  const { name, id } = paramsObject;

  return (
    <div>
      <h1>QueryParameter</h1>
      <p>Query Parameter 'name' is {name}</p>
      <p>Query Parameter 'id' is {id}</p>
    </div>
  );
};
