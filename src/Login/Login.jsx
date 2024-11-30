import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase.init.js/Firebase.init";
import { useState } from "react";

const Login = () => {
    const provider = new GoogleAuthProvider();
    const gitprovider=new GithubAuthProvider();

    const [user, setuser]=useState(null);


    const handleloginbtn=()=>{
       

    
     signInWithPopup(auth, provider)
     .then(result =>{
        console.log(result);
        setuser(result.user);

     })
     .catch(error=>{
        console.log(error);
        setuser(null)
     })
      
        
    
    }

    const handleSignout =()=> {
        signOut(auth)
        .then(()=>{
            console.log("signOut done")
            setuser(null)
        })
        .catch((error)=>{
            console.log(error)
        })
     }

     const handlelogingithub =()=>{
        signInWithPopup(auth, gitprovider)
        .then(result =>{
            console.log(result.user)
            setuser(result.user)
        })
        .catch(error =>{
            console.log(error)
        })





     }
    return (
        <div>
        {
            user?       
             <button onClick={handleSignout}>signOut</button>
             :
             <>
             <button onClick={handleloginbtn}>login form google</button>
             <button onClick={handlelogingithub}>login form gitHub</button>

             </>



        }

        {user && 
        <div>

        <h2>{user.displayName}</h2>
        <p> email:{ user.email}</p>
        <img src={user.photoURL} alt="" />
        </div>
        
        }
            
        </div>
    );
};

export default Login;