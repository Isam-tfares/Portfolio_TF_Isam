export default function Studie(props){
    return(<div className="studie  m-3 rounded border border-white col-lg-9 mx-auto my-2">
        <div className="row px-4 py-3 text-dark align-items-center">
            <div className=" col-4 col-sm-2">
                <img src={props.src} className="rounded-circle img-fluid" alt="f"></img>
            </div>
            <div className=" col-8 col-sm-9 p-md-2">
                <h3 className="fs-4 text-white">{props.title} <span className="fw-normal fs-5 text-warning ms-md-2">{props.duration}</span></h3>
                <p className="text-secondary fw-light ">{props.desc}</p>
            </div>
        </div>

    </div>)
}