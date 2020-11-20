import React from 'react';
import { Header, Footer } from './components';
import { Home, Cart, About } from "./pages";
import { useSelector } from 'react-redux';

import ButtonCart from './components/Button';
import { StickyContainer, Sticky } from 'react-sticky';
import { Route, Link } from 'react-router-dom';
// npx json-server --port=3001 --watch public/db.json
function App() {

  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);


  return (
    <div className="wrapper">
    <Header />
    <StickyContainer>

    <Route path="/" component={Home} exact />
    <Route path="/cart" component={Cart} exact />
    <Route path="/about" component={About} exact />
    
    </StickyContainer>
    <Footer />

    </div>
  )
}


export default App;
