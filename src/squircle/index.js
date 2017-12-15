import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

class Loading extends React.Component {
  render() {
    const { color } = this.props;

    const squircleClass = classNames({
      'squircle-loading': true,
    });

    return (
      <div className={squircleClass} style={{color}}>
        <div className="outer"></div>
        <div className="inner"></div>
      </div>
    )
  }
};

Loading.propTypes = {
  color: PropTypes.string
};

Loading.defaultProps = {
  color: '#bcbcbc'
};

export default Loading;
