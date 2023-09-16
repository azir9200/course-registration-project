
import './App.css'
import Course from './Components/Course'
import Shoppingcart from './Components/Shoppingcart'
import Subject from './Components/Subject';


function App() {
  const [shoppingcart, setShoppingcart] = ([]);
  const handleAddShoppingcart = subject => {
    const newShopingcart = [...shoppingcart, subject];
    setShoppingcart(newShopingcart);
  }


  return (
    <>

      <h1 className="text text-center text-2xl font-bold ">Course Registration</h1>
      <div className="flex" >
        <div className="md:flex " >
          <Course handleAddShoppingcart={handleAddShoppingcart} ></Course>
        </div>
        <div>
          <Shoppingcart shoppingcart={shoppingcart}  ></Shoppingcart>
        </div>
      </div>
    </>
  )
}

export default App
