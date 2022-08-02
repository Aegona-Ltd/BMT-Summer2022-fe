import './App.css';
import React , {useRef , useState} from 'react';

function App() {
  const focus_Email  = useRef(null);
  const focus_Pass  = useRef(null);
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [errorsValidate, setErrorsValidate] = useState({
    isValidate : true,
    Alert: ''
  });

  const btnSignIn = (e) => {
    console.log(userName);
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(userName === "" || userName === null){
        setErrorsValidate({
          ...errorsValidate,
          isValidate : false,
          Alert : 'Please enter your e-mail'
        })
        return false;
      } if(reg.test(userName) === false){
          setErrorsValidate({
            ...errorsValidate,
            isValidate : false,
            Alert : 'Please enter a valid e-mail'
          })
        return false;
      } if(passWord === "" || passWord === null){
        setErrorsValidate({
          ...errorsValidate,
          isValidate: false,
          Alert : 'Please enter your password',
        })
        return false;
      } if(passWord.length <= 5){
        setErrorsValidate({
          ...errorsValidate,
          isValidate: false,
          Alert : 'Your password must be at least 6 characters'
        })
        return false;
      }else{
        setErrorsValidate({
          ...errorsValidate,
          isValidate: true,
        })
        return true
      }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo-text'>
          <img src='https://semantic-ui.com/examples/assets/images/logo.png' className="App-logo" alt="logo" />
          <p className='text-name'>
          Log-in to your account
          </p>  
        </div>
        <div className='form-login'>
          <div className='input-login'>
            <div className="icon" onClick={() => {focus_Email.current.focus()}}></div>
            {errorsValidate.isValidate ? null : 
              <input className='input-form1' type='text' name='email' placeholder="E-mail address" ref={focus_Email} onChange={(e) => setUserName(e.target.value)}></input>
            }
            {!errorsValidate.isValidate ? null : 
              <input className='input-form' type='text' name='email' placeholder="E-mail address" ref={focus_Email} onChange={(e) => setUserName(e.target.value)}></input>
            }
          </div>
          <div className='input-login'>
            <div className="icon2" onClick={() => {focus_Pass.current.focus()}}></div>
            {errorsValidate.isValidate ? null : 
              <input className='input-form1' type='password' name='password' placeholder="Password" ref={focus_Pass} onChange={(e) => setPassWord(e.target.value)}></input>
            }
            {!errorsValidate.isValidate ? null :
            <input className='input-form' type='password' name='password' placeholder="Password" ref={focus_Pass} onChange={(e) => setPassWord(e.target.value)}></input>
            }
            
          </div>
          <div className='input-login'>
            <div className='login' onClick={() => btnSignIn()}><small className='text-login'>Login</small></div>
          </div>
        </div>
        {/* <div className='validate'>
          {errorsValidate.isValidate ? null : <li className="text-validate">Please enter your e-mail</li>}
          {errorsValidate.isValidate ? null : <li className="text-validate">Please enter a valid e-mail</li>}
          {errorsValidate.isValidate ? null : <li className="text-validate">Please enter your password</li>}
          {errorsValidate.isValidate ? null : <li className="text-validate">Your password must be at least 6 characters</li>}
          </div> */}
          {/* {errorsValidate.isValidate ? null : <div className='validate'> <li className="text-validate">{errorsValidate.Alert}</li> </div>} */}
        
        <div className='bottom'>
        <small className='text-New'>New to us? <a href='/#' className='link-SignUp'> Sign Up</a></small>
        </div>  
      </header>
    </div>
  );
}

export default App;
