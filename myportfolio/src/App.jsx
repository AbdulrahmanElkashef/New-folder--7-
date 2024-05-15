import Header from './components/1-Header/header';
import Hero from './components/2-Hero/hero';
import Main from './components/3-Main/main';
import Contact from './components/4-Contact/contact';
import Footer from './components/footer/footer';


function App() {

  return (
    <> 
    <div className='container'>

      <Header/>
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />

    </div>
    </>
  )
}

export default App; 
