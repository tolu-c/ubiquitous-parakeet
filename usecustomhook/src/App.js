import useFetch from "./hooks/useFetch";

export default function App() {
  const { data, loading, error } = useFetch(
    "https://api.chucknorris.io/jokes/random"
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error occurred! Pls try again</p>;
  }

  return (
    <div>
      <h2>React Custom Hook</h2>
      {data && (
        <div className="joke__box">
          <p className="joke">{data?.value}</p>
        </div>
      )}
    </div>
  );
}
