import React,{ useState, useRef } from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

function IdleTimerContainer()
{
    const idleTimerRef = useRef(null)
    const [isLogged,setIsLogged]=useState(true)
   
    const [modalIsOpen,setModal]=useState(false)
    const sessionTimeoutRef = useRef(null)
    const logOut=()=>
    {
        setIsLogged(false)
        setModal(false)
        clearTimeout(sessionTimeoutRef.current)
        console.log('User has been logged out')
    }
    const stayIn=()=>
    {
        setIsLogged(true)
        setModal(false)
        clearTimeout(sessionTimeoutRef.current)
        console.log('User is active')
    }
    const onIdle=()=>
    {
        console.log("user is idle")
        setModal(true)
        sessionTimeoutRef.current = setTimeout(logOut, 5000)
    }
    return(
       
        <div>
             <div>
            {isLogged?<h1>hello srijith</h1>:<h1>Hello guest</h1>}
            </div>
            <Modal isOpen={modalIsOpen}>
                <h2>there is no activity</h2>
                <button onClick={logOut}>log out</button>
                <button onClick={stayIn}>stay in</button>
            </Modal>
            <IdleTimer
             ref={idleTimerRef}
            timeout={1000 * 5}
            onIdle={onIdle}
            />
        </div>
    )
}

export default IdleTimerContainer