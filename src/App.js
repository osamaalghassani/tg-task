import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
  
  





function App() {
  



  

  





  return (
    <div className="App" >
      <section className="landing"> 
      <div className="container">
      <Header></Header>
     <div className="landing-area">
      <img src="images/person.svg"/>
      <div className='text'>
    <p>تعلم تخصص <br/>  بمستوى جامعي  <br/>متاح للجميع بالمجان</p>
    </div>
   
     </div> 
     <div className='apps-icon'>
 <img src='images/google-store.svg'/>
<img src='images/app-store.svg'/>
     </div>
    </div>
     </section>
<footer>
  <div className='container'>
  <div className='left'>
<h2>تواصل معنا</h2>
<div className='icons'>
<img src='images/telegram.svg'/>
<img src='images/linkedin.svg'/>
<img src='images/facebook.svg'/>

</div>

  </div>
  <div className='right'>

   <h3 className='politics'>سياسة الخصوصية</h3>
   <div>
<h3> 2022 TG Developers &copy;</h3> 
</div>
  </div>
  </div>
</footer>
     </div>
  );
}

export default App;
