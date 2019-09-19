import React, {Component} from 'react';

class Products extends Component{

  description = type => {
    if(type.pattern==="none"){
      return "plain"} else if(type.pattern==="patterned"){
        return "patterned"}
  }

  render(){
    const products = this.props.searchProducts().map((pack,index) =>{

    return(
    <div className="product"  key={index}>
      <img className = "product-image" src={pack.productImage} alt="tampon" />
      <p className="product-price">{pack.price} {pack.currency}</p>

      <div> <p className = "product-subtitle">contents:</p>
      {pack.socks.map((type,i) => {

      return (
        <div key={i}>
          <p> {type.amount} pairs x {type.size} {this.description(type)} socks</p>
        </div>
      )
    })} </div>
    </div>
    )})


    if (products.length>0){
      return(
        <div className="product-grid">{products}</div>
      )
    }
    else {
      return(
        <div className="apology">Sorry, it looks like the product you are looking for doesn't exist yet. Please try a different filter...</div>
      )
    }
  }
}

export default Products
