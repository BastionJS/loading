import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

class Loading extends React.Component {
  render() {
    const { value, size, color } = this.props;

    const diamondClass = classNames({
      'diamond-loading': true,
    });

    const bgColor = {
      backgroundColor: color
    }

    return (
      <div className={diamondClass}>
        {
          ["top", "bottom", "left", "right"].map(item => (
            <div key={item} className={item}>
              <div className="square" style={bgColor}>
                <div className="square" style={bgColor} >
                  <div className="square" style={bgColor}>
                    <div className="square" style={bgColor}>
                      <div className="square" style={bgColor}>
                        <div className="square" style={bgColor} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
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
