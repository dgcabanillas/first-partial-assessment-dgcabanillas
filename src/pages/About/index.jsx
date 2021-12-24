import React from 'react'
import Header from '../../components/Header'
import NavLinks from '../../crossed/NavLinks'

const About = () => {
  return (
    <>
      <Header title='ABOUT'/>
      <div className='container py-3'>
        <div className="row">
          <NavLinks />
        </div>
        <h1 
          style={{ marginTop: 16, fontSize: 48 }} 
          className='fw-bold text-secondary'
        >
          Diego Cabanillas
        </h1>
        <p className='fs-5'>
          Soy un apasionado por el uso de la tecnología en la solución de problemas. A lo largo de mi carrera profesional y laboral he podido detectar casos en los que con unas cuántas líneas de código he podido automatizar mi trabajo ahorrándome así cientos de horas para poder aprovecharlas en encontrar nuevas y mejores soluciones.
        </p>
        <p className='fs-5'>
          Creo firmemente que la disciplina y la autoeducación son los puntos claves para lograr el éxito.
        </p>
        <div className="card-img-top d-flex px-1 py-3">
          <img 
            src='https://www.diegocabanillas.com/img/myprofile.jpg'
            alt='Diego Cabanillas - imagen de perfil'
            style={{
              maxWidth: '100%',
              minHeight: 250,
              maxHeight: 250
            }}
            className='border border-primary rounded'
          />
        </div>

        <p className='fs-4 fw-bold mb-0 mt-3 text-secondary'> Cosas que he aprendido </p>
        <ul>
          <li><p className='mb-0 fs-5'>Configurar eslint y prettier</p></li>
          <li><p className='mb-0 fs-5'>Mejores prácticas</p></li>
          <li><p className='mb-0 fs-5'>Crear wireframes</p></li>
        </ul>

        <p className='fs-4 fw-bold mb-0 mt-3 text-secondary'> Datos de contacto </p>
        <ul>
          <li><p className='mb-0 fs-5'> email: dg.cabanillas@uni.pe </p></li>
          <li><p className='mb-0 fs-5'> github: <a href="https://github.com/dgcabanillas"> dgcabanillas </a></p></li>
        </ul>
      </div>
    </>
  )
}

export default About
