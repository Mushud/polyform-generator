import React, { Fragment, useState, useEffect } from 'react'
import { fadeInUpBig } from 'react-animations'
import styled, { keyframes } from 'styled-components'

const Input = () => {
  const [field, setField] = useState('')
  const [showButton, setShowButton] = useState('')

  return (
    <Fragment>
      <BouncyDiv class='flex flex-row items-start'>
        <div className={'mt-1'}>
          <span
            style={{ fontSize: '1rem' }}
            className={'text-blue-600 flex flex-row items-center'}
          >
            1
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
              What is your name?
            </span>
          </div>
          <div className={'mt-2'}>
            <input
              style={{ width: '30vw', fontSize: '1.7rem' }}
              value={field}
              onChange={(e) => setField(e.target.value)}
              className={
                'border-b border-blue-400 text-blue-900 placeholder-gray-200 focus:border-blue-800 focus:outline-none  pb-1'
              }
              placeholder={'Type your answer here...'}
            />
          </div>
          {showButton && (
            <div className={'flex flex-row items-center mt-3'}>
              <div className={'mr-2 '}>
                <button
                  className={
                    'flex flex-row items-center text-white bg-blue-700 px-5 py-2 rounded-md focus-outline-none'
                  }
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
              <div className={'flex flex-row items-center'}>
                <span className={'text-sm mr-2'}>press Enter</span>
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
            </div>
          )}
        </div>
      </BouncyDiv>
    </Fragment>
  )
}

const bounceAnimation = keyframes`${fadeInUpBig}`

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`

export default Input
