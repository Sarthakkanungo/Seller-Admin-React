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
        <ul style={{
            textAlign: "center",
            listStyle: "none",
            padding: 0,
            fontSize: "1.2rem", // Increase text size
          }}>
          
          {/* using map function we are passing data */}
          
          {props.list.map((item) => (

            <li key={item.itemid} >
              {item.itemid} --- {item.itemSp} --- {item.itemName}

              {/* creating a function which will delete data based on itemid and data is coming from app component inside list. */}

              <button
                style={{
                  backgroundColor: "#dc3545", // Add color to button
                  color: "#fff", // Text color for button
                  padding: "0.3rem 0.5rem",
                  border: "2px solid red",
                  cursor: "pointer",
                  marginLeft: "1rem", // Add some space between the button and the list item
                }}
                onClick={() => handleDelete(item.itemid, item.itemSp)}
              >
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
