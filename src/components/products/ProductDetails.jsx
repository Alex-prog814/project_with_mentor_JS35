import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getOneProduct ,deleteProduct } from "../../store/products/productsActions";
import { clearOneProductState } from "../../store/products/productsSlice";
import { checkUserLogin } from "../../helpers/functions";

const ProductDetails = () => {
  const { loading, oneProduct } = useSelector((state) => state.products);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct({ id }));
    return () => dispatch(clearOneProductState());
  }, []);

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          {oneProduct && (
            <div>
              <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                      <img
                        alt="Party"
                        src={oneProduct.picture}
                        className="inset-0 h-full w-full object-cover"
                      />
                    </div>

                    <div className="lg:py-24">
                      <h2 className="text-3xl font-bold sm:text-4xl">
                        {oneProduct.name}
                      </h2>

                      <p className="mt-4 text-gray-600">
                        {oneProduct.description}
                      </p>

                      <p
                        href="#"
                        className="mt-8 inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                      >
                        $ {oneProduct.price}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              {checkUserLogin() && (
                <div className="flex justify-center m-10">
                  <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
                    <button
                    onClick={() => navigate(`/product-edit/${oneProduct.id}`)} 
                    className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-pink-300 focus:relative">

                      Edit
                    </button>
                    <button
                    onClick={() => {
                        dispatch(deleteProduct({id:oneProduct.id}))
                        navigate('/products')
                    }}
                    className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-pink-300 focus:relative">
                      Delete
                    </button>
                  </span>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
