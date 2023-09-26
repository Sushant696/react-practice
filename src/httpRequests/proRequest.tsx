import axios from "axios";
import { useState, useEffect } from "react";

interface Mydata {
  id: number;
  description: string;
  title: string;
}
export const AsyncCall = () => {
  const [data, setData] = useState<Mydata[]>([]);

  useEffect(() => {
    axios
      .get<Mydata[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {data.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>{product.description}</h3>
          </div>
        );
      })}
    </>
  );
};

// product listing smoth
// map methods review
// fetching nice data and generating quote generator
