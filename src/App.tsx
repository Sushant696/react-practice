type prop = {
  name: string;
  count: number;
  isLoggedIn: boolean;
};

function App(props: prop) {
 

  return (
    <>
      <h3>
        {props.isLoggedIn
          ? `welcome ${props.name} you have ${props.count} unread messages`
          : `welcome guest`}
        
      </h3>
      {/* <button className="btn">count</button> */}
    </>
  );
}

export default App;
