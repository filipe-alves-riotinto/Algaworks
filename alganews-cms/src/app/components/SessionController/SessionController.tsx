import React from 'react'
import * as SC from './SessionController.styles'
import Button from '../Button/Button'

export interface SessionControllerProps {
    onLogout?: () => any
    name: string
    description: string
}

function SessionController (props: SessionControllerProps) {
    return <SC.Wrapper>
    <SC.Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
    <SC.Name>
      { props.name }
    </SC.Name>
    <SC.Description>
      { props.description }
    </SC.Description>
    <Button variant="danger" label="Logout" onClick={props.onLogout} />
  </SC.Wrapper>
}



export default SessionController