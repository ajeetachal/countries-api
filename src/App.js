import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Countries from './component/Countries';
import Filter from './component/Filter';
import Head from './component/Head';
import Country from './component/Country'

function App() {
  return (
     <Router>
    <Head />       
    <Routes>
    <Route path='/' element={ <Countries />} />  
    <Route path='/countries/:name' element={<Country />}></Route>      
    </Routes>   
           
    </Router>
  )
}

export default App;