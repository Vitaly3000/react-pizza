import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get('http://localhost:3001/pizzas')
      .then(({ data }) => dispatch(setPizzas(data)));
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
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    </div>
  );
}
export default App;
// const mapStateToProps = (state) => {
//   return { items: state.pizzas.items };
// };
// const mapDispatchToProps = {
//   setPizzas,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
