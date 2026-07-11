import { Link } from "react-router-dom"
import { Product } from "../types/productTypes"
import { useAppDispatch } from "../../../store/hook"
import { addToCart } from "../../../store/CartSlice"

interface CardProps{
  data : Product
}
const Card:React.FC<CardProps>= ({data}) => {
  const dispatch= useAppDispatch()
  

  const handleAddToCart = ()=>{
      if(data.id){
      dispatch(addToCart(data.id)) 
  
      }
    }
  
  return (
    <>
      
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <Link to={`/product/${data.id}`}>
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={data?.imageUrl}
            
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {data?.productName}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${data?.productPrice}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {data?.description}
          </p>
        </div>
      </Link>
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={()=>handleAddToCart()}
          >
            Add to Cart
          </button>
        </div>
      </div>
      
    </>
  )
}

export default Card