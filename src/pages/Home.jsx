

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { productsAction } from "../redux/actions/products"

export default function Home() {

  const dispatch = useDispatch()

  const {products} = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(productsAction() )
  }, [dispatch])

  console.log(products)


  return (
    <div>Home</div>
  )

}
