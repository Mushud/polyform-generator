# Polyform-generator

> Generate your beautify forms

[![NPM](https://img.shields.io/npm/v/polyform-generator.svg)](https://www.npmjs.com/package/polyform-generator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save polyform-generator
```

## Usage

> You can generate a form object from
> [Polyform Builder](https://polyform.netlify.com)

> Copy your form object as pass it as prop and let Polyform do the magic

```jsx
import React, { Component } from 'react'

import { Polyform } from 'polyform-generator'
import 'polyform-generator/dist/index.css'

const formObject = {
  container: {
    backgroudColor: 'white',
    title: 'Registration form for GIS',
    about: 'Please fill the form',
    tintColor: '#0390fc'
  },
  questions: [
    {
      type: 'short-text',
      key: 94107,
      question: 'What is your name?'
    },
    {
      type: 'short-text',
      key: 21264,
      question: 'Where do you live?'
    },
    {
      type: 'phone-number',
      key: 20866,
      question: 'Enter your phone number'
    },
    {
      type: 'long-text',
      key: 82271,
      question: 'Describe your self'
    },
    {
      type: 'multiple-choice',
      key: 65759,
      question: 'What do you do at your free time?'
    }
  ],
  selections: [
    {
      questionIndex: 4,
      selections: ['Sleep', 'Watch Movies', 'Play game'],
      key: 44428
    }
  ]
}

function onComplete(e) {
  console.log(e)
}

class Example extends Component {
  render() {
    return <Polyform form={formObject} onComplete={onComplete} />
  }
}
```

#### Props

| Prop name     | Description                                                                         | Default value                                                                                                        | Example values |
| ------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------- |
| form          | An form object to generate the form                                                 | `{ container: { backgroundColor: 'white', title: 'Sample Form',about: 'A sample description',tintColor: '#0390fc'}}` |
| onComplete(e) | A callback function when form is completed, return an array of answers to questions | `(e) => onComplete(e)`                                                                                               | `[answers]`    |

## License

MIT © [Mushud](https://github.com/Mushud)

## Thank you
