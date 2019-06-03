import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddToCart } from 'react-snipcart'
import Swipeable from 'react-swipeable';

import './ProductDetails.scss';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: props.match.params.id,
      itemIndex: props.location.state ? props.location.state.itemIndex : false,
      idsTab: props.location.state ? props.location.state.idsTab : false,
    }

    this.swipLeft = this.swipLeft.bind(this);
    this.swipRight = this.swipRight.bind(this);
  }

  swipLeft() {
    if(this.state.itemIndex === (this.state.idsTab.length - 1)) {
      this.setState({
        ...this.state,
        itemIndex: 0,
        itemId: this.state.idsTab[0],
      });
    } else {
      const newItemIndex = this.state.itemIndex + 1;
      this.setState({
        ...this.state,
        itemIndex: newItemIndex,
        itemId: this.state.idsTab[newItemIndex],
      });
    }
  }

  swipRight() {
    if(this.state.itemIndex === 0) {
      this.setState({
        ...this.state,
        itemIndex: this.state.idsTab.length - 1,
        itemId: this.state.idsTab[this.state.idsTab.length - 1],
      });
    } else {
      const newItemIndex = this.state.itemIndex - 1;
      this.setState({
        ...this.state,
        itemIndex: newItemIndex,
        itemId: this.state.idsTab[newItemIndex],
      });
    }
  }

  render() {
    let product = {};

    if(this.props.products[this.state.itemId]) {
      product = { ...this.props.products[this.state.itemId] };
      product.desc = product.desc.split('\n').map(function(item, key) {
        return (
          <p key={key}>
            {item}
            <br/>
          </p>
        )
      });
    }

    return (

      <Swipeable className="ProductDetails"
        onSwipedLeft={() => (this.state.itemIndex !== false ? this.swipLeft() : "")}
        onSwipedRight={() => (this.state.itemIndex !== false ? this.swipRight() : "")}
      >
        <div className="section-one">
          <div className="pic-container">
            <img className="pic" src={product.pic ? require(`../../data${product.pic}`) : ""} alt={product.title} />
          </div>
          <div className="info-container">
            {product.state !== "false" ? <div className="state">{product.state}</div> : ""}
            <h5 className="author">{product.author}</h5>
            <h2 className="title">{product.title}</h2>
            <h3 className="subtitle">{product.subtitle}</h3>
            <h5 className="info">Year Published: {product.year}</h5>
            <h5 className="divider"> | </h5>
            <h5 className="info">Publisher: {product.publisher}</h5>
            <h5 className="divider"> | </h5>
            <h5 className="info">Pages: {product.pages}</h5>
            <h5 className="divider"> | </h5>
            <h5 className="info">Binding: {product.cover}</h5>
            <h3 className="price">${product.price ? (product.price) : 0}</h3>
            <AddToCart data={{
		id: 'ABC123',
		name: 'Test Product',
		url: '/test-product',
		price: '499.99',
		openCart: true,
	}}>
	Add to Cart
</AddToCart>
          </div>
        </div>
        <div className="section-two">
          <div className="description">
            <div className="desc">{product.desc}</div>
          </div>
        </div>
      </Swipeable>
    );
  }
}




export default(ProductDetails);
