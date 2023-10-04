import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getProducts } from '../../store/products/productsActions'
import ProductItem from './ProductItem'

const ProductsList = ({product}) => {
    const {products, loading } = useSelector(state => state.products)
    const dispacth = useDispatch()

    useEffect(() =>{
        dispacth(getProducts())
    },[])

  return (
    <>
        {loading ? (
            <h3>Loading...</h3>
        ):(
            <div className='flex flex-row flex-wrap justify-center'>
            {
                products.map(products =>(
                    <ProductItem key={products.id} product={products}/>
                ))
            }
            </div>
        )}

    </>
  )
}

export default ProductsList