import { v4 as uuidv4 } from 'uuid'
import { createContext, useState, useEffect } from "react";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

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
      isLoading,
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