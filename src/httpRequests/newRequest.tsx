import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  quotes: Myprops[];
}

interface Myprops {
  id: number;
  quote: string;
  author: string;
  // Other properties
}

export default function NewHttpRequest() {
  const [data, setData] = useState<Props| null>(null);

  useEffect(() => {
    axios
      .get<Props>("https://dummyjson.com/quotes")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error('API error', error);
      });
  }, []);

  return (
    <div >
      {data?.quotes.map((curr) => (
        <div key={curr.id} style={{textAlign:'center'}} >
          <h3>{curr.quote}</h3>
          <h2>- {curr.author}</h2>
        </div>
      ))}
    </div>
  );
}



// while fetching api do it inside useeffect hook either fetch inside or do it inside function and than pass that function inside the useEffect hook..
//  first declare the kind of data that you are going to get when fetching the data..



// Api for fetching photos thumbnail , 
// 
// if middle name chha vaney display garney nava na garney using conditional rendering.