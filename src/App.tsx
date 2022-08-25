import './App.css'

function App() {
  return(
      <div>
          <nav className='nav-bar'>
            <a href=''><p className="logo">&lsaquo;LC/&rsaquo;</p></a>  
            
            <ul className='menu'> 
              <li><a href="#home">Home</a></li>
              <li><a href="/">Sobre</a></li>
              <li><a href="/">Experiência</a></li>
              <li><a href="/">Projetos</a></li>
            </ul>
          </nav>  

          <div className='section' id="home">
              <div className='texto-principal'>
                  <p> Ola, sou  <p>Lucas Chamma</p>  desenvolvedor Full-Stack</p>
                   
              </div>
          </div>
          
      </div>
      
    
  );
}

export default App
