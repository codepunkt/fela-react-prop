# fela-react-prop
[![npm version](https://badge.fury.io/js/fela-react-prop.svg)](https://badge.fury.io/js/fela-react-prop) [![Build Status](https://travis-ci.org/codepunkt/fela-react-prop.svg?branch=master)](https://travis-ci.org/codepunkt/fela-react-prop) [![Coverage Status](https://coveralls.io/repos/github/codepunkt/fela-react-prop/badge.svg?branch=master)](https://coveralls.io/github/codepunkt/fela-react-prop?branch=master)

A HOC allowing you to specify which property to bind [`fela`](https://github.com/rofrischmann/fela) generated class names against (i.e. something other than `className`).

## Installation
```bash
yarn add fela-react-prop
```

## Usage
```javascript
import React from 'react'
import { addPropertyStyles } from 'fela-react-prop'

// apply the style classes generated for a style rule to the "propName"
// property of the wrapped component (WrappedComponent).
const StyledLink = addPropertyStyles('propName', props => ({
  display: 'block',
}), WrappedComponent)
```
## Use Cases

### react-router `Link`

Set default and active styles of `Link` component from [`react-router`](https://github.com/ReactTraining/react-router).

```javascript
import { NavLink } from 'react-router-dom'
import { addPropertyStyles } from 'fela-react-prop'

// apply the style classes generated for a style rule to the "activeClassName"
// property of the wrapped component (NavLink).
const StyledLink = addPropertyStyles('activeClassName', () => ({
  color: '#bada55',
}), NavLink)`
```

### react-sticky `Sticky`

Set default and sticky styles of `Sticky` component from [`react-sticky`](https://github.com/captivationsoftware/react-sticky).

```javascript
import { Sticky } from 'react-sticky'
import { addPropertyStyles } from 'fela-react-prop'

// apply the style classes generated for a style rule to the "stickyClassName"
// property of the wrapped component (Sticky).
const StyledLink = addPropertyStyles('stickyClassName', () => ({
  marginTop: '16px',
}), Sticky)`
```
