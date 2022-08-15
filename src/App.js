import Calculator from './components/calculator/calculator';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function App() {
  return (
  <>
  <div className='social-bar'>
    <a href='https://github.com/gateniomer' target={"_blank"}><img src='https://avatars.githubusercontent.com/u/98481291?v=4'></img></a>
    <a href='https://github.com/gateniomer/math-practice-app' target={"_blank"}><FaGithub /></a>
    <a href='https://il.linkedin.com/in/omer-gatenio-949482174' target={"_blank"}><FaLinkedin /></a>
    <p>created by Omer Gatenio</p>
  </div>
  <h1>Math Practice PWA </h1>
  <h3>math practice made simple 🤓</h3>
  <Calculator/>
  </>
  )
}

export default App;
