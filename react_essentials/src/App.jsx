
import './App.css'
import EssentialList from './Components/EssentialList'
import Examples from './Components/Title/Examples/Examples'
import Title from './Components/Title/Title'

function App() {


  return (
    <div className='App'>
      <div className='Title'>
   <Title/>
   </div>
   <div className="EsseantialList">
   <EssentialList/>
   </div>
   <div className="Examples">
   <Examples/>
   </div>
    </div>
  )
}

export default App
