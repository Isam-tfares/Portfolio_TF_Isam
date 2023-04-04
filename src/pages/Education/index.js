import React from 'react'
import {  useRouteMatch } from 'react-router';
import { 
  Switch,
  Route,
  Link
} from "react-router-dom";
import Studies from '../../Components/Studies'
import Subject from '../../Components/Subject';


export default function Education() {    
  const { path, url } = useRouteMatch();
  const urlName=window.location.href.slice(window.location.href.search('education')+10);
  console.log(window.location.href.slice(window.location.href.search('education')+10));     
//   const [active,setActive]=useState(urlName.length>0?urlName:'studies' );
    function getClass(name){
        return (name===urlName || (name==='studies' && urlName===''))?' text-warning fw-bold':'text-decoration-none text-secondary fw-bold'
    }
    // function setClass(name){
    //     setActive(name);
    // }
    return (  
        <>
            <div className='Education mt-4'>
                <h1 className='text-center'>Education</h1>
                <div className='container mt-5'>
                    <ul className="nav nav-pills nav-fill  ">
                        <li className="nav-item">
                        <Link className={getClass("studies")}  to={`${url}/studies`}>Studie/Experience</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={getClass("skills")}  to={`${url}/skills`}>Skills</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={getClass("certifications")}  to={`${url}/certifications`}>Certifications</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Switch>      
                <Route path={`${path}/:subject`}>
                    <Subject />
                </Route>
                <Route>
                    <Studies/>
                </Route>
            </Switch>
        </>
    );    
  }
 
  /* https://www.adruich.com/
https://ayaelyoussoufi.netlify.app/
https://sabirkhaloufi.me/
https://anassbouchfar.me/
https://medredakamal-portfolio.web.app/
*/