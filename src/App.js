import Home from './components/pages/Home';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import Navbar from './components/Navbar';
import react, { useState,useEffect } from "react";
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import TimelineIcon from '@material-ui/icons/Timeline';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewsFeedPage from "./components/NewsFeedPage";
import NewsFeedPage2 from "./components/NewsFeedPage2";
import Game from './components/pages/Game';
import ShareMarket from './components/pages/ShareMarket';
import Electronics from './components/pages/Electronics';
import Story from './components/pages/Story';
import Corona from "./components/Inerpage/Corona"
import PhoneSp from "./components/Inerpage/PhoneSp";
import PhoneList from './components/Inerpage/PhoneList';
import StoryList from './components/Inerpage/StoryList';
import StoryContent from './components/Inerpage/StoryContent';
import AboutUs from './components/Inerpage/AboutUs';
import {motion,animate} from 'framer-motion';





function App() {

  const [Nav, setNav] = useState(true);
  const [navIconChange, setnavIconChange] = useState(false);
  const [headTime, setheadTime] = useState(null);
  const [headDate, setheadDate] = useState(null);
   
 

  setInterval(() => {
    
    setheadTime(new Date().toLocaleTimeString())
    setheadDate(new Date().toDateString())


  }, 1000);


  const changeNavBtn =()=>{
      
        setnavIconChange(!navIconChange);
   
}

  const fullClk =()=>{
    scrClk()
    document.documentElement.requestFullscreen();
}

  const scrClk = () => {
   if(Nav==false){
    NavClk();
    
   }
  }
  const NavClk = () => {

    setNav(!Nav);
    const navid = document.getElementById("nav");
    if (Nav) {
      navid.classList.add("App__navbarShow");
      navid.classList.remove("App__navbarHide");
    } else {
      navid.classList.add("App__navbarHide");
      navid.classList.remove("App__navbarShow");
    }
  }



  return (
    <Router >
           
      <div  onClick={fullClk}  className="App">
        <div className="App__header">
          <div  className="App__headerContainer">
            <div onClick={NavClk} className="App__headerContainerContent">
              <IconButton onClick={NavClk}>
                <MenuIcon />
              </IconButton>
              <div className="App__headerContainerLogo">
                 <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{type:'spring', duration:.3,}} >
                  த
                </motion.span>
                <motion.div className="App__headerContainerLogo__right" initial={{x:'-10vw'}} animate={{x:0}} transition={{type:'spring', duration:2,}}> 
                NEWS
                </motion.div>
              </div>
            </div>

           <div className="App__headLeftER">
           <div>
            <motion.div className="App__headerContainerLogo__right" initial={{x:'-10vw'}} animate={{x:0}} transition={{type:'spring', duration:1,}} className="live__dot">
           
              </motion.div>
              <span>
                Live
              </span>
            </div>
            
         <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{type:'spring', duration:7,}}  className="App__headTimes">
              
            <span>
             {headTime}
            </span>
            <span className="App__headDate">
             {headDate}
            </span>
            </motion.div>
           </div>
          </div>
        </div>


        <Route exact path="/">
            <div className="App__pages">
              <Home />
            </div>
          </Route>

          <Route exact path="/corona">
            <div className="App__pages">
              <Corona />
            </div>
          </Route>


          <Route exact path="/game/:gameId">
            <div className="App__pages">
              <Game />
            </div>
          </Route>
        
          <Route exact path="/ShareMarket/:ShareMarketId">
            <div className="App__pages">
              <ShareMarket />
            </div>
          </Route>

          <Route exact path="/NewsFeedPage/:NewsFeedPageId">
            <div className="App__pages">
              <NewsFeedPage />
            </div>
          </Route>


          
          <Route exact path="/NewsFeedPage2/:NewsFeedPage2Id">
            <div className="App__pages">
              <NewsFeedPage2 />
            </div>
          </Route>

          <Route exact path="/Electronics/:ElectronicstId">
            <div className="App__pages">
              <Electronics />
            </div>
          </Route>
          
          <Route exact path="/Electronics/:ElectronicstId/phone">
            <div className="App__pages">
              <PhoneList />
            </div>
          </Route>
          <Route exact path="/Electronics/:ElectronicstId/phone/phonesp/:brandId/:phonespId">
            <div className="App__pages">
              <PhoneSp />
            </div>
          </Route>

          <Route exact path="/Story/StoryList/:StoryListId">
            <div className="App__pages">
              <StoryList/>
            </div>
          </Route>

          <Route exact path="/Story/StoryList/:StoryListId/storycontent/:storycontentId">
            <div className="App__pages">
              <StoryContent/>
            </div>
          </Route>

          <Route exact path="/Story/:StoryId">
            <div className="App__pages">
              <Story/>
            </div>
          </Route>


          <Route exact path="/AboutUs">
            <div className="App__pages">
              <AboutUs/>
            </div>
          </Route>
    

        <div id='nav' className=" App__navbarHide">
          <Navbar NavClk={NavClk} />
        </div>
       
       
        <motion.div initial={{y:'200vh'}} animate={{y:0}} transition={{type:'none', duration:.8,}} className="App__bottomNav">
        <motion.div  initial={{x:'300vw'}} animate={{x:0}} transition={{type:'spring', duration:.8,}} className="App__bottomNavContainer">
            <Link id='bottomNavHome'  to={'/'} className="App__bottomNavItem btomNav " >
              <KeyboardCapslockIcon className=" house" />
              <p>Home</p>
            </Link>


            <Link id='bottomNavMarket'  to={`/Electronics/${2}`} className="App__bottomNavItem btomNav " >
              <TimelineIcon className="house" />
              <p>Market</p>
            </Link>
            

             <Link  id='bottomNavComedy'   to={`/ShareMarket/${4}`} className="App__bottomNavItem btomNav " >
             <SentimentVerySatisfiedIcon className="house" />  
               <p>Comedy</p>
             </Link>

{/*       
             <Link onClick={changeNavBtn} to={`/ShareMarket/${4}`} className="App__bottomNavItem">
             <SentimentSatisfiedAltIcon className="house" />  
               <p>Comedy</p>
             </Link> */}
          

          <Link to={`/game/${3}`} id='App__bottom_game' className="App__bottomNavItem btomNav" >
              <SportsEsportsIcon className="house" />
              <p>Games</p>
            </Link>
           

            <Link to={`/Story/${5}`}  id='App__bottom_story' className="App__bottomNavItem btomNav " >
              <GraphicEqIcon className="house" />
              <p>Story's</p>
            </Link>


           
           
          </motion.div>
        </motion.div>

      </div>
     
  
    </Router>
  );
}

export default App;
