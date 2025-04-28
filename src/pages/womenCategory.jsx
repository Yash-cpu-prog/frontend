import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/Shopcontext';
import dropdown_icon from '../Components/Asset/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { womens_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="women category banner" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {womens_product.length} products
        </p>
        {/* <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown icon" />
        </div> */}
      </div>

      <div className="shopcategory-products">
        {womens_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
