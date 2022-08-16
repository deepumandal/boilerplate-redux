import { border, withDefaultColorScheme } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproductsapi } from "../../store/product/product.actions";
import Product from "./Product/Product";

const Products = () => {
  const { loading, data, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.length > 0) {
      dispatch(getproductsapi());
    }
  }, []);

  return (
    <div
      style={{
        margin: "auto",
        // border: "1px solid red",
        maxwidth: "1000px",
        padding: "auto",
      }}
    >
      <h1>Products</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          margin: "auto",
          width: "fit-content",
        }}
      >
        {data.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
