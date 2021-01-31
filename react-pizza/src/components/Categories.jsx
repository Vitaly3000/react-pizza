import React, { memo } from 'react';
import PropTypes from 'prop-types';
const Categories = memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickCategory(null)}
          className={activeCategory === null ? 'active' : ''}>
          Все
        </li>
        {items &&
          items.map((name, index) => {
            return (
              <li
                onClick={() => onClickCategory(index)}
                className={activeCategory === index ? 'active' : ''}
                key={`${name}_${index}`}>
                {name}
              </li>
            );
          })}
      </ul>
    </div>
  );
});
Categories.propTypes = {
  //activeCategory: PropTypes.oneOf([PropTypes.number(), null]),
  items: PropTypes.arrayOf(PropTypes.string),
  onSelectCategory: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};
export default Categories;
