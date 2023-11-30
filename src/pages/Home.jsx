import styles from "../styles/Home.module.css"
import Carousel from '../components/Carousel';
import Separator from "../components/Separator"
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import PreRegister from "../components/PreRegister";
import axios from 'axios'
import { useEffect, useState } from "react";
const Home = () => {
  const url = "https://saws-backend.onrender.com/products";
  const [headphones,setHeadphones] = useState();
  const [phones, setPhones] = useState();
  const [laptops, setLaptops] = useState();
  const [tvs, setTvs] = useState();
  useEffect(()=>{
    axios.get(url + "?category=Headphone").then(res=>setHeadphones(res.data));
    axios.get(url + "?category=Smartphone").then((res) => setPhones(res.data));
    axios.get(url + "?category=Laptop").then((res) => setLaptops(res.data));
    axios.get(url + "?category=TV").then((res) => setTvs(res.data));
  },[])
  return (
    <div className={styles.container}>
      <img className={styles.img} src="/banner.jpg" alt="banner" />
      <Separator />
      <PreRegister />
      <Separator />
      <Heading body={"Headphones"} />
      {headphones && <Carousel data={headphones} />}
      <Separator />
      <Heading body={"Phones"} />
      {phones && <Carousel data={phones} />}
      <Separator />
      <Heading body={"Laptops"} />
      {laptops && <Carousel data={laptops} />}
      <Separator />
      <Heading body={"TVs"} />
      {tvs && <Carousel data={tvs} />}
      <Footer />
    </div>
  );
}

export default Home
