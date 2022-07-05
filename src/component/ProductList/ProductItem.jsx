import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="card">
                    <img className="card-img-top" src={this.props.item.image} alt />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.item.name}</h4>
                        <p className="card-text">${this.props.item.price}</p>
                        <button data-toggle="modal" data-target="#modelId" onClick={() => {
                            this.props.setStateModal(this.props.item)
                        }} className="btn btn-dark">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        )
    }
}
