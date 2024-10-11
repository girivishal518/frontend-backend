import React from 'react'
import '../css/Form.css'
import axios from 'axios'
const Form = () => {

  const HandleSubmit = async (e) => {
    e.preventDefault();
    // console.log("hello.....");

    try {
      let formData = new FormData(e.target);
      // console.log(formData);

      
      // for (let [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }
      
      let Data = Object.fromEntries(formData.entries());
      const res = await axios.post('http://localhost:3000/submit', Data);
      console.log(res +"hbjhbsjk");
      console.log(Data);
    } catch (err) {
      console.log(err, "FROM here...........");
    }
  }

  return (
    <>
      <div className='form'>
        <form onSubmit={HandleSubmit} method="post" className='signup-form'  >
          <h1>SignUp</h1>
          <div>
            <label htmlFor="nm">Name</label>
            <input type="text" id='nm' name='name' placeholder='enter your name' />
          </div>
          <div>
            <label htmlFor="em">email</label>
            <input type="email" id='em' name='email' placeholder='enter your email' />
          </div>
          <div>
            <label htmlFor='ph'>phone</label>
            <input type="tel" id='ph' name='phone' placeholder='enter your phone number' />
          </div>
          <div>
            <label htmlFor='ps'>password</label>
            <input type="password" id='ps' name='pass' placeholder='enter your password' />
          </div>
          <div>
            <input type="submit" value={"submit"} />
          </div>
        </form>
      </div>
    </>
  )
}

export default Form
