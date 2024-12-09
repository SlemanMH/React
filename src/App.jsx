import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

function App() {
  const [counter, setCount] = useState(0);

  const product = { name: 'iPhone 14', price: '$1200', description: 'A premium smartphone with advanced features.' };

  const increase = () => {
    setCount(counter + 1);
  }

  const showProduct = () => {
    document.querySelector('.product').classList.toggle('d-none');
  }

  return (
   <>
      <h1>Counter: {counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={showProduct}>Show Product</button>
      <div className='product d-none'>
        <h2>Prouduct Details</h2>
        
        <div className='d-flex align-items-center gap-1'>
        <h3>Name:</h3>
        <span>{product.name}</span>
        </div>

        <div className='d-flex align-items-center gap-1'>
          <h3>Price:</h3>
          <span>{product.price}</span>
        </div>
       
        <div className='d-flex align-items-center gap-1'>
          <h3>Description:</h3>
          <span>{product.description}</span>
       </div>
       
      </div>
    </>
  )
}

export default App

