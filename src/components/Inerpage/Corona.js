import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {motion,animate} from 'framer-motion';

const Corona = () => {

    const [covidDataIndia, setcovidDataIndia] = useState([]);
    const [covidDataTn, setcovidDataTn] = useState([]);
    const [covidDataState, setcovidDataState] = useState([]);

    const getCoronadata= async ()=>{
        try{
            const res= await fetch('https://api.covid19india.org/data.json');
            const datas= await res.json();
            setcovidDataIndia(datas.statewise[0]);
            setcovidDataTn(datas.statewise[32]);
            setcovidDataState(datas.statewise);
           
           
        }catch(err){
             console.log(err);
        }

    }
   useEffect(() => {
     
    getCoronadata();
    //    return () => {
    //        cleanup
    //    }
   }, [])
    

    return (
        <motion.div initial={{y:'500vh'}} animate={{y:0}} transition={{type:'spring', duration:1,}} className="Corona">
            <div  className="Corona__container">
           
          
            <div 
              className="Corona__container__India">
                  <div className="Corona__container__name">
                  <h2>India</h2> <br></br>
                  <i>.</i>
                   <span>{covidDataIndia.lastupdatedtime}</span> 
                  </div>
                   <div className="Corona__container__India__item blue">
                       <span className="tag">
                           <span className="sm">
                               total
                            </span>
                            active
                        </span>
                        <span className="number">
                             {covidDataIndia.active}
                        </span>
                    </div>
                    <div className="Corona__container__India__item yellow">


                    <span className="tag">
                           <span className="sm">
                               total
                            </span>
                            confirmed
                        </span>
                        <span className="number">
                    {covidDataIndia.confirmed}
                        </span>
                     
                    </div>
                    <div className="Corona__container__India__item green">
                    <span className="tag">
                           <span className="sm">
                               total
                            </span>
                            recovered
                        </span>
                        <span className="number">
                        {covidDataIndia.recovered}
                        </span>
                     
                    </div>
                    <div className="Corona__container__India__item red">
                    <span className="tag">
                           <span className="sm">
                               total
                            </span>
                            deaths
                        </span>
                        <span className="number">
                        {covidDataIndia.deaths}
                        </span>

                    </div>
              </div>


              <div 
              className="Corona__container__India">


                <div className="Corona__container__name">
                <h2>{covidDataTn.state}</h2> <br></br>  
                  </div>

                   <div className="Corona__container__India__item blue">
                       <span className="tag">
                           <span className="sm">
                               total
                            </span>
                            active
                        </span>
                        <span className="number">
                             {covidDataTn.active}
                        </span>
                    </div>
                    <div className="Corona__container__India__item yellow">


                    <span className="tag">
                           <span className="sm">
                               total
                            </span>
                            confirmed
                        </span>
                        <span className="number">
                    {covidDataTn.confirmed}
                        </span>
                     
                    </div>
                    <div className="Corona__container__India__item green">
                    <span className="tag">
                           <span className="sm">
                               total
                            </span>
                            recovered
                        </span>
                        <span className="number">
                        {covidDataTn.recovered}
                        </span>
                     
                    </div>
                    <div className="Corona__container__India__item red">
                    <span className="tag">
                           <span className="sm">
                               total
                            </span>
                            deaths
                        </span>
                        <span className="number">
                        {covidDataTn.deaths}
                        </span>

                    </div>
              </div>

              
            </div>
            



            <div className="corona__table">

                <table>
                    <thead>
                        <th>s/no</th>
                        <th >state</th>
                        <th >active</th>
                        <th >confirmed</th>
                        <th >recovered</th>
                        <th >deaths</th>
                    </thead>

                    {covidDataState.map((item,index)=>
                        (
                            <tbody className="tbody">
                            <td>{index}</td>
                            <td>{item.state}</td>
                            <td>{item.active}</td>
                            <td>{item.confirmed}</td>
                            <td>{item.recovered}</td>
                            <td>{item.deaths}</td>                        
                           </tbody>
                        )
                    )}
                   
                  
                </table>

            </div>

        </motion.div>
    )
}

export default Corona;




