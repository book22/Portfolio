import React from 'react';


class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickItem() {
    this.setState({isModalOpen: true});
  }

  handleClickClose() {
    this.setState({isModalOpen: false});
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
              <a href={this.props.id} className="modal-start-btn" id="start">START！</a>
              </div>
            <button
              className='modal-close-btn'
              onClick={() => this.handleClickClose()}
            >
              ×
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className='card'>
        <div
          className='item'
          onClick={() => {this.handleClickItem()}}
        >
          <p>{this.props.name}</p>
          <img src={this.props.image} />
        </div>
        {modal}
      </div>
    );
  }
}

export default Item;