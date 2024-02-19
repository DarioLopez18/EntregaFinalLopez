import "./Error.css"

const Error = () => {
  return (
    <div className="pagError">
      <h1 className="text marginError">Opss. Página no encontrada!</h1>
      <div>
        <img className="img404" src="/404.png" alt="error 404" />
      </div>
    </div>
  )
}

export default Error
