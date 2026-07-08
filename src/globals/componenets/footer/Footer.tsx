
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <>
      <footer className="mt-10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold text-indigo-600">
              ShopEase
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Quality products at affordable prices.
            </p>
          </div>

          <div className="flex gap-6 text-gray-600">
            <Link to="/">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="border-t py-5 text-center text-sm text-gray-500">
          © 2026 ShopEase. All rights reserved.
        </div>
      </footer>
    </>
    
  )
}

export default Footer