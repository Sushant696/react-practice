import axios from "axios";
import { Button } from "antd";
import { useEffect, useState } from "react";

interface myQuotes {
   content: string;
  author: string;
  _id : string,
}

export const GetQuote = () => {

  const [quote, setQuote] = useState<myQuotes | null>(null);

 const fetchQuote = () => {
   axios.get("https://api.quotable.io/random")
   .then((res) => { setQuote(res.data)})
   .catch(error => console.log("Error fetching data",error))
 }  

  useEffect(() => {
   fetchQuote();
  },[]);

  const handleQuote = () => {
   fetchQuote();
};

  return <>
  <div>
   <h3>{quote?.content}</h3>
   <p>{quote?.author}</p>
  <Button type="primary" onClick={handleQuote} >Get quote</Button>
  </div>
  </>;
};


// yo code lai push ni garnu parney hunxa and using the styled component too 