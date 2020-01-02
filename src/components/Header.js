import React from 'react';
import './styles/Header.css';

const HeaderOption = props => {
  let active = props.active ? ' activeOption' : '';
  return (
    <div className={'header_option' + active} onClick={props.onClick}>
      {props.name}
    </div>
  );
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home'
    };

    this.options = [
      {
        name: 'Home',
        filter: 'all'
      },
      {
        name: 'Completed',
        filter: true
      },
      {
        name: 'Remaining',
        filter: false
      }
    ];
  }

  setOption = item => {
    this.setState({ active: item.name });
    this.props.setFilter(item.filter);
  };

  render() {
    return (
      <header>
        <div className='container clearfix'>
          <div className='header_title'>Todo List</div>
          <div className='header_option_wrapper'>
            {this.options.map(item => (
              <HeaderOption
                name={item.name}
                onClick={() => this.setOption(item)}
                key={item.name}
                active={item.name === this.state.active}
              />
            ))}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
