import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import HouseIcon from '@material-ui/icons/House';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import TimelineIcon from '@material-ui/icons/Timeline';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { Link } from "react-router-dom";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';


const Navbar = ({ NavClk }) => {
    return (
        <div className="Navbar" >
            <div className="Navbar__headerContainerContent pd">
                <IconButton className="bgto" onClick={NavClk} >
                    <MenuIcon />
                </IconButton>
                <div className="Navbar__headerContainerLogo">
                    <span>
                        த
                    </span>
                    NEWS
                </div>
            </div>

            <div className="Navbar__Content">
                <Link to={'/'} className="Navbar__ContentItem nav__bg">
                    <HouseIcon className="house nav__act" />
                    <p>Home</p>
                </Link>

                <Link to={`/Electronics/${2}`} className="Navbar__ContentItem">
                    <TimelineIcon className="house" />
                    <p>Market</p>
                </Link>

                <Link to={`/ShareMarket/${4}`} className="Navbar__ContentItem">
                    <SentimentVerySatisfiedIcon className="house" />
                    <p>Comedy</p>
                </Link>

                <Link to={`/game/${2}`} className="Navbar__ContentItem">
                    <SportsEsportsIcon className="house" />
                    <p>Games</p>
                </Link>

                <Link to={`/Story/${5}`} className="Navbar__ContentItem">
                    <GraphicEqIcon className="house" />
                    <p>Story's</p>
                </Link>
                <Link to={'/corona'} className="Navbar__ContentItem bord">
                    <p>corona</p>

                    <AcUnitIcon className="house" />

                </Link>

                <Link to={"/AboutUs"} className="Navbar__ContentItem AboutUsNav">
                    <p>AboutUs</p>
                    <PersonOutlineIcon className="house" />
                </Link>




            </div>


        </div>
    )
}

export default Navbar;
