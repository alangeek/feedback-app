import { useState, useContext, useEffect } from 'react'
import { Button } from './shared/Button'
import { RatingSelect } from './RatingSelect'
import {Card } from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'


export const  FeedbackForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
   if(feedbackEdit.edit === true) {
     setBtnDisabled(false)
     setText(feedbackEdit.item.text)
     setRating(feedbackEdit.item.rating)
   }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('O texto deve ter pelo menos 10 caracteres')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }

     if(feedbackEdit.edit === true) {
       updateFeedback(feedbackEdit.item.id, newFeedback)
     } else {
       addFeedback(newFeedback)
     }

     setText('')
    }
  }
  
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Qual é seu nível de satisfação geral com o suporte do seu parceiro de entrega?</h2>
      <RatingSelect select={(rating) => setRating(rating)}/>
      <div className="input-group">
        <input 
          onChange={handleTextChange} 
          type="text" 
          placeholder='Escreva um review'
          value={text}
        />
        <Button 
          type='submit'
          isDisabled={btnDisabled}
        >
          Enviar
        </Button>
      </div>

      {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}
