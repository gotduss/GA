/* Imports */
import { Component } from 'react';
import products from '../ProductData/ProductData';
import Product from '../Product/Product';
import ProductCategory from '../ProductCategory/ProductCategory';
import ProductSearch from '../ProductSearch/ProductSearch';
import ProductFilterPrice from '../ProductFilterPrice/ProductFilterPrice';
import './ProductList.css';

/* ProductList component */
class ProductList extends Component {
  state = {
    selectedCategory: 'All products',
    searchItem: '',
    sortOption: '',
    filteredProducts: products,
    sortedProducts: products,
  }

  handleCategoryClick = (category) => {
    if (category === 'All products') {
      this.setState({
        selectedCategory: 'All products',
        filteredProducts: products,
      });
    } else if (category === 'pants' || category === 'skirts') {
      const filteredProducts = products.filter(({ category }) => category === 'pants' || category === 'skirts');
      this.setState({
        selectedCategory: 'pants' || 'skirts',
        filteredProducts: filteredProducts,
      });
    } else {
      const filteredProducts = products.filter((product) => product.category === category);
      this.setState({
        selectedCategory: category,
        filteredProducts,
      });
    }
  }

  handleSearchChange = (e) => {
    const filteredProducts = products.filter(product => {
      if (e.target.value === '') return products;
      const productName = product.name.toLowerCase().includes(e.target.value.toLowerCase());
      const productDesc = product.description.toLowerCase().includes(e.target.value.toLowerCase());
      return productName || productDesc;
    });
    this.setState({
      searchItem: e.target.value,
      filteredProducts,
    });
  }

  handleSortChange = (e) => {
    const sortOption = e.target.value;
    let sortedProducts = this.state.sortedProducts;

    if (sortOption === 'lowToHigh') {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'highToLow') {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }

    this.setState({
      sortOption,
      sortedProducts,
    });
  }

  render() {
    let categories = products.map(product => product.category);
    categories = categories.filter((el, i) => categories.indexOf(el) === i);
    categories = ['All products', ...categories];

    return (
      <div className="App">
        <h1>Products</h1>
        <div className="product-filter">
          {categories.map((category, index) => <ProductCategory key={`${category}-${index}`} category={category} onClick={() => this.handleCategoryClick(category)} isSelected={category === this.state.selectedCategory} />)}
        </div>
        <div className="product-search">
          <ProductSearch value={this.searchItem} onChange={this.handleSearchChange} />
          <ProductFilterPrice onChange={this.handleSortChange} defaultValue={this.state.sortOption} />
        </div>
        <div className="product-list">
          {this.state.filteredProducts.map(product => <Product key={product.id} name={product.name} category={product.category} description={product.description} price={product.price} />)}
        </div>
      </div>
    )
  }
}

export default ProductList;
