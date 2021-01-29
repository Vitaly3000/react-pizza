import React, { memo, useState } from 'react';

const Categories = memo(function Categories({ items, onSelectCategory }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onSelectCategory(index);
  };
  console.log('rend cater');
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onSelectItem(null)}
          className={activeItem === null ? 'active' : ''}>
          Все
        </li>
        {items &&
          items.map((name, index) => {
            return (
              <li
                onClick={() => onSelectItem(index)}
                className={activeItem === index ? 'active' : ''}
                key={`${name}_${index}`}>
                {name}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default Categories;
