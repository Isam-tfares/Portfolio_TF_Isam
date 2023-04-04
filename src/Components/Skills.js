import DataSkills from "../data/DataSkills"
import Skill from "./Skill"
export default function Skills(){
    return(<div className="Skils container mt-5">
        <div className="row">
            {DataSkills.map((el)=>{
                return(<Skill key={el.name} name={el.name} src={el.icon}/>);
            })}
        </div>
    </div>)
}