import Project from "../../Components/Project"
import DataProjects from "../../data/DataProjects"
export default function Projects(){
    return(<div className="container mt-5">
        <h1>Projects</h1>
        <div className="justify-content-center row ">
            {DataProjects.map((el)=>{
                return(<Project key={el.id} src={el.src} title={el.title} desc={el.desc} view={el.view} code={el.code}/>)
            })}
        </div>
    </div>)
}