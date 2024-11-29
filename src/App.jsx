import './App.css'
import Nav from './Components/Nav/Nav'
import LoginRegister from './Components/LoginRegister/LoginRegister'
import MindShieldComponent from './Components/MindShieldComponent/MindShieldComponent'
import ServicesComponent from './Components/ServicesComponent/ServicesComponent'
import ThirdComponent from './Components/ThirdComponent/ThirdComponent'
import Download from './Components/Download/Download'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      {/* <Nav/> */}
      {/* <LoginRegister/> */}
      <MindShieldComponent/>
      <ServicesComponent />
      <ThirdComponent/>
      <Download/>
      <Footer/>
    </>
  )
}

export default App
