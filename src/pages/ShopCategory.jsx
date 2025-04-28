import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/Shopcontext';
import dropdown_icon from '../Components/Asset/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product, mens_product, womens_product, kids_product } = useContext(ShopContext);

  const getProductList = () => {
    switch (props.category) {
      case 'mens':
        return mens_product;
      case 'womens':
        return womens_product;
      case 'kids':
        return kids_product;
      default:
        return all_product;
    }
  };

  const productList = getProductList();

  return (
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
      </div>

      <div className="shopcategory-products">
        {
          productList.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        }
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;



















