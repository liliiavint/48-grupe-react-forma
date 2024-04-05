import { useState } from 'react';
import { TiInfoLarge } from 'react-icons/ti';
import { BiError } from "react-icons/bi";
import style from './Form2.module.css';
import { Link } from 'react-router-dom';

export function RegisterForm2() {
    const href = "/"
    const [username, setUsername] = useState('');
    const [usernameErr, setUsernameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleRepeatPasswordChange(e) {
        setRepeatPassword(e.target.value);
    }

    function isValidUsername(username) {
        if (!username.trim()) {
            return 'Username is required'
        }
        if (username.length > 25) {
            return 'The text is too long, please write shorter!';
        }
        if(typeof username === 'number'){
            return 'Username cannot contain numbers'
        }
        
        const symbol = [',', ':', '*', '&', '^', '%', '$', '#', '@', '!'];
        if (symbol.some(n => username.includes(n))) {
            return 'Username cannot contain special characters , : * & ^ % $ # @ !';
        }
           
        return true;
    }

    function isValidEmail(email) {
      
        if (!email.trim()) {
                return "Enter a valid email address "         
              
            }
        
        if (email.length < 6 || email.length > 50) {
            return "The email is too long, or shorter!"
        }
        if (!email.includes('@')) {
            return "The email must contain @!"
             
        }
       
        const atCount = email.split('@').length - 1;
        if (atCount > 2) {
            return "Email cannot contain more than two @ symbols."
        }
        if (email.indexOf('.') === -1) {
            return "The email must contain a character" 
  
        }
        return true;
    }


    function isValidPassword(text) {
        if (text.length < 1) {
            return false;
        }

        return true;
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        const usernameErrorValue = isValidUsername(username);
        const emailErrorValue = isValidEmail(email);
        
        let isAllFormValid = true;

        if (usernameErrorValue !== true) {
            isAllFormValid = false;
            setUsernameErr(usernameErrorValue);
        } else {
            setUsernameErr('');
        }

        if (emailErrorValue !== true) {
            isAllFormValid = false;
            setEmailErr(emailErrorValue);
        } else {
            setEmailErr('');
        }

        if (!isValidPassword(password)) {
            isAllFormValid = false;
            return 'The incorrect password!';
        }

        if (password !== repeatPassword) {
            isAllFormValid = false;
            return 'The passwords do not match!';
        }

        if (isAllFormValid) {
            console.log('viskas gerai, siuncia info i serveri');
        }
    }

    return (
        <div className={style.main}>
            <div className={style.logo}>
                <img src="../src/assets/images/imdb_logo.png" alt="Logo" />
            </div>
            {/* ERROR*/}
            <div className={style.error}>
                    <div>
                        <i className={style.red}><BiError size="2rem" /> </i>
                    </div>
                    <div>
                        <h4 className={style.redTittle}>There was a problem</h4>
                        <ul>
                           
                            {emailErr.length === 0 ? null : <li className={style.errorLi}>{emailErr}</li>}
                            {usernameErr.length === 0 ? null : <li className={style.errorLi}>{usernameErr}</li>}
                        {/* 
                        <li>Enter your password</li>
                        <li>Passwords must match</li>
                        <li>Passwords must be at least 8 characters.</li>
                        <li></li>  */}
                        </ul>
                    </div>
            </div>    
               
{/* 
            Important Message!
You indicated you're a new customer, 
but an account already exists with the 
email address vintiukviktoria@gmail.com. */}



            <div className={style.form}>
          
                <span className={style.tittle}>
                    <h1>Create account</h1>
                </span>
                <form onSubmit={handleFormSubmit} className={style.context}>
                    <div className={style.formRow}>
                        <label className={style.label} htmlFor="">Your name</label>
                        <input value={username} onChange={handleUsernameChange} className={style.input} type="text" placeholder="First and last name" />
                        
                        {/* {usernameErr && <p className={style.error}>{usernameErr}</p>} */}
                    </div>
                    <div className={style.formRow}>
                        <label className={style.label} htmlFor="">Email</label>
                        <input value={email} onChange={handleEmailChange} className={style.input} type="email" placeholder="" />
                        
                        {/* <p className={style.error}>Error...</p> */}
                    </div>
                    <div className={style.formRow}>
                        <label className={style.label} htmlFor="">Password</label>
                        <input value={password} onChange={handlePasswordChange} className={style.input} type="password" placeholder="at least 8 charachters" />
                        <div className={style.minPassword}>
                            <i className={style.blue}><TiInfoLarge size="1.5rem" /> </i>
                            <p>Passwords must be at least 8 characters.</p>
                        </div>
                        {/* <p className={style.error}>Error...</p> */}
                    </div>
                    <div className={style.formRow}>
                        <label className={style.label} htmlFor="">Re-enter password</label>
                        <input value={repeatPassword} onChange={handleRepeatPasswordChange} className={style.input} type="password" placeholder=" " />
                        {/* <p className={style.error}>Error...</p> */}
                    </div>
                    <div className={style.formRow}>
                        <button className={`${style.button} ${style.textButton}`}  type="submit">Create your IMDb account</button>
                    </div>
                    <div className={style.haveAccount}>
                        <p>Already have an account?<span className={style.linkSignIn}><Link to={'/sign-in/login' + href}>Sign in</Link></span> </p>
                    </div>
                </form>
            </div>
        </div>
    );                                                 
}