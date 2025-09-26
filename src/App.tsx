
import { Routes , Route   } from 'react-router-dom'
import Aurel from './Aurel/Aurel'
import Home from './Home'

function App() {
  

  return (  
    <div>

      <Routes>
        <Route path="/aurel" element={ <Aurel/>} />        
        <Route path="/the other one" element={<p className="text-red-500">other one </p>} />        
        <Route path="/" element={<Home />} />        
</Routes>


    </div>

  )
}

export default App
