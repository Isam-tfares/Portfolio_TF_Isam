import { useState } from "react";
export default function Project({src,title,desc,view,code}){
    const [style, setStyle] = useState({display: 'none'});
    return(
    <div class=" card m-2 col-md-4 col-lg-3 col-10 p-0 border border-secondary rounded " style={{backgroundColor:'black'}} 
    onMouseEnter={e => {
        setStyle({display: 'block'});
    }}
    onMouseLeave={e => {
        setStyle({display: 'none'})
    }}>
        <img class="card-img-top w-100" src={src} alt="imgProject"></img>
        <div class="card-body text-center">
            <h5 class="card-title  text-light">{title}</h5>
            <p class="card-text text-secondary">{desc}</p>
            <div className="" style={style}><a className="btn btn-warning m-2 px-4 py-2" target='_blank' rel="noreferrer" href={code}>Code</a><a className="btn btn-warning m-2 px-4 py-2" target="_blank" rel="noreferrer" href={view}>View</a></div>
        </div>
  </div>)
}