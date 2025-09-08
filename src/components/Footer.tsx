import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="containerDatos">
        <div className="containerFooter">
            <div className="containerLeft">
                    <img src="src/assets/adriDevelop.png"></img>
            </div>
            <div className="containerRight">
                <div className="containerContactame">
                    <ul>
                        <li>Inicio</li>
                        <li>Curriculum</li>
                        <li>Proyectos</li>
                        <li>Contáctame</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyright">
            <h6>Realizado con ❤️❤️ por Adrián Velasco Carrasco ©</h6>
        </div>
    </div>
  )
}

export default Footer
