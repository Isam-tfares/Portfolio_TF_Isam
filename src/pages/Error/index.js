import { Link } from 'react-router-dom'
import '../../styles/Error.css'
export default function Error() {
    return (
        <div className=' mt-5 Error d-flex justify-content-center align-items-center'>
            <div className='text-center'>
                <h1 className='text-warning  fw-bold  mb-1' style={{ fontSize: '150px' }}>404 </h1>
                <span style={{ fontSize: '30px', color: 'white' }} className='text-warning'>Page not Found</span><br/>
                <Link className='btn btn-warning text-dark fw-bold' to='/'>Back to Home</Link>
            </div>
        </div>)
}