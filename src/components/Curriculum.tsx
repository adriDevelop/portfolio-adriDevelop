import '../styles/Curriculum.css';

const Curriculum = () => {
  return (
    <div className="containerCurriculum">
      <div className="containerEstudios">
        <h2>Curriculum personal</h2>
        <div className="containerMarioLopez">
            <div className="containerDraw">
                <div className="containerCircle"></div>
                <div className="containerRaya"></div>
            </div>
            <div className="containerContent">
                <div className="content">
                    <div className="title">
                        <h2>Grado medio Sistemas microinformáticos y Redes.</h2>
                        <sub>IES Mario López, Bujalance, Córdoba</sub>
                    </div>
                    <ul>
                        <li>Montaje, desmontaje y reparación de equipos informáticos.</li>
                        <li>Manejo con sistemas operativos Linux.</li>
                        <li>Realizar instalaciones de redes locales.</li>
                        <li>Creación y administración de servidores con Ubuntu Server y Windows Server</li>
                        <li>Seguridad informática</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Curriculum