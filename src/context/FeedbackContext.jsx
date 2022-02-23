import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [feedbackEdit, setFeedEdit] = useState({
    item: {},
    edit: false
  })

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Tem certeza de que deseja excluir?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  // Edit feedback
  const editFeedback = (item) => {
    setFeedEdit({
      item,
      edit: true
    })
  }

  // Update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
  }


  return (
    <FeedbackContext.Provider value={{
      feedback,
      feedbackEdit,
      addFeedback,
      deleteFeedback,
      editFeedback,
      updateFeedback
    }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext