import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

class Loading extends React.Component {
  render() {
    const { color } = this.props;

    const onvertClass = classNames({
      'onvert-loading': true,
    });

    return (
      <div className={onvertClass} style={{color}}>
        <div className="l">L</div>
        <div className="circle" />
        <div className="square" />
        <div className="triangle" />
        <div className="a">A</div>
        <div className="d">D</div>
        <div className="i">I</div>
        <div className="n">N</div>
        <div className="g">G</div>
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
