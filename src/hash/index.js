import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

class Loading extends React.Component {
  render() {
    const { size } = this.props;

    const hashClass = classNames({
      'hash-loading': true,
      'hash-loading-sm': size === 'small',
      'hash-loading-lg': size === 'large',
    });

    return <div className={hashClass} />
  }
};

Loading.propTypes = {
  size: PropTypes.oneOf(['small', 'default', 'large']),
};

Loading.defaultProps = {
  size: 'default'
};

export default Loading;
