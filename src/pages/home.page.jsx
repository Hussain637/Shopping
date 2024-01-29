import CarouselImg from '../components/Carouselimg';
import Footer from '../components/footer';
import Section1 from '../components/section1';
import DiscountsSection2 from '../components/section2';
import Section3 from '../components/section3';
import Section4 from '../components/section4';
import './pages.css';
function HomePage() {

  return (
    <>
    <div className='bg_gray'>
        {/*  */}
        <Section1/>
    </div>
      <CarouselImg/>
      <DiscountsSection2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </>
  )
}

export default HomePage;