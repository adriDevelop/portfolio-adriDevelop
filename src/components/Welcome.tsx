import '../styles/Welcome.css';

const Welcome = () => {
  return (
    <div className="containerWelcome">
        <div className="cardImage">
        <div className="ellipse ellipse1"></div>
        <div className="ellipse ellipse2"></div>
        <div className="ellipse ellipse3"></div>
        <img src="src/assets/adri.png" alt="Foto" className="profileImage"/>
      </div>
      <div className="cardMessage">
        <h5 className="messageWelcome">Bienvenidx</h5>
        <h2 className="messageName">Soy Adrian Velasco Carrasco</h2>
      </div>
    </div>
  )
}

export default Welcome
