import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';
import Double from './double';
import Onvert from './onvert';
import Diamond from './diamond';
import Gooey from './gooey';
import Cupcake from './cupcake';
import Border from './border';
import Circle from './circle';
import Block from './block';
import Hash from './hash';
import Man from './man';
import Thing from './thing';
import Squircle from './squircle';
import Rollbar from './rollbar';

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
          {loading && <WrappedComponent {...other} />}
        </div>
      )
    }
  }
}

export const DoubleLoading = createLoading(Double);
export const OnvertLoading = createLoading(Onvert);
export const DiamondLoading = createLoading(Diamond);
export const GooeyLoading = createLoading(Gooey);
export const CupcakeLoading = createLoading(Cupcake);
export const BorderLoading = createLoading(Border);
export const CircleLoading = createLoading(Circle);
export const BlockLoading = createLoading(Block);
export const HashLoading = createLoading(Hash);
export const ManLoading = createLoading(Man);
export const ThingLoading = createLoading(Thing);
export const SquircleLoading = createLoading(Squircle);
export const RollbarLoading = createLoading(Rollbar);
