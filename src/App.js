import React, { useState } from "react";
import InputForm from "./InputForm";
import Productlist from "./Productlist";

const App = () => {

  // here we have created two usestate one for list which is coming from input form 
  // And total amount value for all the items which changes according to updation of list
  
  const [productList, setproductList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addproductHandler = (
    listitemid,
    listitemSp,
    listitemName
  ) => {
    setproductList((prevState) => {
      return [
        ...prevState,
        {
          itemid: listitemid,
          itemSp: listitemSp,
          itemName: listitemName
      
        },
      ];
    });

    setTotalAmount((prevAmount) => prevAmount + listitemSp);
  };
  

  return (
    <div>
      <InputForm onAddproduct={addproductHandler} />

      <Productlist list={productList} setList={setproductList}  setTotal={setTotalAmount}/>
      <h2> Total Amount is : RS.{totalAmount}</h2>
    </div>
  );
};

export default App;
