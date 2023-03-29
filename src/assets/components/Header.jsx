import React from 'react'
import '../styles/Header.css'
import imag from '../images/sistema.jpg'
const Header = () => {

  let text = `EMPRESA QUE OFRECE SUS SERVICIOS DE INSTALACIÓN Y MANTENIMIENTO EN SISTEMAS DE SEGURIDAD`
  return (
    <div>
      <div className='header_title_container'>
      <h4 className='header_title'>{text}</h4>
      </div>
      

    <div className='header_container'>
     <div className='header_container_t2'>
      <article className='header_t2'>
        <h3>Dayner’s Efficiency</h3>
        <h5>SISTEMAS DE CONTROL Y SEGURIDAD</h5>
      </article>
     </div>
     <div></div>

    </div>

    </div>
  )
}

export default Header