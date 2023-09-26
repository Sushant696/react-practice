/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Button } from "antd"
import '../App.css'
import { useEffect, useState } from "react"
import axios from "axios"

interface todoData {
    id : number ,
    title:string ,
    completed:string ,
}

// To do list
export const ProductList = () => {
    const [data , setData] = useState<todoData[]>([]);
    useEffect(()=>{
        axios.get<todoData[], any>("https://jsonplaceholder.typicode.com/todos")
        .then((res)=> {setData(res.data)})
        .catch(error => {console.error(error)})
    },[]);


    return (
        <>
         {data.map((todos)=>{
            return (
         <div key={todos.id} className='container' >
            <h1>{todos.id}</h1>
            <p>{todos.title}</p>
            <h2>status:{todos.completed}</h2>
         </div>)
         })}
        </>
    )
}

// joke api
// "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"; 

// quote api 
// https://api.quotable.io/random