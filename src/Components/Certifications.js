import DataCert from "../data/DataCert"
export default function Certifications(){
    return(<div className="cert mt-5">
        {/* <div className="container overflow-auto">
            <div className="d-flex">
                {DataCert.map((el)=>{
                    return(<div className="m-1 w-100" key={el.id}><img className="" style={{width:'250px'}} src={el.src} alt={el.title}></img></div>);
                })}
            </div>
        </div> */}
        <div className="container ">
            <div className="row justify-content-center ">
                {DataCert.map((el)=>{
                    return(
                    
                    <img key={el.id} className="col-md-4 img-fluid  mx-1 my-2 col-sm-6 " style={{width:'250px',cursor:'pointer'}} src={el.src} alt={el.title} data-toggle="tooltip" data-placement="right" title={el.title}></img>)
                })}
            </div>
        </div>
    </div>)
}