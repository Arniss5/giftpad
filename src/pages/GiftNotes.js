import React, { useState } from 'react';
import './GiftNotes.scss';

const GiftNotes = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isInactive, setIsInactive] = useState(false);

  const handleExpanderClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
      setIsInactive(false);
    } else {
      setIsExpanded(true);
      setIsInactive(true);
    }
  };

  return (
    <div className="wrapper">
      <div className="header">
        <h1 className="header__title">Expanding Card Grid</h1>
        <h2 className="header__subtitle">with Flexbox</h2>
      </div>

      <div className="cards">
        <div className={`card ${isExpanded ? 'is-expanded' : 'is-collapsed'} ${isInactive ? 'is-inactive' : ''}`}>
          <div className="card__inner js-expander" onClick={handleExpanderClick}>
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close js-collapser"></i>
            Expander
          </div>
        </div>

        <div className={`card ${isExpanded ? 'is-expanded' : 'is-collapsed'} ${isInactive ? 'is-inactive' : ''}`}>
          <div className="card__inner js-expander" onClick={handleExpanderClick}>
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close js-collapser"></i>
            Expander
          </div>
        </div>

        <div className={`card ${isExpanded ? 'is-expanded' : 'is-collapsed'} ${isInactive ? 'is-inactive' : ''}`}>
          <div className="card__inner js-expander" onClick={handleExpanderClick}>
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close js-collapser"></i>
            Expander
          </div>
        </div>

        <div className={`card ${isExpanded ? 'is-expanded' : 'is-collapsed'} ${isInactive ? 'is-inactive' : ''}`}>
          <div className="card__inner js-expander" onClick={handleExpanderClick}>
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close js-collapser" onClick={handleExpanderClick}></i>
Expander
</div>
</div>
</div>
</div>
);
};

export default GiftNotes;