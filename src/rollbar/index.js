import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

class Loading extends React.Component {
  render() {
    const { text } = this.props;

    const rollbarClass = classNames({
      'rollbar-loading': true,
    });

    return (
      <div className={rollbarClass} >
        <div className="rollbar">
          <div className="circle" />
          <p>{text}</p>
        </div>
      </div>
    )
  }
};

Loading.propTypes = {
  text: PropTypes.string
};

Loading.defaultProps = {
  text: 'Loading'
};

export default Loading;