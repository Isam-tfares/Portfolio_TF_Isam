import img from '../../assets/MyImg.jpg'
import '../../styles/Home.css'
import CV from "../../assets/MyCv.pdf";
export default function About() {

    const handleEmailClick = () => {
        const emailAddress = 'tfaresisam@gmail.com';
        const subject = 'Subject';
        const body = '';

        const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
        window.open(mailtoLink);
    }

    return (<div id="About" className="container mt-5 pt-3"><div className="row about-extra mb-5 align-items-center">

        <div className="col-lg-7 p-4 order-lg-1 order-2">
            <h5 className='fw-light'>Hey</h5>
            <h2 className='fw-bold text-light text-center'>I'm <span className='text-warning'>Tfares Isam</span> an Engineering student</h2>
            <p className='fw-light mt-5 mb-3 text-center'>I am a student in ENSA Safi in Computer Engineering,
                A passionate individual with a strong background in data science and
                computer science. I am dedicated to leveraging data-driven insights to solve complex problems
                and drive innovation. With expertise in data analysis, machine learning, and computer science principles,
                I am committed to making meaningful contributions in diverse projects and collaborative environments.
                I thrive on challenges and continuously seek opportunities to expand my knowledge and skills in these exciting fields.

            </p>
            <div className=' d-flex align-items-center justify-content-center'>
                <a data-toggle="tooltip" data-placement="right" title="instagram" target='_blank' rel="noreferrer" href='https://www.instagram.com/invites/contact/?i=14zfmkbzl5jwx&utm_content=e475j19' className='text-light' data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-custom-class="custom-tooltip"
                    data-bs-title="This top tooltip is themed via CSS variables."><i className="m-2 fs-2 fs-xlg-4 bi bi-instagram"></i></a>
                <a data-toggle="tooltip" data-placement="right" title="Github" target='_blank' rel="noreferrer" href='https://github.com/Isam-tfares' className='text-light'><i className="m-2 fs-2 fs-xlg-4 bi bi-github"></i></a>
                <a data-toggle="tooltip" data-placement="right" title="LinkedIn" target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/isam-tfares-888b8a224' className='text-light'><i className="m-2 fs-2 fs-xlg-4 bi bi-linkedin"></i></a>
                <a data-toggle="tooltip" data-placement="right" title="Facebook" target='_blank' rel="noreferrer" href='https://www.facebook.com/issam.tfares' className='text-light'><i className="m-2 fs-2 fs-xlg-4 bi bi-facebook"></i></a>
            </div>
            <div className="row text-center justify-content-center">
                <button className=" col-5 col-md-3 col-sm-4 px-2 py-2 m-4 btn btn-warning " data-toggle="tooltip" data-placement="right" title="Email" onClick={handleEmailClick}><i className="bi bi-envelope"></i> Email Me</button>
                <a href={CV} target="_blank" rel="noopener noreferrer" className="col-5 col-md-3 col-sm-4 px-2 py-2 m-4 btn  btn-outline-warning" data-toggle="tooltip" data-placement="right" title="Cv"><i className="bi bi-download"></i> Download CV</a>

            </div>
        </div>

        <div className=" col-sm-7 col-9 p-1  m-auto col-lg-4 ddd align-items-center d-flex justify-content-center background order-lg-2 aos-init aos-animate  rounded-5 rounded-circle" data-aos="zoom-in">
            <div className='p-3 rounded-circle bg-light'><img src={img} id="jml" alt='f' className="img-fluid m-auto d-block rounded-circle" ></img></div>

        </div>
    </div></div>)
}