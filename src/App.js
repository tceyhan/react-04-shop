
import React, {useEffect, useState} from "react";
import axios from 'axios';
import ProductItem from './components/Product/productItem';
import './App.css';

function App() {

  //     okuma     yazma
  const [products, setProducts] = useState([])
  
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then(({data})=>{
      console.log("nasılsın", data)
      setProducts(data)
    })
    // const {data} = await axios.get('https://fakestoreapi.com/products')
    // console.log("naber", data)
  }, [])
  return (
    <div className="App">

      {/* map başlangıcı */}
      {products.map((osman) =>
      <>
        <ProductItem
         key={osman.id}
         ahmet={osman}
        />
        </>
      )}

      {/* map bitişi */}

      {/* sepetteki ürünler bitişi */}

      {/*  */}
    </div>
  );
}
export default App;
