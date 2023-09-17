import React,{useEffect,useState} from 'react'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import MemoryIcon from '@material-ui/icons/Memory';
import BatteryCharging90Icon from '@material-ui/icons/BatteryCharging90';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import {useParams} from 'react-router-dom';
import {db} from '../firebase';
import axios from 'axios';



const PhoneSp = () => {

    const [PhoneSp, setPhoneSp] = useState([])

    const {phonespId} =useParams();
    const {brandId} =useParams();
    const [BrandApi, BrandApiState] = useState([]);
    
    useEffect(() => {
        db.collection("database").doc("Electronics").collection("phone").doc(brandId).collection("modules").doc(phonespId).onSnapshot((snap)=>setPhoneSp(snap.data())
         
         );
      
    }, [])



         
    return (
        
        <div className="Phone">
        
            <div className="Phone__container">
                <h4>{PhoneSp.name}</h4>
                <p>specification</p>
                <div className="Phone__header">
                    <div className="Phone__header__img">
                        <img src={"https://www.91-img.com/pictures/113780-v3-xiaomi-redmi-5-mobile-phone-large-1.jpg?tr=q-60"}></img>
                    </div>
                    <div className="Phone__header_infoContainer">
                        <div className="Phone__header_info">

                            <PhonelinkSetupIcon />
                            <span>{PhoneSp.Hsize}</span>


                        </div>
                        <div className="Phone__header_info">

                            <CameraAltIcon />
                            <span>{PhoneSp.Quad1}</span>


                        </div>
                        <div className="Phone__header_info">

                            <MemoryIcon />
                            <span>{PhoneSp.HRAM}<br></br>{PhoneSp.HPROSS}</span>


                        </div> <div className="Phone__header_info">

                            <BatteryCharging90Icon />
                            <span>{PhoneSp.BType}</span>
                        </div>
                    </div>
                </div>
                <div className="Phone__sp">
                    <div className="Phone__sp__container">
                        <div className="Phone__sp__content">
                            <h3>Network</h3>
                            <div className="Phone__sp__content__item">
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        technology
                                    </div>
                                    <div>
                                   {PhoneSp.Technology}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Phone__sp__content">
                            <h3>Launch</h3>
                            <div className="Phone__sp__content__item">
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Announced
                                    </div>
                                    <div> {PhoneSp.Announced}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Status
                                    </div>
                                    <div>{PhoneSp.Status}</div>
                                </div>
                            </div>
                        </div>

                        <div className="Phone__sp__content">
                            <h3>Body</h3>
                            <div className="Phone__sp__content__item">
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Dimensions
                                    </div>
                                    <div> {PhoneSp.Dimensions}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Build
                                    </div>
                                    <div> {PhoneSp.Build}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        SIM
                                    </div>
                                    <div> {PhoneSp.sim}</div>
                                </div>
                            </div>
                        </div>




                        <div className="Phone__sp__content">
                            <h3>Display</h3>
                            <div className="Phone__sp__content__item">
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Type
                                    </div>
                                    <div>{PhoneSp.Dtype}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Size
                                    </div>
                                    <div>{PhoneSp.size}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Resolution
                                    </div>
                                    <div> {PhoneSp.Resolution}
                                    </div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Protection
                                    </div>
                                    <div>{PhoneSp.Protection}</div>
                                </div>
                            </div>
                        </div>





                        <div className="Phone__sp__content">
                            <h3>Platform</h3>
                            <div className="Phone__sp__content__item">
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        OS
                                    </div>
                                    <div> {PhoneSp.OS} </div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Chipset
                                    </div>
                                    <div>{PhoneSp.Chipset}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        CPU
                                    </div>
                                    <div>  	{PhoneSp.CPU}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        GPU
                                    </div>
                                    <div> {PhoneSp.GPU}</div>
                                </div>
                            </div>
                        </div>



                        <div className="Phone__sp__content">
                            <h3>Memory</h3>
                            <div className="Phone__sp__content__item">
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Card slot
                                    </div>
                                    <div> {PhoneSp.cardslot}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Internal
                                    </div>
                                    <div> {PhoneSp.Internal}</div>
                                </div>
                            </div>
                        </div>




                        <div className="Phone__sp__content">
                            <h3>Main Camera</h3>
                            <div className="Phone__sp__content__item">
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        main cam
                                    </div>
                                    <div> {PhoneSp.Quad1}<br></br>
                                    {PhoneSp.Quad2}<br></br>
                                    {PhoneSp.Quad3}<br></br>
                                    {PhoneSp.Quad4}<br></br></div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Features
                                    </div>
                                    <div> {PhoneSp.Features}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Video
                                    </div>
                                    <div>{PhoneSp.Pvideo}</div>
                                </div>
                            </div>
                        </div>




                        <div className="Phone__sp__content">
                            <h3>Selfie camera</h3>
                            <div className="Phone__sp__content__item">
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Single
                                    </div>
                                    <div>{PhoneSp.Single}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Features
                                    </div>
                                    <div>{PhoneSp.Features}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Video
                                    </div>
                                    <div>{PhoneSp.Svideo}</div>
                                </div>
                            </div>
                        </div>

                        <div className="Phone__sp__content">
                            <h3>Sound</h3>
                            <div className="Phone__sp__content__item">
                                <div className="Phone__sp__content__item__part">
                                    <div >Loudspeaker
                                    </div>
                                    <div> {PhoneSp.Loudspeaker}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >

                                        3.5mm jack
                                    </div>
                                    {PhoneSp.jack}</div>
                                </div>
                            </div>
                        </div>

                        <div className="Phone__sp__content">
                            <h3>Comms</h3>
                            <div className="Phone__sp__content__item">
                                <div className="Phone__sp__content__item__part">
                                    <div >WLAN
                                    </div>
                                    <div>{PhoneSp.WLAN}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Bluetooth
                                    </div>
                                    <div>{PhoneSp.Bluetooth}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        GPS
                                    </div>
                                    <div>{PhoneSp.GPS}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        NFC
                                    </div>
                                    <div>{PhoneSp.NFC}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Infrared port
                                    </div>
                                    <div>{PhoneSp.Infraredport}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Radio
                                    </div>
                                    <div> {PhoneSp.Radio} 	</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        USB
                                    </div>
                                    <div> {PhoneSp.USB}</div>
                                </div>
                            </div>
                        </div>

                        <div className="Phone__sp__content">
                            <h3>Features</h3>
                            <div className="Phone__sp__content__item">
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Sensors
                                    </div>
                                    <div>{PhoneSp.Sensors}</div>
                                </div>
                            </div>
                        </div>

                        <div className="Phone__sp__content">
                            <h3>Battery</h3>
                            <div className="Phone__sp__content__item">
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Type
                                    </div>
                                    <div> {PhoneSp.BType}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Charging
                                    </div>
                                    <div> {PhoneSp.Charging}</div>
                                </div>
                            </div>
                        </div>

                        <div className="Phone__sp__content">
                            <h3>Misc</h3>
                            <div className="Phone__sp__content__item">
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Colors
                                    </div>
                                    <div> {PhoneSp.Colors}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Models
                                    </div>
                                    <div> {PhoneSp.Models}</div>
                                </div>

                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        SAR
                                    </div>
                                    <div>{PhoneSp.SAR}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        SAR EU
                                    </div>
                                    <div> {PhoneSp.SAREU}</div>
                                </div>
                                <div className="Phone__sp__content__item__part">
                                    <div >
                                        Price
                                    </div>
                                    <div>
                                    {PhoneSp.Price}
                                    </div>
                                </div>

                            </div>
                            <div className="Phone__sp__content phoneSp__margin">
                            <h3></h3>
                            <div className="Phone__sp__content__item">
                                <div className="Phone__sp__content__item__part">
                                   
                                </div>
                                <div className="Phone__sp__content__item__part">
                             
                                </div>
                                <div className="Phone__sp__content__item__part">
                                  
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default PhoneSp;
