import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Subjects from './pages/Subjects'
import Mathematics from './pages/Mathematics'
import Tests from './pages/Tests'
import Mistakes from './pages/Mistakes'
import CalendarPage from './pages/CalendarPage'
import Progress from './pages/Progress'
import Goals from './pages/Goals'
import StudyTimer from './pages/StudyTimer'
import Settings from './pages/Settings'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/mathematics" element={<Mathematics />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/mistakes" element={<Mistakes />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/timer" element={<StudyTimer />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  )
}
