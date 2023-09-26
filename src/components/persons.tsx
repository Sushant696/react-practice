type personListProps = {
  names: {
    first: string;
    last: string;
  }[];
};


export const PersonList = (props: personListProps) => {
  return (
    <>
      {props.names.map((name) => {
        return (
          <h1>
            {name.first}
            {name.last}
          </h1>
        );
      })}
    </>
  );
};

// Using Arrays as a props