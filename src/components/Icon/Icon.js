import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';


const Icon = props => {

  const { classIcon, handleClick } = props;

  return (
    <div className="icon_wrapper" onClick={() => handleClick(classIcon)}>
      <div>
        <div className="icon">
          <span className={classIcon}></span>
        </div>
        <pre title="Copy to clipboard"><code>&lt;i class="{classIcon}"&gt;&lt;/i&gt; </code></pre>
      </div>
    </div>
  );
};


Icon.propTypes = {
  classIcon: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};


export default Icon;
