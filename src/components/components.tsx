import "../index.css";
import "../app.css";
import App from "../App";
import { Person } from "./person";
import { PersonList } from "./persons";

const Components = () => {
  const personName = {
    first: "Tom",
    last: "cruise",
  };

  const nameList = [
    {
      first: "Jason ",
      last: "statham",
    },
    {
      first: "Nick",
      last: "fury",
    },
    {
      first: "scarlet",
      last: "johanson",
    },
  ];

  return (
    <>
      <App name=" App" count={1} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </>
  );
};

export default Components;
