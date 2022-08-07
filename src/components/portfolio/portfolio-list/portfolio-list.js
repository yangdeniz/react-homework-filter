import './portfolio-list.css';
import React from 'react';
import PropTypes from 'prop-types';

function PortfolioList(props) {
  const { projects } = props;

  const sliced = [];
  for (let i = 0; i < 3; i++) {
    const alreadySliced = sliced.reduce((prev, cur) => prev + cur.length, 0);
    const length = Math.ceil((projects.length - alreadySliced) / (3 - sliced.length));
    sliced.push(projects.slice(alreadySliced, alreadySliced + length));
  }

  return (
    <div className='portfolio__list'>
      {sliced.map(items => (
        <div className='portfolio__column' key={sliced.indexOf(items)}>
          {items.map(item => (
            <div className='portfolio__item' key={items.indexOf(item)}>
              <img src={item.img} alt={item.category} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

PortfolioList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({ 
    img: PropTypes.string.isRequired, 
    category: PropTypes.string.isRequired 
  })).isRequired
};

export default PortfolioList;