import styles from "../styles/Home.module.css"
import Carousel from '../components/Carousel';
import Separator from "../components/Separator"
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import PreRegister from "../components/PreRegister";

const Home = () => {
  
  return (
    <div className={styles.container}>
      <img className={styles.img} src="/banner.jpg" alt="banner" />
      <Separator />
      <PreRegister />
      <Separator />
      <Heading body={"Headphones"} />
      <Carousel data={headphones} />
      <Separator />
      <Heading body={"Phones"} />
      <Carousel data={phones} />
      <Separator />
      <Heading body={"Laptops"} />
      <Carousel data={laptops} />
      <Separator />
      <Heading body={"TVs"} />
      <Carousel data={tvs} />
      <Footer />
    </div>
  );
}

export default Home
