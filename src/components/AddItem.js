import React, { Component } from 'react';
import './styles/AddItem.css';
class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    if (e.keyCode === 13 && this.state.content.length > 0) {
      this.props.handleSubmit(this.state.content);
      this.setState({ content: '' });
    }
  };

  render() {
    return (
      <div className='container'>
        <div className='add_item'>
          <input
            type='text'
            name='item'
            value={this.state.content}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}
            placeholder='Add a task'
          />
        </div>
      </div>
    );
  }
}

export default AddItem;
