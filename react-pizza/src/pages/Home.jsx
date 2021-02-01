import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, LoadingBlock } from '../components';
import { addPizzaToCart } from '../redux/actions/cart';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
const cotegoryNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];
const sortName = [
  { name: 'популярности', type: 'popular', order: 'desc' },

  { name: 'цене', type: 'price', order: 'desc' },

  { name: 'алфавиту', type: 'name', order: 'asc' },
];
function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const cartItems = useSelector(({ cart }) => cart.items);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  console.log(cartItems);
  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortBy = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);
  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={onSelectCategory}
          items={cotegoryNames}
          activeCategory={category}
        />
        <SortPopup
          onClickSortType={onSelectSortBy}
          activeSortType={sortBy.type}
          items={sortName}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((pizza) => (
              <PizzaBlock
                onAddPizzaToCart={(obj) => handleAddPizzaToCart(obj)}
                key={pizza.id}
                addedCount={cartItems[pizza.id] && cartItems[pizza.id].length}
                {...pizza}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
