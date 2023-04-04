import DataStudies from '../data/studiesData';
import Studie from './Studie';
export default function Studies(){
    return(<div className="Studie">
        <div className="container">
            {DataStudies.map((el)=>{
                return(<Studie key={el.id} title={el.title} desc={el.desc} src={el.src} duration={el.duration}/>)
            })}
        </div>
        
    </div>);
}