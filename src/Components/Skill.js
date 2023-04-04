export default function Skill(props){
    return(<div className="m-auto my-3 Skill    col-lg-2 col-md-3 col-sm-4 col-6  justify-content-center d-flex align-items-center">
        <div className=" text-center ">
            <img className="img-fluid" src={props.src} alt={props.name}></img>
            <p className="text-secondary fw-light">{props.name}</p>
        </div>
        
    </div>)
}