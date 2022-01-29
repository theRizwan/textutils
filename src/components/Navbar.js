import React from 'react'
import App from '../App.css'
import {Link} from 'react-router-dom'



export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.modedark} bg-${props.modedark}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
                </li>
               
                
            </ul>
            {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}

            {props.modedark==='dark'? '':
            <div className='mx-3'>
            <button class="button button5" style={{backgroundColor:'#01001c'}} onClick={()=>props.colortheme('#01001c')}></button>
            <button class="button button5" style={{backgroundColor:'black'}} onClick={()=>props.colortheme('black')}></button>
            <button class="button button5" style={{backgroundColor:'#16001a'}} onClick={()=>props.colortheme('#16001a')}></button>
            </div>}
            <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        <label className={`form-check-label text-${props.modedark==='light'?'black':'white'}`} htmlFor="flexSwitchCheckDefault">Enable {props.modedark} Mode</label>
            </div>
            </div>
        </div>
</nav>
    )
}


