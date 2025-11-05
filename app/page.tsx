  import Navbar from '@/app/components/Navbar'
  import Introduction from '@/app/components/Introduction'
  import LandingPage from '@/app/components/LandingPage'
import Work from './components/Work';
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto font-sans">
  <Navbar></Navbar>
  <Introduction></Introduction>
  <LandingPage></LandingPage>
  <Work></Work>
    </div>
  );
}
