import React from 'react';
import ListContainer from './ListContainer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Header from './Header';
import todoData from './todoData';
import uuid from 'uuid';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      list: todoData,
      filtered: [],
      filter: '',
      completedFilter: 'all',
      completedFilterActive: false
    };
  }

  checkItem = id => {
    const list = this.state.list.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({ list });
  };

  removeItem = id => {
    let list = this.state.list.filter(item => id !== item.id);
    this.setState({
      list
    });
  };

  filterItems = val => {
    this.setState({
      filter: val
    });
  };

  handleAddItem = content => {
    let list = [
      ...this.state.list,
      {
        id: uuid.v4(),
        text: content,
        completed: false
      }
    ];

    this.setState({
      list
    });
  };

  filterByCompleted = filter => {
    this.setState({
      completedFilter: filter,
      completedFilterActive: filter === 'all' ? false : true
    });
  };

  render() {
    const data = this.state.completedFilterActive
      ? this.state.list.filter(
          item => item.completed === this.state.completedFilter
        )
      : this.state.list;

    const filteredByContent = data.filter(item =>
      item.text.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <React.Fragment>
        <Header setFilter={this.filterByCompleted} />
        <AddItem handleSubmit={this.handleAddItem} />
        <SearchItem handleSearchItem={this.filterItems} />
        <ListContainer
          list={filteredByContent}
          checkItem={this.checkItem}
          removeItem={this.removeItem}
        />
      </React.Fragment>
    );
  }
}

export default Main;
