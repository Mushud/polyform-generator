import React from 'react'
import styles from './styles.module.css'
import './tailwind.css'

export function Polyform({ form, onComplete, current, preview }) {
  const [currentPosition, setCurrentPosition] = React.useState(
    current == -5 ? -1 : current
  )

  React.useEffect(() => {
    setCurrentPosition(current == -5 ? -1 : current)
  }, [current])

  const [submitButton, setSubmitButton] = React.useState(false)
  const [answers, setAnswers] = React.useState([])
  const [error, setError] = React.useState(null)
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
    <div className='relative bg-gray-100'>
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
        !preview ? (
          <div classname='lg:relative'>
            <div class='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left h-screen'>
              <div class='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
                <h2 class='text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl'>
                  {form.container.title}
                  <br class='xl:hidden'></br>
                  <span class='text-teal-600'>.</span>
                </h2>
                <p class='mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
                  {form.container.about}
                </p>
                <div class='mt-10 sm:flex sm:justify-center lg:justify-start'>
                  <div class='rounded-md shadow'>
                    <button
                      onClick={() => {
                        if (form.questions.length > 0) {
                          setCurrentPosition(0)
                        }
                      }}
                      class='w-full flex items-center justify-center px-8 py-1 border border-transparent text-base leading-6 font-medium  text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-2 md:text-lg md:px-10'
                    >
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
              <img
                class='absolute inset-0 w-full h-full object-cover'
                src='https://images.unsplash.com/photo-1594202304180-f25d9c992442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
                alt='Woman on her phone'
              ></img>
            </div>
          </div>
        ) : (
          <div
            className='lg-relative bg-cover bg-center'
            style={{
              backgroundImage:
                'url(' +
                'https://images.unsplash.com/photo-1594202304180-f25d9c992442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80' +
                ')'
            }}
          >
            <div class='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left h-screen'>
              <div class='text-center'>
                <h2 class='text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl'>
                  {form.container.title}
                  <br class='xl:hidden'></br>
                  <span class='text-teal-600'>.</span>
                </h2>
                <p class='mt-3 max-w-md mx-auto text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl'>
                  {form.container.about}
                </p>
                <div class='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
                  <div class=' shadow'>
                    <button
                      onClick={() => {
                        if (form.questions.length > 0) {
                          setCurrentPosition(0)
                        }
                      }}
                      class='w-full flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium  text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-8'
                    >
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class='relative w-full h-screen lg:absolute lg:inset-y-0  lg:h-full'>
              <img
                class='absolute inset-0 w-full h-full object-cover'
                src='https://images.unsplash.com/photo-1594202304180-f25d9c992442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
                alt='Woman on her phone'
              ></img>
            </div> */}
          </div>
        )
      ) : currentPosition == -2 ? (
        <div className='lg-relative'>
          <div class='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left h-screen'>
            <div class='text-center'>
              <h2 class='text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl'>
                Thanks for filling the Form
                <br class='xl:hidden'></br>
                <span class='text-teal-600'>.</span>
              </h2>
              <p class='mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
                {form.container.about}
              </p>
              <div class='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
                <div class='rounded-md shadow'>
                  <button
                    onClick={() => {
                      setCurrentPosition(questions.length - 1)
                      let currentAnswers = answers
                      currentAnswers.pop()
                      setAnswers(currentAnswers)
                    }}
                    class='w-full flex items-center justify-center px-8 py-1 border border-transparent text-base leading-6 font-medium mr-2 text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-2 md:text-lg md:px-8'
                  >
                    Go back
                  </button>
                </div>
                <div class='rounded-md shadow'>
                  <button
                    onClick={() => onComplete(answers)}
                    class='w-full flex items-center justify-center px-8 py-1 border border-transparent  text-base leading-6 font-medium  text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-2 md:text-lg md:px-8'
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div class='absolute w-full h-screen lg:absolute lg:inset-y-0  lg:h-full'>
              <img
                class='absolute inset-0 w-full h-full object-cover'
                src='https://images.unsplash.com/photo-1594202304180-f25d9c992442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
                alt='Woman on her phone'
              ></img>
            </div> */}
        </div>
      ) : (
        <div classname='lg:relative'>
          <div className='flex content-center flex-wrap pl-20 pr-12 bg-white h-screen'>
            <div className={'mt-1'}>
              <span
                style={{ fontSize: '1rem' }}
                className={'text-blue-600 flex flex-row items-center'}
              >
                {currentPosition + 1}
                <svg
                  width={15}
                  height={15}
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-arrow-right mx-1'
                >
                  <path d='M5 12L19 12' />
                  <path d='M12 5L19 12 12 19' />
                </svg>
              </span>
            </div>

            <div>
              <div className={''}>
                <span style={{ fontSize: '1.2rem' }} className={'text-black'}>
                  {questions[currentPosition].question}
                </span>
              </div>

              {questions[currentPosition].type === 'short-text' ? (
                <div className={'mt-2'}>
                  <input
                    value={currentAnswer}
                    style={{ width: '40vw', fontSize: '1.7rem' }}
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
                    className={
                      'border-b border-blue-400 text-blue-900 placeholder-gray-200 focus:border-blue-800 focus:outline-none  pb-1'
                    }
                    placeholder='Enter your answer here...'
                  />
                </div>
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
                    if (currentAnswer.length > 0) {
                      setSubmitButton(true)
                    }
                  }}
                  className={
                    'border-b border-blue-400 text-blue-900 placeholder-gray-200 focus:border-blue-800 focus:outline-none  pb-1'
                  }
                  style={{ width: '40vw', fontSize: '1.7rem' }}
                  placeholder='Enter your answer here...'
                />
              ) : questions[currentPosition].type === 'phone-number' ? (
                <input
                  maxLength={10}
                  type='tel'
                  value={currentAnswer}
                  style={{ width: '40vw', fontSize: '1.7rem' }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      if (currentAnswer.length == 10) {
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
                      } else {
                        setError('Phone numbers should be at least 10 digits')
                      }
                    }

                    if (e.keyCode == 8) {
                      if (currentAnswer.length > 0) {
                        setCurrentAnswer(
                          currentAnswer.substring(0, currentAnswer.length - 1)
                        )
                      }
                    }
                    if (e.keyCode >= 48 && e.keyCode <= 57) {
                      if (currentAnswer.length < 10) {
                        setCurrentAnswer(currentAnswer + e.key)
                      }
                    }
                  }}
                  onChange={(e) => {
                    setError(null)
                    if (currentAnswer.length > 9) {
                      setSubmitButton(true)
                    }
                  }}
                  className={
                    'border-b border-blue-400 text-blue-900 placeholder-gray-200 focus:border-blue-800 focus:outline-none  pb-1'
                  }
                  max={10}
                  prefix='+233'
                  placeholder='Enter phone number here...'
                />
              ) : questions[currentPosition].type === 'email' ? (
                <input
                  type='email'
                  value={currentAnswer}
                  style={{ width: '40vw', fontSize: '1.7rem' }}
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
                  className={
                    'border-b border-blue-400 text-blue-900 placeholder-gray-200 focus:border-blue-800 focus:outline-none  pb-1'
                  }
                  placeholder='Enter your answer here...'
                />
              ) : null}

              {submitButton ? (
                <div className={'flex flex-row items-center mt-3'}>
                  <div className={'mr-2'}>
                    <div class='shadow'>
                      <button
                        onClick={(e) => {
                          if (
                            questions[currentPosition].type !==
                            'multiple-choice'
                          ) {
                            setAnswers([
                              ...answers,
                              {
                                question: currentPosition,
                                answer: currentAnswer
                              }
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
                        class='w-full flex items-center justify-center px-8 py-1 border border-transparent text-base leading-6 font-medium  text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-2 md:text-lg md:px-8'
                      >
                        <span>OK</span>
                        <svg
                          width={20}
                          height={20}
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='feather feather-check ml-1'
                        >
                          <path d='M20 6L9 17 4 12' />
                        </svg>
                      </button>
                    </div>
                  </div>

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
                      className={'flex flex-row items-center'}
                    >
                      <span className={'text-sm mr-2'}>
                        {questions[currentPosition].type === 'long-text'
                          ? 'Press Ctrl + Return'
                          : 'Press Return '}
                      </span>
                      <svg
                        width={15}
                        height={15}
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='feather feather-corner-down-left'
                      >
                        <path d='M9 10L4 15 9 20' />
                        <path d='M20 4v7a4 4 0 01-4 4H4' />
                      </svg>
                    </div>
                  ) : null}
                </div>
              ) : null}
              {error && (
                <span style={{ fontSize: '1rem' }} className={'text-red-500'}>
                  {error}
                </span>
              )}
            </div>
          </div>
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
      <div style={{ position: 'absolute', top: 0, right: 0, margin: '10px' }}>
        <span class='relative z-0 inline-flex shadow-sm rounded-md'>
          <div class='relative inline-flex items-center px-4 py-2 rounded-sm text-sm leading-5 font-medium text-gray-50 bg-teal-900 hover:bg-teal-700 focus:z-10 focus:outline-none focus:border-teal-300 focus:shadow-outline-teal active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150'>
            Powered
            <span className={'text-white font-bold'}>
              {' '}
              {'. '}by Polymorph Labs
            </span>
          </div>
          <span class='-ml-px relative block'>
            {currentPosition !== -5 && currentPosition !== -1 ? (
              <button
                onClick={() => {
                  if (currentPosition == -2) {
                    setCurrentPosition(form.questions.length - 1)
                  } else {
                    setCurrentPosition(currentPosition - 1)
                  }
                }}
                type='button'
                class='relative inline-flex items-center px-2 py-2 rounded-none border-l border-r border-white bg-white text-sm leading-5 font-medium text-white bg-teal-900 hover:bg-teal-700 focus:z-10 focus:outline-none focus:border-teal-300 focus:shadow-outline-teal active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150'
                aria-label='Expand'
              >
                <svg
                  width={20}
                  height={21}
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-chevron-up'
                >
                  <path d='M18 15L12 9 6 15' />
                </svg>
              </button>
            ) : null}
          </span>
          <span class='-ml-px relative block'>
            {preview && currentPosition < form.questions.length - 1 && (
              <button
                onClick={() => setCurrentPosition(currentPosition + 1)}
                type='button'
                class='relative inline-flex items-center px-2 py-2 rounded-sm border border-white bg-white text-sm leading-5 font-medium text-white bg-teal-900 hover:bg-red-700 focus:z-10 focus:outline-none focus:border-teal-300 focus:shadow-outline-red active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150'
                aria-label='Expand'
              >
                <svg class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                  <path
                    fill-rule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  />
                </svg>
              </button>
            )}
          </span>
        </span>
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
  current: -5,
  preview: false,

  onComplete: (e) => e
}
