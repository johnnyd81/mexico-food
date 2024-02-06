//import the components needed to render on the screen
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import Product from './Components/Product';
import Profile from './Components/Profile';
import Menu from './Components/Menu';
//by importing the line below I can decide which components are visible to a user at a given time
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const loggedIn = true;
//the products array contains objects that has data about the different items on the food menu 
const products = [{id: "1", product_name: "Chicken Tacos", product_img: "https://cdn.wallpapersafari.com/57/62/dcHCIS.jpg", description: 
"Deliciously prepared chicken wrapped in our soft corn tacos. Each plate comes with four 4-inch tacos for R65.00" },
{id: "2", product_name: "Burritos", product_img: "https://th.bing.com/th/id/OIP.1U7lr9Ga76_baUE2jxHTXAHaFj?pid=ImgDet&rs=1", description: 
"Freshly baked flour tortillas filled with your choice of meat,stew or vegetables. Each plate comes with four burritos for R70.00" },
{id: "3", product_name: "Devilled Shrimp", product_img: "https://www.chefspencil.com/wp-content/uploads/Camarones-a-la-Diabla-960x960.jpg.webp", description: 
"This seafood dish is cooked with a combination of chilies, making it very spicy. Enjoy this delicacy for R85.00" }];


function App() { 
  return (
    //the BrowserRouter has to be the container of the entire app and can only have one child element 
    <BrowserRouter>
      <div className="App">
        {/*the menu and the header components are not in the Routes tag therefore they are always visible*/}
        <Menu />
        <Header name="User" loggedIn={loggedIn} />
        <Routes>
          {/*the path for the landing page is in the root and the url must be exactly what is specified*/}
          <Route exact={true} path="/" element={<LandingPage /> } />
          <Route path="/shop" element={<Product products={products} />}/>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;
