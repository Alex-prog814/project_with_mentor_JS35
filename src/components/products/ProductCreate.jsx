import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../store/products/productsActions';

const ProductCreate = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        picture: '',
        price: 0,
        type: ''
    });

    const navigate  = useNavigate();
    const dispatch = useDispatch();

  return (
    <div className='mt-9'>
        <h3>Create Product</h3>
        <input type="text" placeholder="Name" onChange={(e) => setProduct({ ...product, name: e.target.value })} />

        <input type="text" placeholder="Description" onChange={(e) => setProduct({ ...product, description: e.target.value })} />

        <input type="number" placeholder="Price" onChange={(e) => setProduct({ ...product, price: parseInt(e.target.value) })} />

        <input type="text" placeholder="Type" onChange={(e) => setProduct({ ...product, type: e.target.value })} />

        <input type="text" placeholder="Picture" onChange={(e) => setProduct({ ...product, picture: e.target.value })} />

        <button onClick={() => {
            dispatch(createProduct({ product }));
            navigate('/products');
        }}>Create</button>
    </div>
  )
}

export default ProductCreate