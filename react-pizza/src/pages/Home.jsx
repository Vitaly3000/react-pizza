import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { setCategory } from '../redux/actions/filters';
const cotegoryNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];
const sortName = [
  { name: 'популярности', type: 'popular' },

  { name: 'цене', type: 'price' },

  { name: 'алфавиту', type: 'alphabet' },
];
function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const dispatch = useDispatch();
  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  
  return (
    <div className="container">
      <div className="content__top">
        <Categories onSelectCategory={onSelectCategory} items={cotegoryNames} />
        <SortPopup items={sortName} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items &&
          items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
}

export default Home;
