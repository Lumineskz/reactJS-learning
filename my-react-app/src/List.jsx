function List(props){
    // const fruits = [{id:1, name:"apple", calories: 95},
    //                 {id:2, name:"orange", calories:45},
    //                 {id:3, name:"banana" , calories:105},
    //                 {id:4, name:"coconut", calories:159},
    //                 {id:5, name:"pineapple", calories:37}];

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // Alphabetical Order
    // fruits.sort((a,b) => a.calories - b.calories); // Numeric calories order

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); // Low Calorie Fruits filter
    
    const itemList = props.items; // Passed as prop from App.jsx
    const category = props.category; // Category passed


    const listItems = itemList.map(item => <li key = {item.id}>
                                            {item.name}: &nbsp;
                                            <b> {item.calories} </b>
                                            </li>);

    return(
    <>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>
);
}
export default List