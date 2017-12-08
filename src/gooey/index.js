import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

class Loading extends React.Component {
  render() {
    const { value, size, color } = this.props;

    const gooeyClass = classNames({
      'gooey-loading': true,
    });

    return (
      <div className={gooeyClass} style={{color}}>
        <div className="ball ball-1" />
        <div className="ball ball-2" />
        <div className="ball ball-3" />
      </div>
    )
  }
};

Loading.propTypes = {
  color: PropTypes.string
};

Loading.defaultProps = {
  color: '#1890ff'
};

export default Loading;
