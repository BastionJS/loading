import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

class Loading extends React.Component {
  render() {
    const { size, color, innerColor } = this.props;

    const cupcakeClass = classNames({
      'cupcake-loading': true,
      'cupcake-loading-sm': size === 'small',
      'cupcake-loading-lg': size === 'large',
    });

    return (
      <div className={cupcakeClass} style={{color}}>
        <span className="letter">L</span>
        <div className="cupcakeCircle" style={{backgroundColor: color}}>
          <div className="cupcakeInner" style={{backgroundColor: innerColor}}>
            <div className="cupcakeCore" style={{backgroundColor: color}}/>
          </div>
        </div>
        <span className="letter">A</span>
        <span className="letter">D</span>
        <span className="letter">I</span>
        <span className="letter">N</span>
        <span className="letter">G</span>
      </div>
    )
  }
};

Loading.propTypes = {
  color: PropTypes.string,
  innerColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'large']),
};

Loading.defaultProps = {
  color: '#1890ff',
  innerColor: '#ffd454',
  size: 'default',
};

export default Loading;
