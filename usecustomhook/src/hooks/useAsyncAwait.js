import axios from "axios";
import { useEffect, useState } from "react";

const useAsyncAwait = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    await axios(url)
      .then((res) => {
        setData(res?.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading, error };
};

export default useAsyncAwait;
