  import Navbar from '@/app/components/Navbar'
  import Introduction from '@/app/components/Introduction'
  import LandingPage from '@/app/components/LandingPage'
import Work from './components/Work';
import Details from './components/details';
import Myskill from './components/MySkill';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto font-sans">
  <Navbar></Navbar>
  <Introduction></Introduction>
  <LandingPage></LandingPage>
  <Work></Work>
  <Myskill></Myskill>
  <Details></Details>
  <Footer></Footer>
    </div>
  );
}
