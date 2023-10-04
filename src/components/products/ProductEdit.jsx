import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneProduct,
  editProduct,
} from "../../store/products/productsActions";
import { clearOneProductState } from "../../store/products/productsSlice";

const ProductEdit = () => {
  const { loading, oneProduct } = useSelector((state) => state.products);
  const [product, setProduct] = useState(oneProduct);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneProduct({ id }));
    return () => dispatch(clearOneProductState());
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

  console.log(oneProduct);

  return (
    <div>
        {loading ? (
            <h3>Loading...</h3>
        ) : (
            <>
                {product && (
                    <div>
                        <h2>Edit Form</h2>
                        <input type="text" placeholder="Name" onChange={(e) => setProduct({ ...product, name: e.target.value })} value={product.name} />

                        <input type="text" placeholder="Description" onChange={(e) => setProduct({ ...product, description: e.target.value })} value={product.description} />

                        <input type="text" placeholder="Price" onChange={(e) => setProduct({ ...product, price: e.target.value })} value={product.price} />

                        <img src={product.picture} alt={product.name} width="100" height="100" />

                        <input type="text" placeholder="Picture" onChange={(e) => setProduct({ ...product, picture: e.target.value })} value={product.picture} />

                        <button onClick={() => {
                            dispatch(editProduct({ product }));
                            navigate('/products');
                        }}>Save</button>
                    </div>
                )}
            </>
        )}
    </div>
  )
};

export default ProductEdit;
