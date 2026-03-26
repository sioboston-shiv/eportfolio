import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import CaseStudies from './components/CaseStudies'
import Prototypes from './components/Prototypes'
import Philosophy from './components/Philosophy'
import AIStack from './components/AIStack'
import Education from './components/Education'
import WorkWithMe from './components/WorkWithMe'
import Footer from './components/Footer'
import * as content from './content'

export default function App() {
  return (
    <div className="bg-warm font-sans text-dark min-h-screen">
      <Nav data={content.nav} />
      <Hero data={content.hero} />
      <About data={content.about} />
      <Skills data={content.skills} />
      <Experience data={content.experience} />
      <CaseStudies data={content.caseStudies} />
      <Prototypes data={content.prototypes} />
      <Philosophy data={content.philosophy} />
      <AIStack data={content.aiStack} />
      <Education data={content.education} />
      <WorkWithMe data={content.workWithMe} />
      <Footer data={content.footer} />
    </div>
  )
}
