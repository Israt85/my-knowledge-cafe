import './App.css'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Blogs from './component/blogs/blogs'
import Header from './component/header/header'

function App() {
  

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
