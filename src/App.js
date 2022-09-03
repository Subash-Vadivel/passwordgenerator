
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MdContentCopy} from 'react-icons/md';
import { useState } from 'react';
import generator from "generate-password";
import copy from "copy-to-clipboard";
function App() {
  const [result,setResult]=useState('Get Your Password');
  const [length, setLength] = useState(10);
  const [isLowerCase, setIsLowerCase] = useState(true);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);
  const generatePassword = () => {
    const pwd = generator.generate({
      length: length,
      lowercase: isLowerCase,
      uppercase: isUpperCase,
      numbers: isNumbers,
      symbols: isSymbols
    });
    
    setResult(pwd);
  }

  const copyToClipboard = () => {
    copy(result);
 }

  return (
    <>
    
<Container fluid>
      <Row className='align-items-center viewport-height'>
        <Col sm={4}></Col>
        <Col sm={4} className='bg '>
          
             <h3 className='heading'>Password Generator</h3>
            <div className='result'> 
 {result}<MdContentCopy  onClick={copyToClipboard} className='icon' size={25}/></div>
           <form className='form-sub'>
            
            <label for='count'>Password length </label>
            <input type="number" name="count" value={length} onChange={e => setLength(e.target.value)}></input><br></br><br></br>
            Include uppercase letters
            <input type="checkbox"  name="upper" checked={isUpperCase} onChange={() => setIsUpperCase(val => !val)}></input><br></br>
            Include lowercase letters
            <input type="checkbox" name="lower" checked={isLowerCase} onChange={() => setIsLowerCase(val => !val)}></input><br></br>
            Include numbers
            <input type="checkbox" name="numbers" checked={isNumbers} onChange={() => setIsNumbers(val => !val)}></input><br></br>
            Include symbols
            <input type="checkbox" name="symbols" checked={isSymbols} onChange={() => setIsSymbols(val => !val)}></input><br></br>
            
            <input type="button" value="Generate Password" onClick={generatePassword}></input>
           </form>
        </Col>
           
        <Col sm={4}></Col>
      </Row>
      
      </Container>
      </>
  );
}

export default App;

// https://www.npmjs.com/package/generate-password
