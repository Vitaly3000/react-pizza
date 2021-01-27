import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/db.json')
      .then(({ data }) => setPizzas(data.pizzas));
    // fetch('http://localhost:3000/db.json').then((response) => {
    //   console.log(
    //     response.json().then((pizzas) => {
    //       setPizzas(pizzas.pizzas);
    //     }),
    //   );
    // });
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={pizzas} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    </div>
  );
}

export default App;
