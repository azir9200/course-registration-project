
import './App.css'
import Course from './Components/Course'
import Shoppingcart from './Components/Shoppingcart'


function App() {


  return (
    <>

      <h1 className="text text-center">Course Registration</h1>

      <div className='md:flex ' >
        <Course></Course>
        <Shoppingcart></Shoppingcart>
      </div>
    </>
  )
}

export default App
