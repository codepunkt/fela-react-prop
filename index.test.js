import React from 'react'
import { shallow } from 'enzyme'
import { createRenderer } from 'fela';
import { createComponent } from 'react-fela'

import { addPropertyStyles } from './index'

const renderer = createRenderer();
const StyledDiv = createComponent(() => ({ color: '#c0ff33' }), 'div')

describe('addPropertyStyles', () => {
  test('adds class names generated for style rule as property to wrapped component', () => {
    const propertyName = 'role'
    const StyledProp = addPropertyStyles(propertyName, () => ({ color: '#f00', fontSize: '18px' }), StyledDiv)
    const wrapper = shallow(<StyledProp />, { context: { renderer }})

    expect(wrapper.dive().prop(propertyName)).toEqual(wrapper.props().styles[propertyName])
  })
})
