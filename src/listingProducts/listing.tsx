import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";
import { StyledCard } from "./styling";
import {Button , Typography, Image} from "antd"; 
import { ShoppingCartOutlined } from "@ant-design/icons"; 

const { Title } = Typography ; 

interface ProductData {
  products: myProps[];
  total: number;
  skip: number;
  limit: number;
}

interface myProps {
  brand: string;
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  thumbnail : string ;
}

export const ProductList = () => {
  const [data, setdata] = useState<ProductData | null>(null);
  useEffect(() => {
    axios
      .get<ProductData>("https://dummyjson.com/products")
      .then((res) => {
        setdata(res.data);
      })
      .catch((error) => {
        console.error("Api error", error);
      });
  }, []);

  return (
    <> 
      <h2>Welcome to My  Site</h2>
      {data?.products.map((products) => {
        return (
          <div key={products.id}>
            
            <StyledCard  title={products.title} bordered={false}>
            <Image src={products.thumbnail} alt={products.title} /> 
              <h4> Product Category : {products.category}</h4>
              <p>Product Description : {products.description}</p>
              <h2> Offer Price : ${products.price}</h2>
              <Title level={4} >
                {products.stock > 1
                  ? `${products.stock} in Stock`
                  : "Out of stock"}
              </Title> 
              <Button  icon ={<ShoppingCartOutlined style={{fontSize:'18px'}} /> } type="primary">Add to Cart</Button>
            </StyledCard>
          </div>
        );
      })}
    </>
  );
};
/* Note :
1 > res.data refers to the response data returned by the api 
2 > data is the state variable that holds the array of products in your component
*/