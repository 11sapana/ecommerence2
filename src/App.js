import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import ProductList from './component/ProductList';
import CartList from './component/CartList';
import { useState } from 'react';

function App() {


  const [product, setproduct] = useState([
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_B2KUdWQ0-GyPUXT7jJ2Efu29PQgoNT4gA&usqp=CAU',
      name: 'Ajanta Women Sandal BL1371',
      category: 'Women Sandal',
      seller: 'surat',
      price: 799

    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToP9l4Basp6CC9tLw2tZ8kyEM20ilZT2T5EmES7HZ6lz7lDp-RKBTbdUlc4zEsy8lGxUs&usqp=CAU',
      name: 'Loreum watch black',
      category: 'Watches',
      seller: 'Watch ltd siyana',
      price: 1500

    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGBmd7jF_fAHnM3NDTh1vely_Q39AOVvHNg&usqp=CAU',
      name: 'Amz laptop 8gb ram',
      category: 'laptopes',
      seller: 'Dehli laptop',
      price: 50000

    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSaVqunOlDf_9g0A1r81ziOLbF98QNDfYrZ181yBGqQfZoE_B5c5VouwmgNVNZ9sffQnc&usqp=CAU',
      name: 'corDEX ThoughPIX',
      category: 'cameras',
      seller: 'Mumbai camera',
      price: 20794
    },

    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6ypQM34IX_l3dcQQVGTzu4ha69iNSe19tQ&usqp=CAU',
      name: 'TITAN Ladies Watch',
      category: 'Watches',
      seller: 'Ahemadabad Watch',
      price: 1750
    },

    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjdOTvgFBvqWUeyrfUr28Oi0KJE9EMgQvwk6inpleoPWdu1M-bdbQF4b51Gw2FMdUvNHI&usqp=CAU',
      name: 'Water Glass Mugs',
      category: 'Glasses',
      seller: 'Delhi Glasses ',
      price: 790
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVb59Uo6W12_URGq1ismX3WpEXIBXbdPPXAA&usqp=CAU',
      name: 'shirt',
      category: 'Mens shirt',
      seller: 'Nagpur',
      price: 1000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiPwshRmD_TVd8gu2omk3k5yfwqK-kL82wBg&usqp=CAU',
      name: 'white sport Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 500

    },

    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8KX7jNCtWO_arPRE0dzW8qGa4SpbAC9Sq5g&usqp=CAU',
      name: 'Summerside bag',
      category: 'bags',
      seller: 'AMZ Seller',
      price: 3900

    },
  ])




  const [cart, setcart] = useState([])
  const [showCart, setshowCart] = useState(false)
  console.log(cart)
  const addToCart = (data) => {
    console.log(data)
    setcart([...cart, { ...data, quantity: 1 }])
  }
  const handleShow = (value) => {
    setshowCart(value)
  }


  return (
    <div className="App">

      <Header count={cart.length} handleShow={handleShow}></Header>
      {
        showCart ?
          <CartList cart={cart}></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }
      <CartList cart={cart}></CartList>
    </div>
  );
}

export default App;
