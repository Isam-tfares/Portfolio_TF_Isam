import { useParams } from 'react-router';
import Error from '../pages/Error'
import Skills from './Skills'
import Studies from './Studies'
import Certifications from './Certifications'
export default function Subject(){
    const { subject } = useParams();   
    
    if(subject==='' || subject==='studies'){
        return(<Studies/>)
    }
    if(subject==='certifications'){
        return(<Certifications/>)
    }
    if(subject==='skills'){
        return(<Skills/>)
    }
    return(<Error/>) 
  }