import React from 'react'
import Button from './Button'

function Header({postChange, requestType}) {
  return (
    <header>
      <Button buttonText={'users'} requestType={requestType} postChange={postChange}/>
      <Button buttonText={'posts'} requestType={requestType} postChange={postChange}/>
      <Button buttonText={'comments'} requestType={requestType} postChange={postChange}/>
    </header>
  )
}

export default Header
