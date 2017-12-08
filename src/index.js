import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';
import Double from './double';
import Onvert from './onvert';
import Diamond from './diamond';
import Gooey from './gooey';

const createLoading = WrappedComponent => {
  return class extends Component {
    
    static propTypes = {
      loading: PropTypes.bool,
      blur: PropTypes.bool,
      children: PropTypes.node,
    }

    static defaultProps = {
      loading: true,
      blur: true,
    }

    render() {
      const { className, loading, blur, children, ...other } = this.props; 
      
      const contentClass = classNames({
        'bastion-loading-content': true,
        'bastion-loading-blur': blur,
      });

      // const loadingClass = classNames({
      //   'bastion-loading-spinning': true,
      // });
      
      return (
        <div className="bastion-loading">
          <div className={contentClass}>
            {children}
          </div>
          {loading && <div><WrappedComponent {...other} /></div>}
        </div>
      )
    }
  }
}

export const DoubleLoading = createLoading(Double);
export const OnvertLoading = createLoading(Onvert);
export const DiamondLoading = createLoading(Diamond);
export const GooeyLoading = createLoading(Gooey);
