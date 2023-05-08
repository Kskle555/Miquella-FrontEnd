import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Landing Page/Navbar/Navbar';
import Intro from './Components/Landing Page/Intro/Intro';
import Trending from './Components/Landing Page/Trending/Trending';
import Content from './Components/Landing Page/Content/Content';
import Portfolio from './Components/Landing Page/Portfolio/Portfolio';
import Projects from './Components/Landing Page/Projects/Projects';
import Subscription from './Components/Landing Page/Subscription/Subscription';
import Footer from './Components/Landing Page/Footer/Footer';
import AIntro from './Components/About Us/AIntro/AIntro';
import Work from './Components/About Us/Work/Work';
import Section from './Components/About Us/Section/Section';
import Team from './Components/About Us/Team/Team';
import Staticstics from './Components/Portfolio/Staticstics/Staticstics';
import PSection from './Components/Portfolio/Section/PSection';
import PArticles from './Components/Portfolio/PArticles/PArticles';
import PCustomer from './Components/Portfolio/PCustomer/PCustomer';
import NIntro from './Components/News/NIntro.js/NIntro';
import New from './Components/News/New/New';
import CIntro from './Components/Contact/CIntro/CIntro';
import CForm from './Components/Contact/CForm/CForm';
import Dashboard from './Components/AdminPanel/AdminDashboard/Dashboard';
import Summary from './Components/AdminPanel/Summary/Summary';
import Charts from './Components/AdminPanel/AdminCharts/Charts';
import RecentNews from './Components/AdminPanel/RecentNews/RecentNews';
import AddNews from './Components/AdminPanel/AddNews/AddNews';
import DeleteNews from './Components/AdminPanel/DeleteNews/DeleteNews';


function App() {
  return (
   <Routes>
    <Route exact  path="/" element={<><Navbar/><Intro/><Trending/><Content/><Portfolio/><Projects/><Subscription/><Footer/> </>}/>
    <Route exact  path='/AboutUs' element={<><Navbar/><AIntro/><Work/><Section/><Team/><Subscription/><Footer/></>}/>
    <Route exact  path='/Portfolio' element={<><Navbar/><Staticstics/><PSection/><PArticles/><PCustomer/><Subscription/><Footer/></>}/>
    <Route exact  path='/News' element={<><Navbar/><NIntro/><New/><Subscription/><Footer/></>}/>
    <Route exact  path='/Contact' element={<><Navbar/><CIntro/><CForm/><Subscription/><Footer/></>}/>
    <Route exact  path='/Admin' element={<><Dashboard/><Summary/><Charts/><RecentNews/></>}/>
    <Route exact  path='/Admin/AddNews' element={<><Dashboard/><AddNews/></>}/>
    <Route exact  path='/Admin/DeleteNews' element={<><Dashboard/><DeleteNews/></>}/>
   </Routes>
  );
}

export default App;
