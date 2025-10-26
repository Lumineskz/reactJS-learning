import List from "./List";

function App() {
  const fruits = [{id:1, name:"apple", calories: 95},
                    {id:2, name:"orange", calories:45},
                    {id:3, name:"banana" , calories:105},
                    {id:4, name:"coconut", calories:159},
                    {id:5, name:"pineapple", calories:37}];
  return(
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"></List> : null} 
      {/* Retuns null if no elements in list*/}
    </>
    
  );
}

export default App
