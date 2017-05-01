import React from 'react'
import { connect } from 'react-fela'

export const addPropertyStyles = (propName, rule, Component) =>
  connect(props =>
    renderer => ({
      [propName]: renderer.renderRule(rule, props),
    }))(({ styles, ...rest }) => (
      <Component {...rest} {...{ [propName]: styles[propName] }} />
  ))
