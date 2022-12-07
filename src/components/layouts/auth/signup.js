import React from 'react'
import axios from "axios"
import './form.css'


function signup() {

  const handleSubmit= async (e)=>{
    e.preventDefault()
    console.log("form submitted")

    let user = {
      name : document.querySelector('[name="name"]').value,
      email : document.querySelector('[name="email"]').value,
      password : document.querySelector('[name="password"]').value
    };
    
    // try{
    //   const response = await fetch("http://localhost:5500/signup",{
    //     method: 'POST',
    //     headers: {
    //       'content-type' : 'application/json'
    //     },
    //     body: JSON.stringify({ name:user.name, email:user.email, password:user.password})
    //     //todo: save email address with all small letter
    //   })
    // } catch(error){
    //   console.log({error})
    // }
    const config = { headers: { "Content-Type": "application/json" } };

  //   await axios.post('http://localhost:5500/signup',user)
  // .then(function (response) {
  //     // console.log(response)
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  const { data } = await axios.post(
    `http://localhost:5500/signup`,
     user ,
    config
  );
//  axios({
//     method: 'post',
//     url: 'http://localhost:5500/signup',
//     data: user
//   })
//   .then(function(response){
//       console.log({response})}
//       );

      console.log({data})
    }

    // window.location.replace(`http://localhost:3000/login`)

  
  return (
    <div className='signup-container flex-box-column border'>
      <h2>Signup</h2>
    <form className='signup-form flex-box-column' onSubmit={handleSubmit}>
        <input placeholder='Full Name' name="name"></input>
        <input placeholder='Email' name="email"></input>
        <input placeholder='Password' name="password"></input>
        <button type='submit' className='btn'>Signup</button>
    </form>
      </div>
  )
}

export default signup