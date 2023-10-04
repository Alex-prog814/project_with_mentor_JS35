import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {

  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/products/${product.id}`)} className="m-3 w-1/4">
      <div>
        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Office"
            src={product.picture}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <p
                datetime="2022-10-10"
                className="block text-xs text-white/90"
              >
                $ {product.price}
              </p>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">
                  {product.name}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
               {product.description}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductItem;
