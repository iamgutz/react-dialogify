import React from 'react';
import PropTypes from 'prop-types';

const DefaultTemplate = ({
  title, text, ctaText, ctaOnClick,
}) => (
  <div>
    <div>
      {title}
    </div>
    <div>
      {text &&
        <div>
          <div>
            {text}
          </div>
        </div>
      }
      {ctaText && ctaOnClick &&
        <button onClick={ctaOnClick} type="button">
          {ctaText}
        </button>
      }
    </div>
  </div>
);

DefaultTemplate.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  ctaText: PropTypes.string,
  ctaOnClick: PropTypes.func,
};

DefaultTemplate.defaultProps = {
  title: null,
  text: null,
  ctaText: null,
  ctaOnClick: null,
};

export default DefaultTemplate;
