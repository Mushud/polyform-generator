import React from 'react'

import { Polyform } from 'polyform-generator'
import 'polyform-generator/dist/index.css'

const formObject = {
  properties: {
    mda: 'Ghana Passport'
  },
  container: {
    backgroudColor: 'blue',
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

const App = () => {
  return <Polyform onComplete={onComplete} form={formObject} />
}

export default App
