import React from 'react'
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import './ListIcon.css';

const ListIcon = props => {

  const { listIcons, handleClick } = props;

  return (
    <div className="listIcons">
    {
      listIcons.length > 0 && listIcons.map((classIcon, i) => (
        <Icon classIcon={classIcon} key={i} handleClick={handleClick}/>
      ))
    }
    </div>
  )
}

ListIcon.propTypes = {
  listIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func
}

export default ListIcon
