import './App.css'
import Contactame from './components/Contactame';
import Curriculum from './components/Curriculum';
import Footer from './components/Footer';
import Header from './components/Header';
import Proyectos from './components/Proyectos';
import Welcome from './components/Welcome';

function App() {

  return (
    <>
      <Header></Header>
      <Welcome></Welcome>
      <Curriculum></Curriculum>
      <Proyectos></Proyectos>
      <Contactame></Contactame>
      <Footer></Footer>
    </>
  )
}

export default App
