import React, { useState } from 'react'
import Select from "react-select"
import { useNavigate } from 'react-router-dom'


const Insurance = () => {

  const insuraceType = [
    { value: 'Insurance 1', label: 'Insurance 1' },
    { value: 'Insurance 2', label: 'Insurance 2' },
    { value: 'Insurance 3', label: 'Insurance 3' }
  ]

  const govId = [
    { value: 'Addhar', label: 'Addhar' },
    { value: 'Passport', label: 'Passport' },
    { value: 'DL', label: 'Driving Lisence' },
  ]

  const insuranceEMI = [
    { value: '1', label: 'EMI 1' },
    { value: '2', label: 'EMI 2' },
    { value: '3', label: 'EMI 3' },
  ]

  const disease = [
    { value: '1', label: 'Dengue' },
    { value: '2', label: 'Blood pressure' },
    { value: '3', label: 'Malaria' },
    { value: '3', label: 'Tuberculosis' },
    { value: '3', label: 'Tythoid' },
    { value: '3', label: 'Cancer' },
    { value: '3', label: 'Migraine' },
  ]

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    navigate("/")
  }

  return (
    <div className='insuranceContainer' style={{padding:"2rem",width:"60%",margin:"auto"}}>
      <h1>Apply for new insurace</h1>
      <br></br><br></br>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name' ><h3>First Name</h3></label>
        <p>Enter your first_name</p>
        <input type="text" id='name' name='name' placeholder='Enter your first name'/><br></br><br></br>

        <label htmlFor='name' ><h3>Last Name</h3></label>
        <p>Enter your last_name</p>
        <input type="text" id='surname' name='surname' placeholder='Enter your last name'/><br></br><br></br>

        <label htmlFor='name' ><h3>Amount</h3></label>
        <p>Enter your amount of insurance</p>
        <input type="text" id='amount' name='amount' placeholder='Enter your amount '/><br></br><br></br>

        <label htmlFor='name' ><h3>Disease</h3></label>
       <p> select your Disease </p>
         <Select options={disease}></Select>
           <br></br><br></br>

        <label htmlFor="dob"><h3>Date Of Birth</h3></label>
        <p>Enter your DOB according to your Addhar.(mm/dd/yyyy)</p>
        <input type="date"/><br></br>
        <br></br>

        <label htmlFor="personalDetail"><h4>Personal Details</h4></label><br></br>
        <p>Enter your correct height and weight</p>
        <input type="text" placeholder='Enter height in cm'/>
        <input type="text" placeholder='Enter weight in Kg'/><br></br><br></br>

        <label htmlFor="phoneNumber"><h4>Phone Number</h4></label><br></br>
        <input type="text" placeholder='Enter your phone Number'/>
        <br></br><br></br>


        <label htmlFor="address"><h3>Addresss</h3></label><br></br>
        <input type="text" id='address-1' name='address' placeholder='Address line 1 (flatno./Building)' />
        <input type="text" id='address-2' name='address' placeholder='Address line 2 (Locality/sector/area)' />
        <input type="text" id='address-3' name='address' placeholder='Address line 3 (State/nearby landmark)' /><br></br><br></br><br></br>

        <label htmlFor="Additionl"><h3>Previous Health Insurance</h3></label>
        <Select isMulti options= {insuraceType}></Select>
        <p><input type="checkbox"/> Please mark if haven't taken any</p><br></br><br></br>

        <label htmlFor="addhar"><h3>Goverment ID</h3></label>
        <Select options={govId}></Select>
        <p>Enter Valid Id for Verification</p>
        <input type="text" placeholder='Enter Id Number'/><br></br><br></br><br></br>



        <label htmlFor="Insrance EMI Type"><h3>Select the Type of Insurance</h3></label>
        <Select options={insuranceEMI}></Select><br></br><br></br>

        <label htmlFor="fingerprint"><h3>Submit ur fingerprint</h3></label><br></br>
        <button type='button'>Click to add fingerprint</button>
        <br />
        <br />
        <br></br>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Insurance
