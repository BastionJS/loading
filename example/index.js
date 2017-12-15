import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.less';
import { DoubleLoading,
         OnvertLoading,
         DiamondLoading,
         CupcakeLoading,
         BorderLoading,
         GooeyLoading,
         CircleLoading,
         BlockLoading,
         HashLoading,
         ManLoading,
         ThingLoading,
         SquircleLoading,
         RollbarLoading } from '../src';

render(
  <div className="lanif-loading">
    <DoubleLoading />
    <OnvertLoading />
    <DiamondLoading />
    <CupcakeLoading />
    <BorderLoading />
    <GooeyLoading />
    <CircleLoading />
    <BlockLoading />
    <HashLoading size="large" />
    <ManLoading />
    <ThingLoading />
    <SquircleLoading />
    <RollbarLoading />
  </div>, document.querySelector('#app'));