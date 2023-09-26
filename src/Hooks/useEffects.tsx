import { useEffect , useState } from "react" 


export const UseEffectHook = () =>
{
   const [data , setData] = useState<string>('hello this is initial data')
   
   useEffect(()=> {
    //    console.log(data)
   },[])

   const handleClick = ()=>{
   return setData ("the data is updated");
   }

    return (
        <>
        <h2>{data}</h2>
        <button onClick={handleClick} >click Me</button>
        </>
    )
}

// you can use the useEffect to fetch data and for many more thing those fetching data are called side effect in react and why you should use them is that useEffect runs every time the state changes
// the useeffect runs for every render 

// one thing to consider while using useEffect is that you shouldn't update the state inside the useeffect function as it cause render and the the render cause useeffect to be called and again the state changes and again the useeffect runs and you fall in the loop again