import BottomNav from './BottomNav/BottomNav'
import ContentCard from './ContentCard/ContentCard'
import TopNav from './TopNav/TopNav'
import './style.css'

function App() {
  return (
    <>
      <TopNav/>
      <ContentCard accountSprite="./assets/images/Jesus ✨.jpeg" accountName="Test User" cardType="Post" thumbnail="./assets/images/4aba3564-4ae9-4956-95df-838faa862854.jpeg" title="An Image" uploaded="2 days ago"/>
      <BottomNav/>
    </>
  )
}

export default App
