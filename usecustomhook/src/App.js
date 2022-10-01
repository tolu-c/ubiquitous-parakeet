import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error occurred! Pls try again</p>;
  }

  console.log({ data });
  return (
    <div>
      <h2>React Custom Hook</h2>
      {data && (
        <div>
          <img
            src={data?.icon_url}
            alt={data?.value}
            width={300}
            height={300}
          />
          <p>{data?.value}</p>
        </div>
      )}
    </div>
  );
}
