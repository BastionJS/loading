import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

class Loading extends React.Component {
  render() {
    const { text } = this.props;

    const thingClass = classNames({
      'ting-loading': true,
    });

    return (
      <div className={thingClass} >
        <div className="beam r1 r"></div>
        <div className="beam r3 r"></div>
        <div className="beam b1 b"></div>
        <div className="beam b3 b"></div>
      </div>
    )
  }
};

Loading.propTypes = {
  text: PropTypes.string
};

Loading.defaultProps = {
  text: 'loading...'
};

export default Loading;