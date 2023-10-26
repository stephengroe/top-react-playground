import PropTypes from 'prop-types';
import React from 'react';

function Greeting({start, end, style}) {
  return (
    <h2
      style={style}
      >{start} I&rsquo;m learning React{end}
    </h2>
  )
}

Greeting.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  style:  PropTypes.object,
}

Greeting.defaultProps = {
  start: "Hi!",
  end: "... and loving it!",
  style:  {color: 'blue', fontSize: '2em'},
}

export default Greeting;