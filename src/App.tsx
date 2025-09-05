import './App.css'
import Curriculum from './components/Curriculum';
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
    </>
  )
}

export default App
