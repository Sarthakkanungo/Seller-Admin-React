import React, { useState } from "react";
import styles from './InputForm.module.css';

const InputForm = (props) => {
   
    // creating state for new inputs
  const [enterProductID, setProductId] = useState("");
  const [enterSellingPrice, setSellingPrice] = useState("");
  const [enterProductName, setProductName] = useState("");
  
  // changehandler for setting the values on user input
  const productIdChangeHandler = (event) => {
    setProductId(parseInt(event.target.value));
  };

  const sellingPriceChangeHandler = (event) => {
    setSellingPrice(parseInt(event.target.value));
  };

  const productChangeHandler = (event) => {
    setProductName(event.target.value);
  };

  // On submit all data will club inside an obj.
  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      id: enterProductID,
      SellingPrice: enterSellingPrice,
      ProductName: enterProductName,
     
    };
  // storing inside local storage  
    localStorage.setItem(formData.id, JSON.stringify(formData));

  // here we are lifting state and providing this data to App component
    props.onAddproduct(
      formData.id,
      formData.SellingPrice,
      formData.ProductName,
    
    );

    console.log(formData, "in InputForm");
    // clearing input fields
    setProductId("")
    setSellingPrice("");
    setProductName("");


   
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={styles.container}>
        <div>
          <label className={styles.label}>Product Id</label>
          <input
            type="number"
            value={enterProductID}
            onChange={productIdChangeHandler}
            className={styles.input}
          />

          <label className={styles.label}>SellingPrice</label>
          <input
            type="number"
            value={enterSellingPrice}
            onChange={sellingPriceChangeHandler}
            className={styles.input}
          />

          <label  className={styles.label}>Product Name</label>
          <input
            type="text"
            value={enterProductName}
            onChange={productChangeHandler}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Add Product</button>
        </div>
      </form>
      <h1  className={styles.h1}>Products</h1>
    </div>
  );
};
export default InputForm;
