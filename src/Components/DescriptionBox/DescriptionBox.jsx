import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          From trendy fashion to everyday essentials, explore a wide range of products at unbeatable prices. Smooth shopping, secure payments, and doorstep delivery — all just a click away!
        </p>
        <p>
          With user-friendly navigation, secure payment gateways, and fast shipping options, shopping has never been easier or more convenient. Whether you're hunting for the latest trends, everyday essentials, or exclusive deals, our platform ensures quality, reliability, and customer satisfaction with every purchase.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
