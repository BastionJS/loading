import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

class Loading extends React.Component {
  render() {
    const { size, color, innerColor } = this.props;

    const borderClass = classNames({
      'border-loading': true,
      'border-loading-sm': size === 'small',
      'border-loading-lg': size === 'large',
    });

    return (
      <div className={borderClass} style={{color}}>
        <div>
          <div>Loading...</div>
          <div className="top" style={{backgroundColor: color}} />
          <div className="bottom" style={{backgroundColor: color}} />
        </div>
      </div>
    )
  }
};

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'large']),
};

Loading.defaultProps = {
  color: '#1890ff',
  size: 'default',
};

export default Loading;
