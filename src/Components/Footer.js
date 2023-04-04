import { Link } from "react-router-dom";

export default function Footer(){
    return(<section className="">
    <footer className="text-white border-top border-secondary mt-5" >
      
      <div className="container pt-4 ">
        
        <div className="row">
          
          <div className="col-lg-5 col-md-10 mb-4 mb-md-0 text-center">
            <h5 className="text-uppercase text-light">Isam Portfolio</h5>
  
            <p className="text-secondary">
            Thank you for visiting my personal portfolio website. Connect with me over socials.

            
            </p>
            
          </div>
          
  
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
            <h5 className="text-uppercase text-light">Quick Links</h5>
  
            <ul className="list-unstyled mb-0">
              <li>
             
                <Link to="/" className="text-secondary"> <i class="fas fa-chevron-circle-right me-1"></i> About</Link>
              </li>
              <li>
                <Link to="/education" className="text-secondary"> <i class="fas fa-chevron-circle-right me-1"></i> Education</Link>
              </li>
              <li>
                <Link to="/projects" className="text-secondary"> <i class="fas fa-chevron-circle-right me-1"></i> Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary"> <i class="fas fa-chevron-circle-right me-1"></i> Contact</Link>
              </li>
            </ul>
          </div>
          
  
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0 text-light">Contact Info</h5>
  
            <ul className="list-unstyled">
              <li className='my-2'>
                <a target='_blank' rel="noreferrer" href="tel://+212653299145" className="text-secondary" data-toggle="tooltip" data-placement="right" title="Phone"><i class="bi bi-telephone-fill text-secondary"></i> +212653299145</a>
              </li>
              <li className='my-2'>
                <a target='_blank' rel="noreferrer" href="mailto:tfaresisam@gmail.com" className="text-secondary" data-toggle="tooltip" data-placement="right" title="Phone"><i class="bi bi-envelope text-secondary" ></i> tfaresisam@gmail.com</a>
              </li>
              <li className='my-2'>
                <a target='_blank' rel="noreferrer" href="#!" className="text-secondary" data-toggle="tooltip" data-placement="right" title="Adress"><i class="bi bi-geo-alt-fill text-secondary"></i> Oulad Teima Souss Massa</a>
              </li>
              <li className='my-2'>
                <div className=' d-flex align-items-center  flex-wrap'>
                    <a target='_blank' rel="noreferrer" href='https://www.instagram.com/invites/contact/?i=14zfmkbzl5jwx&utm_content=e475j19' className='text-light btn py-1 px-1 bg-white rounded-circle m-1 ' data-toggle="tooltip" data-placement="right" title="instagram"><i className="m-2 fs-5 fs-xlg-4 bi bi-instagram text-dark"></i></a>
                    <a target='_blank' rel="noreferrer" href='https://github.com/Isam-tfares' className='text-light btn py-1 px-1 bg-white rounded-circle m-1 text-dark ' data-toggle="tooltip" data-placement="right" title="GitHub"><i className="m-2 fs-5 fs-xlg-4 bi bi-github"></i></a>
                    <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/isam-tfares-888b8a224' className='text-light btn py-1 px-1 bg-white rounded-circle m-1 text-dark ' data-toggle="tooltip" data-placement="right" title="LinkedIn"><i className="m-2 fs-5 fs-xlg-4 bi bi-linkedin text-dark"></i></a>
                    <a target='_blank' rel="noreferrer" href='https://www.facebook.com/issam.tfares' className='text-light btn py-1 px-1 bg-white rounded-circle m-1 text-dark ' data-toggle="tooltip" data-placement="right" title="Facebook"><i className="m-2 fs-5 fs-xlg-4 bi bi-facebook text-dark"></i></a>
                    <a target='_blank' rel="noreferrer" href='https://twitter.com/IsamTfares?t=9Fk1Zqx3fsf7xG3apD35gw&s=09' className='text-light btn py-1 px-1 bg-white rounded-circle m-1 text-dark ' data-toggle="tooltip" data-placement="right" title="Twitter"> <i class="m-2 fs-5 fs-xlg-4 bi bi-twitter text-dark"></i></a>
            
                </div>
              </li>
            </ul>
          </div>
          
        </div>
        
      </div>
      <div className="text-center p-1" style={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>  © 2022 Copyright: <span className="text-warning">Tfares Isam</span></div>
    </footer>
    
  </section> )
}

