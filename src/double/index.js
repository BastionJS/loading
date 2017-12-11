import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

class Loading extends React.Component {
  render() {
    const { value, size, color } = this.props;

    const doubleClass = classNames({
      'double-loading': true,
      'double-loading-sm': size === 'small',
      'double-loading-lg': size === 'large',
    });

    return (
      <div className={doubleClass} style={{color}}>
        <span>{value[0]}</span>
        <span>{value[1]}</span>
      </div>
    )
  }
};

Loading.propTypes = {
  value: PropTypes.array,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  color: PropTypes.string
};

Loading.defaultProps = {
  value: ["{", "}"],
  size: 'default',
  color: '#1890ff'
};

export default Loading;
