// // First let me define of which type the props are to be used here in this case array
// // Secondly using the props where those are to be used in our component..

// interface IProps {
//   User: Record<string,any>
// }
// // This type is not an array by the way it's and objects whatever the props

// export const ArrayProps = ({User}:IProps) => {

//   return (
//     <>
//       {User?.map((detail: Record<string,any>) => {
//         return (
//         <h1>
//           {detail.first} 
//           {detail.last}
//         </h1>
//         );
//       })};
//     </>
//   );
// };

type  userDetails = {
  detail:{
  first :string ,
  second : string ,
  contact : number ,
}}

export const ObjectProps = (props : userDetails) => {
  return ( 
    <>
    <h3> {props.detail.first}{props.detail.second}{props.detail.contact}</h3>
    </>
  )
};





