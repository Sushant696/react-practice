type personName = {
 name :{
    first : string,
    last : string
 },
}


 export const  Person = (props: personName) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  )
}




// using objects as props 