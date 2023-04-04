import my_picture from '../../assets/my_picture.png'
import '../../styles/Home.css'
export default function Home(){
    return(
    <div className=" Home  mt-5">
        <div className="container">
            <div className="row align-items-center text-center text-sm-start">
                <div className="col-10 m-auto col-md-6">
                    <h5 className='fw-light'>Hey</h5>
                    <h2 className='fw-bold '>I'm <span className='text-warning'>Tfares Isam</span> an Engineering student and Full-stack Developper</h2>
                    <p className='fw-light mt-5 mb-3'>I am a student in ENSA Safi in Computer Engineering, Full-stack developper. I am passionate to improve my skills in coding and developement of websites</p>
                    <div className=' d-flex align-items-center'> <span>see Me </span>
                    <a target='_blank' rel="noreferrer" href='https://www.instagram.com/invites/contact/?i=14zfmkbzl5jwx&utm_content=e475j19' className='text-light'><i class="m-2 fs-5 fs-xlg-4 bi bi-instagram"></i></a>
                    <a target='_blank' rel="noreferrer" href='https://github.com/Isam-tfares' className='text-light'><i class="m-2 fs-5 fs-xlg-4 bi bi-github"></i></a>
                    <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/isam-tfares-888b8a224' className='text-light'><i class="m-2 fs-5 fs-xlg-4 bi bi-linkedin"></i></a>
                    <a target='_blank' rel="noreferrer" href='https://www.facebook.com/issam.tfares' className='text-light'><i class="m-2 fs-5 fs-xlg-4 bi bi-facebook"></i></a>
                    </div>
                    <div className="row text-center">
                        <button className="col-4 px-2 py-1 m-4 btn btn-warning "><i class="bi bi-envelope"></i> Email Me</button>
                        <button className="col-4 px-2 py-1 m-4 btn  btn-outline-warning"><i class="bi bi-download"></i> Download CV</button>
                    </div>
                </div>
                <div className="col-8 m-auto col-md-5 p-3 rounded-4 dd rounded-circle">
                    <div className='bg-light rounded-circle'>
                        <img className='img-fluid rounded-circle' src={my_picture} alt="my_picture"></img>
                    </div>
                </div>
            </div>

        </div>
    </div>)
}