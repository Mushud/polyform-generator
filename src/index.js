import React from 'react'
import styles from './styles.module.css'

export function Polyform({ form, onComplete }) {
  const [currentPosition, setCurrentPosition] = React.useState(-1)
  const [submitButton, setSubmitButton] = React.useState(false)
  const [answers, setAnswers] = React.useState([])
  const [currentAnswer, setCurrentAnswer] = React.useState('')
  const [currentMultipleChoice, setCurrentMultipleChoice] = React.useState([])
  const { questions, selections } = form

  function getSelectionsFormSelector(index) {
    console.log(selections)
    const mSelect = selections.findIndex(
      (element) => element.questionIndex === index
    )

    return selections[mSelect].selections.map((choice, n = index) => (
      <div
        onClick={() => {
          if (!currentMultipleChoice.includes(choice)) {
            setCurrentMultipleChoice([...currentMultipleChoice, choice])
            setSubmitButton(true)
          } else {
            setCurrentMultipleChoice(
              currentMultipleChoice.filter((e) => e !== choice)
            )
            if (currentMultipleChoice.length == 0) {
              setSubmitButton(false)
            }
          }
        }}
        style={{
          backgroundColor: currentMultipleChoice.includes(choice)
            ? form.container.tintColor
            : 'white',
          color: currentMultipleChoice.includes(choice) ? 'white' : 'black',
          marginBottom: '10px',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: '#fafafa',
          padding: '10px'
        }}
      >
        {n + 1 + ' - '} {choice}
      </div>
    ))
  }

  return (
    <div className={[styles.container]}>
      <style>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,700;0,800;0,900;1,800&display=swap');
        </style>
      </style>

      {currentPosition == -1 ? (
        <div>
          <p style={{ color: 'grey' }}>
            <i>{form.properties.mda}</i>
          </p>
          <h1 style={{ fontFamily: 'Raleway', margin: 0 }}>
            {form.container.title}
          </h1>
          <p style={{ fontFamily: 'Raleway', marginTop: '5px' }}>
            {form.container.about}
          </p>
          <button
            onClick={() => setCurrentPosition(0)}
            className={styles.button}
            style={{
              marginTop: '20px',
              borderStyle: 'none',
              color: 'white',
              fontFamily: 'Raleway',
              backgroundColor: form.container.tintColor,
              fontSize: '14pt'
            }}
          >
            Get Started
          </button>
        </div>
      ) : currentPosition == -2 ? (
        <div>
          <h1 style={{ fontFamily: 'Raleway', marginBottom: '10px' }}>
            Thanks for completing this Form
          </h1>
          <button className={styles.button} onClick={() => onComplete(answers)}>
            Submit
          </button>
          <button
            style={{ marginLeft: '10px' }}
            className={styles.button}
            onClick={() => {
              setCurrentPosition(questions.length - 1)
              let currentAnswers = answers
              currentAnswers.pop()
              setAnswers(currentAnswers)
            }}
          >
            Go Back
          </button>
          <p style={{ fontFamily: 'Raleway' }}>Powered by Polymorph Labs</p>
        </div>
      ) : (
        <div>
          <p style={{ fontWeight: 'bold', color: form.container.tintColor }}>
            {currentPosition + 1}
          </p>
          <h1 style={{ fontFamily: 'Raleway', margin: 0 }}>
            {questions[currentPosition].question}
          </h1>
          {questions[currentPosition].type === 'short-text' ? (
            <input
              value={currentAnswer}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setAnswers([
                    ...answers,
                    { question: currentPosition, answer: e.target.value }
                  ])
                  setSubmitButton(false)
                  if (currentPosition != questions.length - 1) {
                    setCurrentPosition(currentPosition + 1)
                  } else setCurrentPosition(-2)
                  setCurrentAnswer('')
                }
              }}
              onChange={(e) => {
                setCurrentAnswer(e.target.value)
                if (currentAnswer !== '') {
                  setSubmitButton(true)
                }
              }}
              className={styles.input}
              placeholder='Enter your Answer here'
              style={{ color: form.container.tintColor }}
            />
          ) : questions[currentPosition].type === 'multiple-choice' ? (
            <div style={{ marginTop: '10px' }}>
              {getSelectionsFormSelector(currentPosition)}
            </div>
          ) : questions[currentPosition].type === 'long-text' ? (
            <textarea
              onKeyDown={(e) => {
                if (e.ctrlKey && e.key === 'Enter') {
                  setAnswers([
                    ...answers,
                    { question: currentPosition, answer: e.target.value }
                  ])
                  setSubmitButton(false)
                  if (currentPosition != questions.length - 1) {
                    setCurrentPosition(currentPosition + 1)
                  } else setCurrentPosition(-2)
                  setCurrentAnswer('')
                }
              }}
              onChange={(e) => {
                setCurrentAnswer(e.target.value)
                if (currentAnswer !== '') {
                  setSubmitButton(true)
                }
              }}
              style={{ minHeight: '100px', fontSize: '16pt' }}
              className={styles.input}
              placeholder='Enter your Answer here'
            />
          ) : questions[currentPosition].type === 'phone-number' ? (
            <input
              maxLength={10}
              type='tel'
              value={currentAnswer}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setAnswers([
                    ...answers,
                    { question: currentPosition, answer: currentAnswer }
                  ])
                  setSubmitButton(false)
                  if (currentPosition != questions.length - 1) {
                    setCurrentPosition(currentPosition + 1)
                  } else {
                    onComplete(answers)
                    setCurrentPosition(-2)
                  }
                  setCurrentAnswer('')
                }

                if (e.keyCode == 8) {
                  if (currentAnswer.length > 0) {
                    setCurrentAnswer(
                      currentAnswer.substring(0, currentAnswer.length - 1)
                    )
                  }
                }
                if (e.keyCode >= 48 && e.keyCode <= 57) {
                  setCurrentAnswer(currentAnswer + e.key)
                }
              }}
              onChange={(e) => {
                if (currentAnswer.length == 10) {
                  setSubmitButton(true)
                }
              }}
              className={styles.input}
              placeholder='Enter your Answer here'
              style={{ color: form.container.tintColor }}
            />
          ) : questions[currentPosition].type === 'email' ? (
            <input
              type='email'
              value={currentAnswer}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setAnswers([
                    ...answers,
                    { question: currentPosition, answer: e.target.value }
                  ])
                  setSubmitButton(false)
                  if (currentPosition != questions.length - 1) {
                    setCurrentPosition(currentPosition + 1)
                  } else setCurrentPosition(-2)
                  setCurrentAnswer('')
                }
              }}
              onChange={(e) => {
                setCurrentAnswer(e.target.value)
                if (currentAnswer !== '') {
                  setSubmitButton(true)
                }
              }}
              className={styles.input}
              placeholder='Enter your Answer here'
              style={{ color: form.container.tintColor }}
            />
          ) : null}

          {submitButton &&
          questions[currentPosition].type !== 'multiple-choice' ? (
            <button
              onClick={(e) => {
                setAnswers([
                  ...answers,
                  { question: currentPosition, answer: currentAnswer }
                ])
                setSubmitButton(false)
                if (currentPosition != questions.length - 1) {
                  setCurrentPosition(currentPosition + 1)
                } else {
                  //  onComplete(answers)
                  setCurrentPosition(-2)
                }

                setCurrentAnswer('')
              }}
              style={{ borderStyle: 'none' }}
            >
              {questions[currentPosition].type === 'long-text'
                ? 'Press Ctrl + Return'
                : 'Press Return '}
            </button>
          ) : null}
          {submitButton ? (
            <div style={{ marginTop: '10px' }}>
              <button
                onClick={(e) => {
                  if (questions[currentPosition].type !== 'multiple-choice') {
                    setAnswers([
                      ...answers,
                      { question: currentPosition, answer: currentAnswer }
                    ])
                    setSubmitButton(false)
                    setCurrentAnswer('')
                    if (currentPosition != questions.length - 1) {
                      setCurrentPosition(currentPosition + 1)
                    } else {
                      //  onComplete(answers)
                      setCurrentPosition(-2)
                    }
                  } else {
                    setAnswers([
                      ...answers,
                      {
                        question: currentPosition,
                        selections: currentMultipleChoice
                      }
                    ])
                    setSubmitButton(false)
                    setCurrentMultipleChoice([])
                    if (currentPosition != questions.length - 1) {
                      // alert('Heyy')
                      setCurrentPosition(currentPosition + 1)
                    } else {
                      // onComplete(answers)
                      setCurrentPosition(-2)
                    }
                  }

                  //  console.log(answers)
                }}
                className={styles.button}
              >
                Submit
              </button>
            </div>
          ) : null}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              marginBottom: '20px',
              marginLeft: '20px',
              left: 0
            }}
          >
            Answered <b>{currentPosition} </b>out of <b>{questions.length}</b>
            {currentPosition != 0 ? (
              <button
                onClick={() => {
                  setCurrentAnswer('')
                  setCurrentPosition(currentPosition - 1)
                  setSubmitButton(false)

                  let currentAnswers = answers
                  currentAnswers.pop()
                  setAnswers(currentAnswers)
                }}
                style={{
                  marginLeft: '10px',
                  padding: '5px',
                  backgroundColor: 'white',
                  borderColor: 'grey'
                }}
              >
                {'<'}
              </button>
            ) : null}
          </div>
        </div>
      )}

      <div
        style={{ position: 'absolute', bottom: 0, right: 0, margin: '20px' }}
      >
        Powered by <b>Polymorph Labs</b>
      </div>
    </div>
  )
}

Polyform.defaultProps = {
  form: {
    properties: {
      mda: 'Sample Mda'
    },
    container: {
      backgroudColor: 'blue',
      title: 'Sample Form',
      about: 'A sample description',
      tintColor: '#0390fc'
    },
    questions: [],
    selections: []
  },
  onComplete: (e) => e
}
