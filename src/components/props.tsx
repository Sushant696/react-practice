type casualProps =  {
    name:string 
    count : number ;
    flag : boolean ;
}
export const NormalProps = (props: casualProps) => {
    return (
        <>
        <h1>
            {
                props.flag? "welcomeuser " : "welcome guest "
            }
            
             {props.name} {props.count} {props.flag}</h1>
        </>
    )
}




// The type of the props to be received which type it is and where the props are to be used are defined in the child component 

// the data name and count are received from parentcomponent 
// This component is called child component as it is being renderend within the Parentcomponent and the data and behaviour of the parent component are received thorugh the props 

// child component makes specific functionality and elements of the UI