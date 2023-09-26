import "../index.css";
import "../app.css";
// import { ArrayProps } from "./obj_arr_props";
import { Button } from "./styles";
import { ObjectProps } from "./obj_arr_props";



export const  ParentComponent = () => {


const user  = {
  first : "sushant ",
  second  : "prasai",
  contact : 7 
};

    return (
     <>
       {/* < ArrayProps User ={UserDetails} /> */}
       < ObjectProps detail={user}  />
        <Button type="primary" >Hey Biatchh</Button>
    </>
    );
}  ;




// so this is a parent component and the data name ='sushant' and other props are the data that is passed from this parent component to hte NormalProps (child component) 

// this component renders NormalProps component that's why it is called parent component

// The parent component focuses on specific part of the UI 


// do not expect to do anything in parent component but only sending the data or the data that are to be sent through the props 