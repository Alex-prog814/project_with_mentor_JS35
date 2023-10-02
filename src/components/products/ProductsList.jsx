import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/productsAction";
import ProductIte from "./ProductIte";
const ProductsList = () => {
  const { products, loading } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products);
  return <div>ProductsList</div>;
};

export default ProductsList;
