
import { Suspense } from 'react'
import './App.css'
import Card from './components/card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Toggle from './components/Toggle'


const fetchIssues = async () => {
  const result = await fetch('/data.json')
  return result.json();
}

function App() {

  const fetchProblems = fetchIssues();
  

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <Suspense fallback ={ 'Loading... '}>
        <div>
          <Card fetchProblems={fetchProblems}></Card>
        </div>
      </Suspense>

      <div>
        <Footer></Footer>
      </div>

    </div>
  )
}

export default App
