import PropTypes from "prop-types";

export default function ProductCard({ product }) {
  return (
    <div className=" hover:border-indigo-600 w-1/5 h-[350px] border rounded-lg m-2 flex flex-col items-center p-1 space-y-2">
      <img className="h-32 object-cover" src={product?.image} alt="image" />
      <div className="font-bold h-16 text-center mt-2">
        {product?.title ? product.title.substring(0, 35) : ""} ...
      </div>
      <div className="text-center opacity-70 text-sm">
        {product?.description ? product?.description.substring(0, 40) : ""}...
      </div>
      <div className="font-bold text-lg">{product?.price}</div>
      <button className="bg-indigo-600 w-full p-2 rounded-lg text-white">
        Sepete Ekle
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
