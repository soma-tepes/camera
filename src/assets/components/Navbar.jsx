import React from 'react'
import imagen from "../images/logo.webp"
import '../styles/Navbar.css'

const Navbar = () => {
    let phrase = `EMPRESA QUE OFRECE SUS SERVICIOS DE INSTALACIÓN Y MANTENIMIENTO EN SISTEMAS DE SEGURIDAD`
     const nav = ['Title','Contact','Mision']

    return (
        <div className='navbar'>

            <div className='nav_tex_img'>

                <div className='nav1'>
                    <img src={imagen} alt="" />
                </div>
                <div>
                    <a href="#"><span>Dayner's Efficiency</span> </a>

                </div>
            </div>



            <div className='nav_list'>
              
                <ul>
                    <li>{nav[0]}</li>
                    <li>{nav[1]}</li>
                    <li>{nav[2]}</li>
                </ul>
            </div>

           







        </div>
    )
}

export default Navbar