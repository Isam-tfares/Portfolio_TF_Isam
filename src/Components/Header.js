import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
export default function Header(){
    /* put active link */
    // console.log(window.location.href.slice(window.location.href.search('education')+10);
    let Howactive=(window.location.href.includes('education'))?'education':(window.location.href.includes('projects'))?'projects':(window.location.href.includes('contact'))?'contact':'about';
    let ClassActive="nav-link text-warning";
    const [active,setActive]=useState(Howactive);
    const [NavClass,setNav]=useState("navbar navbar-expand-md fixed-top text-light ");
    const [LinkClass,setLink]=useState("nav-link text-dark ")
    const [NameClass,setName]=useState("navbar-brand text-uppercase fw-bold text-light")
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const onScroll = (e) => {
        setScrollTop(e.target.documentElement.scrollTop);
        setScrolling(e.target.documentElement.scrollTop > scrollTop);
      }
      useEffect(() => {
        const onScroll = e => {
          setScrollTop(e.target.documentElement.scrollTop);
          setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollTop]);
      useEffect(() => {
        if(scrollTop>50){
            setNav("navbar navbar-expand-md fixed-top text-dark bg-light")
            setLink("nav-link text-dark ");
            setName("navbar-brand text-uppercase fw-bold text-dark")
        }
        else{
            setNav("navbar navbar-expand-md fixed-top text-light ")
            setLink("nav-link text-light ");
            setName("navbar-brand text-uppercase fw-bold text-light")
        }
      }, [scrollTop])
    return(
        <header id='header' className='py-4'>
        <nav className={NavClass}>
            {/* <a href="../index.html" className="btn bg-primary text-white position-fixed ms-2" data-bs-toggle="tooltip"
               data-bs-placement="right" title="Ne pas inclure dans l'intégration">Retour</a> */}
            <div className="container fw-bold">
                <a className={NameClass} href="/">
                    Tfares Isam
                </a>
                <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="">   
                        <i class={scrollTop<50 ?"fas fa-bars toggle":"fas fa-bars toggle text-dark"}></i>
                    </span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                            <Link className to="/">Home</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link  to="/" className={active==='about'?ClassActive:LinkClass} onClick={()=>setActive('about')}>About</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link  to="/education" className={active==='education'?ClassActive:LinkClass} onClick={()=>setActive('education')}>Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link  to="/projects" className={active==='projects'?ClassActive:LinkClass} onClick={()=>setActive('projects')}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link  to="/contact" className={active==='contact'?ClassActive:LinkClass} onClick={()=>setActive('contact')} >Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
}