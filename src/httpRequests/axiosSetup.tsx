import axios from "axios";
import { useState, useEffect } from "react";

interface Mydata {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const HttpRequest = () => {
  const [data, setData] = useState<Mydata[]>([]);

  useEffect(() => {
    axios
      .get<Mydata[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {data.map((details) => {
        return (
          <div key={details.id}>
            <p>User ID: {details.userId}</p>
            <h2>{details.title}</h2>
            <p>Body : {details.body}</p>
          </div>
        );
      })}
    </>
  );
};

// shouldn't it be setData instead of data as the data contain initial value and the setData should have the latest value while using the map with (setData.map ? why not ?? );

// useEffect hook should be out of my way from tommorrow
