import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

class Loading extends React.Component {
  render() {
    const { text } = this.props;

    const manClass = classNames({
      'man-loading': true,
    });

    return (
      <div className={manClass} >
        <div className="man">
          <div className="eye-l"></div>
          <div className="eye-r"></div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>
        <div className="wall">{text}</div>
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