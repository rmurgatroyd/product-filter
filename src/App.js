import React, {Component} from 'react';
import Checkboxes from './components/Checkboxes';
import Products from './components/Products';
import Title from './components/Title'


const checkboxes = [
  { "size" : ["Small", "Regular", "Large"]},
  {"pattern": ["More patterned", "More plain", "Half and half"]}
]

const data = [
    {
        "price": 19,
        "currency": "GBP",
        "productImage": "https://www.happysocks.com/media/catalog/category/FW19-Women_s-Socks.jpg",
        "socks": [
            {
                "size": "regular",
                "pattern": "none",
                "amount": 8
            },
            {
                "size": "regular",
                "pattern": "patterned",
                "amount": 4
            }
        ]
    },
    {
        "price": 18,
        "currency": "GBP",
        "productImage": "https://www.happysocks.com/media/catalog/category/FW19-Women_s-Socks.jpg",
        "socks": [
            {
                "size": "regular",
                "pattern": "none",
                "amount": 10
            },
            {
                "size": "regular",
                "pattern": "patterned",
                "amount": 2
            }
        ]
    },
    {
        "price": 19,
        "currency": "GBP",
        "productImage": "https://www.happysocks.com/media/catalog/category/FW19-Women_s-Socks.jpg",
        "socks": [
            {
                "size": "regular",
                "pattern": "none",
                "amount": 6
            },
            {
                "size": "regular",
                "pattern": "patterned",
                "amount": 6
            }
        ]
    },
    {
        "price": 18,
        "currency": "GBP",
        "productImage": "https://www.happysocks.com/media/catalog/category/FW19-Women_s-Socks.jpg",
        "socks": [
            {
                "size": "small",
                "pattern": "none",
                "amount": 6
            },
            {
                "size": "small",
                "pattern": "patterned",
                "amount": 6
            }
        ]
    },
    {
        "price": 17,
        "currency": "GBP",
        "productImage": "https://www.happysocks.com/media/catalog/category/FW19-Women_s-Socks.jpg",
        "socks": [
            {
                "size": "small",
                "pattern": "none",
                "amount": 8
            },
            {
                "size": "small",
                "pattern": "patterned",
                "amount": 4
            }
        ]
    },
    {
        "price": 17,
        "currency": "GBP",
        "productImage": "https://www.happysocks.com/media/catalog/category/FW19-Women_s-Socks.jpg",
        "socks": [
            {
                "size": "large",
                "pattern": "none",
                "amount": 10
            },
            {
                "size": "large",
                "pattern": "patterned",
                "amount": 2
            }
        ]
    }
]

class App extends Component {
  constructor(props){
    super(props)

  this.state = {
    data : data,
    checkboxes: checkboxes,
    passingTags: {
      "size": {
        "small": false,
        "regular": false,
        "large": false,
      },
      pattern: {
        "more-patterned": false,
        "more-plain": false,
        "half-and-half": false,
      }
    }
  };
}


patternedCheck = pack => {
  const none = pack.socks.find(s => s.pattern === "none");
  const patterned = pack.socks.find(s => s.pattern === "patterned");
  if (patterned.amount > none.amount) {
    return("more-patterned")}  else if (patterned.amount < none.amount) {
      return("more-plain")} else {
        return("half-and-half")
      }
    }


filteredCollected = () => {
  const collectedTrueKeys = {
    size: [],
    pattern: []
  };
  const { size, pattern } = this.state.passingTags;
  for (let sizeKey in size) {
    if (size[sizeKey]) collectedTrueKeys.size.push(sizeKey);
  }
  for (let patternKey in pattern) {
    if (pattern[patternKey]) collectedTrueKeys.pattern.push(patternKey);
  }
  return collectedTrueKeys;
};


multiPropsFilter = (filters) => {
  const products=this.state.data;
    const filterKeys = Object.keys(filters);
    return products.filter(product => {
      return filterKeys.every(key => {
        if (!filters[key].length) return true;
        if (key === "pattern"){
        return filters[key].includes(this.patternedCheck(product))};
        return product.socks.every( sock => {
            return filters[key].includes(sock[key]);
        }
        )
      });
    });
  };


searchProducts = () => {
  const filteredProducts = this.multiPropsFilter(
    this.filteredCollected()
  );
  return filteredProducts;
};


allFilterClickListener = (e, filterProp) => {
  const name = e.target.name.replace(/\s+/g, '-').toLowerCase();
  this.setState(prevState => ({
    passingTags: {
      ...prevState.passingTags,
      [filterProp]: {
        ...prevState.passingTags[filterProp],
        [name]: !prevState.passingTags[filterProp][name]
      }
    }
  }));
};



render(){

  return(
    <div>
      <Title title="Socks w/ Shoes" subtitle="Socks" />
      <Checkboxes checkboxes={checkboxes} allFilterClickListener={this.allFilterClickListener} />
      <Products description={this.description} searchProducts={this.searchProducts}/>
    </div>
  )
}
}

export default App
