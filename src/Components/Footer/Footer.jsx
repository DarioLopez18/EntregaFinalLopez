import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <div className="footerStyle">
            <div>
            <h4>Datos de contacto</h4>
            <label>Email:</label><a
            className="textFooter flex justify-center items-center gap-x-2 py-1 px-2 lg:py-2 lg:px-4 text-xs text-base bg-white/5 hover:scale-110 hover:bg-white/10 transition"
            href="https://mail.google.com/mail/?view=cm&to=darioangellopez38@gmail.com&su=Contacto para puesto de trabajo&body=Hola Dario, nos gustaría tener más información acerca de ti, y para ello quisiera coordinar una entrevista o abrir un canal de comunicación. Desde ya, muchas gracias."
            target="_blank"
            rel="noopener noreferrer"
            >
      darioangellopez38@gmail.com</a
    >
            </div>
    <div>
    <label>Github:</label>
    <a
            className="textFooter flex justify-center items-center gap-x-2 py-1 px-2 lg:py-2 lg:px-4 text-xs text-base bg-white/5 hover:scale-110 hover:bg-white/10 transition"
            href="https://github.com/DarioLopez18"
            target="_blank"
            rel="noopener noreferrer"
            >
      DarioLopez18</a
    >
    </div>
    <div>
    <label>Linkedin</label>
    <a
            className="textFooter flex justify-center items-center gap-x-2 py-1 px-2 lg:py-2 lg:px-4 text-xs text-base bg-white/5 hover:scale-110 hover:bg-white/10 transition"
            href="https://www.linkedin.com/in/dario-angel-jose-lopez-2a3202234/"
            target="_blank"
            rel="noopener noreferrer"
            >
      Dario Angel Jose Lopez</a
    >
    </div>

        </div>
    </footer>
  )
}

export default Footer
