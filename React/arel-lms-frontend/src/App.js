
import './App.css';
import logo from  './arel-logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <span className="title">ARELTech</span>  */}
        <img src ={logo} alt="Logo here" className="App-logo"/>
        <nav className="App-nav">
          <ul>
            <li>HOME</li>
            <li>CONTACT</li>
            <li>COURSES</li>
            <li>DONATE</li>
          </ul>
        </nav>
      </header>
      <main className="App.main">
        <div className="cards">
          <div className="card">
            <h2>Vision</h2>
            <p>To be the global leader in tech education and career placement for forcibly displaced individuals, transforming the lives of thousands and meeting the world's demand for skilled, diverse talent.</p>
          </div>
          <div className="card">
            <h2>Mission</h2>
            <p>To unlock the economic potential of refugee talent, equipping them with skills for high-demand tech roles and enabling global employment opportunities.</p>
          </div>
          <div className="card">
            <h2>Goal</h2>
            <p>To provide refugees with a learning platform that will equip them with digital and business skills to be able to work remotely or build their own businesses.</p>
          </div>
          <div className="card">
            <h2>Core Value</h2>
             <ul>
              <li>Ettiquete</li>
              <li>constistence</li>
              <li>competive</li>
             </ul>
          </div>
           
        </div>
         <div className="cta">
              <button className="cta-btn">Enroll Now</button>
            </div>
      </main>
      <footer className="App-footer">
        <div>
          <h2>Contact</h2>
          
          <address>
            email: 12234@gmail.com<br></br>
            phone: 123456789<br></br>
            location: k1z3b4<br></br>
          </address>
          
        </div>
        <p>&copy; new Date() ARELTech. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
