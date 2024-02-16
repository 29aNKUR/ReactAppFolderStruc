
import './App.css'
import { Folder } from './components/Folder'
import explorer from './data/fileData'

function App() {

  return (
    <>
      <div>
        <h3>Folder Structure / Nested Accordian / Nested Components</h3>  
        <Folder explorer = {explorer}/>
      </div>

    </>
  )
}

export default App
