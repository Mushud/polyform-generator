import React from 'react'
import styles from './styles.module.css'

export function Polyform({ form, onComplete, current }) {
  const [currentPosition, setCurrentPosition] = React.useState(
    current == -5 ? -1 : current
  )

  React.useEffect(() => {
    setCurrentPosition(current == -5 ? -1 : current)
  }, [current])

  const [submitButton, setSubmitButton] = React.useState(false)
  const [answers, setAnswers] = React.useState([])
  const [currentAnswer, setCurrentAnswer] = React.useState('')
  const [currentMultipleChoice, setCurrentMultipleChoice] = React.useState([])
  const { questions, selections } = form

  function getSelectionsFormSelector(index) {
    const mSelect = selections.findIndex(
      (element) => element.questionIndex === index
    )

    return selections[mSelect].selections.map((choice, n = index) => (
      <div
        onClick={() => {
          if (!currentMultipleChoice.includes(choice)) {
            currentMultipleChoice.pop()
            //  currentMultipleChoice.push(choice)
            setCurrentMultipleChoice([...currentMultipleChoice, choice])
            console.log(currentMultipleChoice)
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
          backgroundColor:
            currentMultipleChoice[0] == choice
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
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
        </style>

        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
        </style>
      </style>

      {currentPosition == -1 ? (
        <div>
          <p style={{ color: 'grey', fontFamily: 'Karla' }}>
            {form.properties.mda}
          </p>
          <h1 style={{ fontFamily: 'Karla', margin: 0 }}>
            {form.container.title}
          </h1>
          <p style={{ fontFamily: 'Karla', marginTop: '10px' }}>
            {form.container.about}
          </p>

          <center>
            <button
              onClick={() => setCurrentPosition(0)}
              className={styles.button}
              style={{
                marginTop: '20px',
                borderStyle: 'none',
                color: 'white',
                fontFamily: 'Karla',
                backgroundColor: form.container.tintColor,
                fontSize: '14pt'
              }}
            >
              Start
            </button>
          </center>
        </div>
      ) : currentPosition == -2 ? (
        <div>
          <h1 style={{ fontFamily: 'Karla', marginBottom: '10px' }}>
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
          <p style={{ fontFamily: 'Karla' }}>Powered by Polymorph Labs</p>
        </div>
      ) : (
        <div style={{ textAlign: 'left' }}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              fontFamily: 'Karla',
              margin: 0
            }}
          >
            {currentPosition + 1}. {questions[currentPosition].question}
          </div>
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

          {submitButton ? (
            <div
              style={{
                marginTop: '10px',
                flexDirection: 'row',
                display: 'flex',
                alignItems: 'center',
                marginLeft: '15px'
              }}
            >
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
                OK
              </button>
              {submitButton &&
              questions[currentPosition].type !== 'multiple-choice' ? (
                <div
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
                  style={{
                    borderStyle: 'none',
                    fontSize: 14,
                    marginLeft: '10px'
                  }}
                >
                  {questions[currentPosition].type === 'long-text'
                    ? 'Press Ctrl + Return'
                    : 'Press Return '}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      )}

      {/* <div
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
              borderRadius: '4px',
              backgroundColor: form.container.tintColor,
              color: 'white',
              borderStyle: 'none'
            }}
          >
            <b>{'<'}</b>
          </button>
        ) : null}
      </div>
      <div
        style={{ position: 'absolute', bottom: 0, right: 0, margin: '20px' }}
      >
        Powered by <b>Polymorph Labs</b>
      </div> */}
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
  current: -5,

  onComplete: (e) => e
}
