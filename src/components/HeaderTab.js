import React from 'react';

const HeaderTab = props => {
  let active = props.active ? ' activeOption' : '';
  return (
    <div className={'header_option' + active} onClick={props.onClick}>
      {props.name}
    </div>
  );
};

export default HeaderTab;
