
import './App.css'
import Course from './Components/Course'
import Shoppingcart from './Components/Shoppingcart'


function App() {


  return (
    <>

      <h1 className="text text-green-500">Course Registration</h1>

      <div className='md:flex text-red-600' >
        <Course></Course>
        <Shoppingcart></Shoppingcart>
      </div>
    </>
  )
}

export default App
