import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { useEffect, useState } from "react";
import { setToken } from "../../../store/authSlice";
import { fetchCartItems } from "../../../store/CartSlice";

const Navbar = () => {
  const dispatch = useAppDispatch()
  const [totalCartItem,setTotalCartItem] = useState<number>(0)
  const {user} = useAppSelector((state)=>state.auth)
  const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)
  const cartQuantity = Number(localStorage.getItem("totalCartItem"))
  

  useEffect(()=>{
    const token = localStorage.getItem('token')
    dispatch(fetchCartItems())
    setIsLoggedIn(!!token || !!user.token)
    setTotalCartItem(cartQuantity)
    
  },[user.token,dispatch])

  const handleLogout = ()=>{
    localStorage.removeItem('token')
    dispatch(setToken(''))
    setIsLoggedIn(false)
  }

  return (
    <header className="relative flex flex-none items-center py-6">
      <div className="container mx-auto px-4 lg:px-8 xl:max-w-7xl">

        <nav className="flex items-center justify-between rounded-2xl bg-white px-6 py-4 shadow-sm">

          {/* Logo */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2 text-xl font-black text-gray-900"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white transition group-hover:scale-110">
              S
            </div>

            <span>
              Shop
              <span className="text-indigo-600">
                Ease
              </span>
            </span>
          </Link>


          {/* Navigation */}
          <div className="hidden flex-1 items-center justify-center gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 md:flex">

            <Link
              to="/"
              className="font-semibold text-gray-700 hover:text-indigo-600"
            >
              Home
            </Link>


            <Link
              to="/products"
              className="font-semibold text-gray-700 hover:text-indigo-600"
            >
              Products
            </Link>


            <Link
              to="/categories"
              className="font-semibold text-gray-700 hover:text-indigo-600"
            >
              Categories
            </Link>


            <Link
              to="/deals"
              className="font-semibold text-gray-700 hover:text-indigo-600"
            >
              Deals
            </Link>


            <Link
              to="/contact"
              className="font-semibold text-gray-700 hover:text-indigo-600"
            >
              Contact
            </Link>

          </div>


          {/* Right Section */}
          <div className="flex shrink-0 items-center gap-3">


            {/* Search */}
            <div className="hidden items-center rounded-xl bg-gray-100 px-3 py-2 lg:flex">

              <Search
                size={18}
                className="text-gray-500"
              />

              <input
                type="text"
                placeholder="Search"
                className="ml-2 w-28 bg-transparent text-sm outline-none"
              />

            </div>


            {/* Cart */}
            <Link
              to="/cart"
              className="relative rounded-xl bg-gray-100 p-3 transition hover:bg-indigo-100"
            >

              <ShoppingCart size={20}/>


              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                {totalCartItem}
              </span>

            </Link>

            
            {isLoggedIn===false?(
              <>
            <Link
              to="/login"
              className="
                hidden 
                rounded-xl 
                bg-indigo-600 
                px-3 py-2 
                text-sm
                font-semibold 
                text-white 
                transition 
                hover:bg-indigo-700
                lg:px-5 
                lg:py-3
                lg:text-base
                sm:block
              "
            >
              Login
            </Link>


            {/* Register */}

            
            <Link
              to="/register"
              className="
                hidden 
                rounded-xl 
                border 
                border-indigo-600 
                px-3 py-2 
                text-sm
                font-semibold 
                text-indigo-600 
                transition 
                hover:bg-indigo-50
                lg:px-5 
                lg:py-3
                lg:text-base
                sm:block
              "
            >
              Register
            </Link>
              </>

            ):(
              <Link
              to="/login"
              onClick={handleLogout}
              className="
                hidden 
                rounded-xl 
                bg-indigo-600 
                px-3 py-2 
                text-sm
                font-semibold 
                text-white 
                transition 
                hover:bg-indigo-700
                lg:px-5 
                lg:py-3
                lg:text-base
                sm:block
              "
            >
              Logout
            </Link>
            
            )}

            
            


            {/* Mobile */}
            <button
              className="rounded-xl bg-gray-100 p-3 md:hidden"
            >
              <Menu size={22}/>
            </button>


          </div>

        </nav>

      </div>
    </header>
  );
};

export default Navbar;