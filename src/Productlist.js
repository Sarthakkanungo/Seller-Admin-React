import React from "react";

const Productlist = (props) => {
  const handleDelete = (itemId, itemSp) => {
    // Implement delete functionality here based on the item ID
    const updatedList = props.list.filter((item) => item.itemid !== itemId);

    //updateing the list items after deletion
    props.setList(updatedList);

    // remove from local storage
    localStorage.removeItem(itemId);

    //Setting Total value with deletion
    props.setTotal((prevAmount) => prevAmount - itemSp);
    console.log("Delete item with ID:", itemId);
  };

  return (
    <div>
      <div>
        <ul>
          
          {/* using map function we are passing data */}
          
          {props.list.map((item) => (

            <li key={item.itemid}>
              {item.itemid} --- {item.itemSp} --- {item.itemName}

              {/* creating a function which will delete data based on itemid and data is coming from app component inside list. */}

              <button onClick={() => handleDelete(item.itemid, item.itemSp)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Productlist;
