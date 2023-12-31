import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux'; 
import { toggleProductLike } from '../../store/products/productsActions';

const ProductLike = ({ isLikedProduct, likes, productId }) => {

  const dispatch = useDispatch();

  return (
    <>
      {isLikedProduct ? (
        <div onClick={() => dispatch(toggleProductLike({ setIsLike: false, likes, productId }))}>
          <FavoriteIcon fontSize="large" color="error" />
        </div>
      ) : (
        <div onClick={() => dispatch(toggleProductLike({ setIsLike: true, likes, productId }))}>
          <FavoriteIcon fontSize="large" />
        </div>
      )}
    </>
  )
}

export default ProductLike