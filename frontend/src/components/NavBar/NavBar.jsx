import React, {useRef, useEffect} from 'react';
import styles from './NavBar.module.scss'
import { Link } from "react-router-dom";
import logo from '../../assets/GSlogo.png'

function NavLink({to,condition,children}) {

    return <li className={`nav-item ${styles['navLink']}`}>
        <Link className={`nav-link mx-3 ${ condition ? styles["active"] : "" }`} to={to}>
            { children }
            {condition && <span className="sr-only">(current)</span>}
        </Link>
    </li>
}

function NavBar(props) {
    let navbar = useRef();
    let toggle = useRef();
    let collapse = useRef();
    function toggleMenu() {
        let {black, transparent} = styles
        if (collapse && navbar) {
            navbar.current.classList.remove(transparent);
            navbar.current.classList.add(black);
            collapse.current.classList.toggle('collapse');
            collapse.current.classList.toggle('in');
        }
    }
    function closeMenusOnResize() {
        if (collapse && document.body.clientWidth >= 768) {
            collapse.current.classList.add('collapse');
            collapse.current.classList.remove('in');
        }
    }
    function checkScroll(){
        if (!navbar) return;
        //The point where the navbar changes in px
        let startY = parseFloat(getComputedStyle(navbar.current, null).height.replace("px", ""));
        let {black, transparent} = styles
        if(window.document.documentElement.scrollTop > startY ){
            navbar.current.classList.remove(transparent);
            navbar.current.classList.add(black);
        } else {
            navbar.current.classList.add(transparent);
            navbar.current.classList.remove(black);
        } 
    }
    
    useEffect(()=>{
        window.addEventListener('resize', closeMenusOnResize, false);
        window.addEventListener('resize', checkScroll, false);
        window.addEventListener('scroll', checkScroll, false);
        return () => {
            window.removeEventListener('resize', closeMenusOnResize, false);
            window.removeEventListener('resize', checkScroll, false);
            window.removeEventListener('scroll', checkScroll, false);
        };
    });

    let currentPage = props.current;
    return <>
       <nav ref={navbar} className={["navbar navbar-expand-lg navbar-dark px-5", styles['fixedTop'],styles['navbar']].join(' ') }>
           <Link className="navbar-brand" to="/home"><img className={styles['navLogo']} alt="GIRLSCRIPT" src={logo} /></Link>
            <button onClick={toggleMenu} ref={toggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div ref={collapse} className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <NavLink to="/home" condition={currentPage === "home"}>Home</NavLink>
                    <NavLink to="/about" condition={currentPage === "about"}>About</NavLink>
                    <NavLink to="/events" condition={currentPage === "events"}>Events</NavLink>
                    <NavLink to="/gallary" condition={currentPage === "gallary"}>Gallary</NavLink>
                    <NavLink to="/team" condition={currentPage === "team"}>Team</NavLink>
                    <NavLink to="/contact" condition={currentPage === "contact"}>Contact</NavLink>
                </ul>
            </div>
        </nav>
    </>;
}

export default NavBar;