import axios from 'axios';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';

function App(props) {
  useEffect(() => {
    axios
      .get('http://localhost:3000/db.json')
      .then(({ data }) => props.setPizzas(data.pizzas));
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
          <Route path="/" render={() => <Home items={props.items} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { items: state.pizzas.items };
};
const mapDispatchToProps = {
  setPizzas,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
