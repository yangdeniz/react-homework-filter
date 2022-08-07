import './toolbar.css';
import React from 'react';
import PropTypes from 'prop-types';

function Toolbar(props) {
  const { filters, selected } = props;
  return (
    <div className='portfolio__toolbar'>{filters.map(filter => {
      const classes = ['portfolio__btn'];
      if (filter === selected) {
        classes.push('portfolio__btn--selected');
      }
      return <button onClick={() => props.onFilterSelected(filter)} className={classes.join(' ')} key={filter}>{filter}</button>
    })}</div>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onFilterSelected: PropTypes.func.isRequired
}

export default Toolbar;