import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

class Loading extends React.Component {
  render() {
    const { size, color, innerColor } = this.props;

    const circleClass = classNames({
      'circle-loading': true,
    });

    return (
      <div className={circleClass}>
        <div className="before" style={{borderColor: color[0]}} /> 
        <div className="after" style={{borderColor: color[1]}}/> 
      </div>
    )
  }
};

Loading.propTypes = {
  color: PropTypes.array,
};

Loading.defaultProps = {
  color: ['#1890ff', '#000'],
};

export default Loading;
