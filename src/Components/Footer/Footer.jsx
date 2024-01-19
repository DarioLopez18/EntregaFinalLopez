import "./Footer.css"

const Footer = () => {
  return (
<footer>
        <div className="footerStyle">
        <div className="margin">
              <h4>Datos de contacto</h4>
              <label className="margin">Email:</label>
              <a
                className="textFooter"
                href="https://mail.google.com/mail/?view=cm&to=darioangellopez38@gmail.com&su=Contacto para puesto de trabajo&body=Hola Dario, nos gustaría tener más información acerca de ti, y para ello quisiera coordinar una entrevista o abrir un canal de comunicación. Desde ya, muchas gracias."
                target="_blank"
                rel="noopener noreferrer">darioangellopez38@gmail.com</a>
        </div>
            <div>
              <label className="margin">Github:</label>
                        <a
                        className="textFooter"
                        href="https://github.com/DarioLopez18"
                        target="_blank"
                        rel="noopener noreferrer"
                        >DarioLopez18</a>
            </div>
            <div>
            <label className="margin">Linkedin</label>
            <a
                    className="textFooter"                   
                    href="https://www.linkedin.com/in/dario-angel-jose-lopez-2a3202234/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
              Dario Angel Jose Lopez</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
