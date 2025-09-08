import '../styles/Contactame.css';

const Contactame = () => {
  return (
    <div className="containerContactMe">
      <div className="containerTitleContact">
        <h2>Contactame</h2>
      </div>
      <div className="containerContentContact">
        <div className="ellipse containerEllipse1"></div>
        <div className="ellipse containerEllipse2"></div>
        <div className="ellipse containerEllipse3"></div>
        <div className="containerInput">
            <form action="">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" className="nombre" type="text" />
                <label htmlFor="email">Email</label>
                <input id="email" className="email" type="text" />
                <label htmlFor="comentario">Comentario</label>
                <textarea id="comentario" className="comentario" />
                <button id="send" className="send">Contactar</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contactame
