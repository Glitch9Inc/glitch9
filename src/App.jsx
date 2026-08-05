import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Marquee } from './components/Primitives.jsx'
import { PRODUCTS } from './data/catalog.js'

import Hero from './sections/Hero.jsx'
import Practice from './sections/Practice.jsx'
import ToolsSection from './sections/Tools.jsx'
import Titles from './sections/Titles.jsx'
import Studio from './sections/Studio.jsx'
import Log from './sections/Log.jsx'
import Contact from './sections/Contact.jsx'

import Goods from './pages/Goods.jsx'
import ToolsPage from './pages/Tools.jsx'
import ToolDetail from './pages/ToolDetail.jsx'
import StudioPage from './pages/StudioPage.jsx'

// The legal documents are long and rarely read — keep them out of
// the main bundle.
const Legal = lazy(() => import('./pages/Legal.jsx'))

const TICKER = [
  ...PRODUCTS.map((p) => p.name),
  'Unity Asset Store',
  'Seoul, KR',
  'Est. 2021',
]

function Home() {
  return (
    <>
      <Hero />
      <Marquee items={TICKER} />
      <Practice />
      <ToolsSection />
      <Titles />
      <Studio />
      <Log />
      <Contact />
    </>
  )
}

function Loading() {
  return (
    <div className="flex min-h-[60svh] items-center justify-center">
      <span className="kicker animate-pulse">Loading</span>
    </div>
  )
}

export default function App() {
  return (
    <div className="grain">
      <SmoothScroll />
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/tools/:slug" element={<ToolDetail />} />
            <Route path="/studio" element={<StudioPage />} />
            <Route path="/goods" element={<Goods />} />
            <Route
              path="/terms-of-service"
              element={<Legal doc="terms" />}
            />
            <Route
              path="/privacy-policy"
              element={<Legal doc="privacy" />}
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
