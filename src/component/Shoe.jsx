import React, { Component } from 'react'
import ProductList from './ProductList/ProductList'
import products from '../data/data.json'
import WrapperModal from './WrapperModal/WrapperModal'

export default class shoe extends Component {
    state = {
        productDetail: {}
    }

    setStateModal = (item) => {
        this.setState({productDetail:item});
    }

    render() {
        return (
            <div className='container'>
                <ProductList productsData={products} setStateModal={this.setStateModal}></ProductList>
                <WrapperModal content = {this.state.productDetail}>
                    
                </WrapperModal>
            </div>
        )
    }
}
