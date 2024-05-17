

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { productsAction } from "../redux/actions/products"
import ProductCard from "../components/ProductCard"

export default function Home() {

  const dispatch = useDispatch()

  const {products} = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(productsAction() )
  }, [dispatch])

  console.log(products)
  return (
    <div className="flex flex-wrap justify-center">
      {
        products.map((product , id) => (
          <ProductCard key={id} product={product} />
        ))
      }
    </div>
  )

}
