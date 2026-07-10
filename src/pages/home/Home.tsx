import Navbar from "../../globals/componenets/navbar/Navbar";
import Footer from "../../globals/componenets/footer/Footer";
import Hero from "./components/Hero";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { useEffect } from "react";
import { fetchPorducts } from "../../store/productSlice";
import Categoris from "./components/Categoris";
import Trending from "./components/Trending";
import PromoCard from "./components/PromoCard";
import  Features  from "./components/Features";



const Home = () => {
  const dispatch = useAppDispatch()
  const {product} = useAppSelector((state)=> state.products)
  

  useEffect(()=>{
    dispatch(fetchPorducts())
  },[])

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero/>
      <Categoris/>
      <Trending product={product}/>
      <PromoCard/>
      <Features/>
      <Footer/>
    </div>
  );
};

export default Home;