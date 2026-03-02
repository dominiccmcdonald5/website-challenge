import './App.css'
import IdolPage1 from './pages/IdolPage1'
import IdolPage10 from './pages/IdolPage10'
import IdolPage2 from './pages/IdolPage2'
import IdolPage3 from './pages/IdolPage3'
import IdolPage4 from './pages/IdolPage4'
import IdolPage5 from './pages/IdolPage5'
import IdolPage6 from './pages/IdolPage6'
import IdolPage7 from './pages/IdolPage7'
import IdolPage8 from './pages/IdolPage8'
import IdolPage9 from './pages/IdolPage9'
import IntroPage from './pages/IntroPage'

const challengePages = [
  { path: '/challenge-1', label: 'Idol Page 1', element: <IdolPage1 /> },
  { path: '/challenge-2', label: 'Idol Page 2', element: <IdolPage2 /> },
  { path: '/challenge-3', label: 'Idol Page 3', element: <IdolPage3 /> },
  { path: '/challenge-4', label: 'Idol Page 4', element: <IdolPage4 /> },
  { path: '/challenge-5', label: 'Idol Page 5', element: <IdolPage5 /> },
  { path: '/challenge-6', label: 'Idol Page 6', element: <IdolPage6 /> },
  { path: '/challenge-7', label: 'Idol Page 7', element: <IdolPage7 /> },
  { path: '/challenge-8', label: 'Idol Page 8', element: <IdolPage8 /> },
  { path: '/challenge-9', label: 'Idol Page 9', element: <IdolPage9 /> },
  {
    path: '/challenge-10',
    label: 'Idol Page 10',
    element: <IdolPage10 />,
  },
]

const challengeByPath = new Map(
  challengePages.map((challengePage) => [challengePage.path, challengePage.element]),
)

function normalizePath(pathname: string) {
  const trimmed = pathname.replace(/\/+$/, '')
  return trimmed.length === 0 ? '/' : trimmed
}

function NotFoundPage() {
  return (
    <main className="page">
      <h1>Page Not Found</h1>
      <p>That challenge page does not exist.</p>
      <a className="back-link" href="/">
        Back to Introduction
      </a>
    </main>
  )
}

function App() {
  const currentPath = normalizePath(window.location.pathname)

  if (currentPath === '/') {
    const routeLinks = challengePages.map((challengePage) => ({
      label: challengePage.label,
      href: challengePage.path,
    }))

    return <IntroPage routeLinks={routeLinks} />
  }

  return challengeByPath.get(currentPath) ?? <NotFoundPage />
}

export default App
