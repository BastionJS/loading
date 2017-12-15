import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

class Loading extends React.Component {
  render() {
    const { size, color, innerColor } = this.props;

    const blockClass = classNames({
      'block-loading': true,
    });

    return (
      <div className={blockClass}>
        <div className="before" /> 
        <div className="after" /> 
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
