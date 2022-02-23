
import { FeedbackList } from '../components/FeedbackList'
import { FeedbackStats } from '../components/FeedbackStats'
import { FeedbackForm } from '../components/FeedbackForm'
import { AboutIconLink } from '../components/AboutIconLink'

export const Home = () => {
  
  return (
    <>
      <div className='container'>
        <FeedbackForm  />
        <FeedbackStats />
        <FeedbackList />
      </div>
      <AboutIconLink />
    </>
  )
}
