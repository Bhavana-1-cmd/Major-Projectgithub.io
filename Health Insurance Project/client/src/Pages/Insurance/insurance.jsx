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

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    navigate("/")
  }

  return (
    <div>
      <h1>Apply for new insurace</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name' ><h3>Name</h3></label>
        <p>Enter your Full Name as per Addhar.</p>
        <input type="text" id='name' name='name' placeholder='Enter your full name'/>

        <label htmlFor="dob"><h3>Date Of Birth</h3></label>
        <p>Enter your DOB according to your Addhar.(mm/dd/yyyy)</p>
        <input type="date"/>
        <label htmlFor="personalDetail"><h4>Personal Details</h4></label>
        <input type="text" placeholder='Enter height in cm'/>
        <input type="text" placeholder='Enter weight in Kg'/>


        <label htmlFor="address"><h3>Addresss</h3></label>
        <input type="text" id='address-1' name='address' placeholder='Address line 1 (flatno./Building)' />
        <input type="text" id='address-2' name='address' placeholder='Address line 2 (Locality/sector/area)' />
        <input type="text" id='address-3' name='address' placeholder='Address line 3 (State/nearby landmark)' />

        <label htmlFor="Additionl"><h3>Previous Health Insurance</h3></label>
        <Select isMulti options= {insuraceType}></Select>
        <p><input type="checkbox"/> Please mark if haven't taken any</p>

        <label htmlFor="addhar"><h3>Goverment ID</h3></label>
        <Select options={govId}></Select>
        <p>Enter Valid Id for Verification</p>
        <input type="text" placeholder='Enter Id Number'/>

        <label htmlFor="photo"><h3>Upload Photo</h3></label>
        <p>Please upload a photo of yourself</p>
        <input type="file" id="photo" name="photo"/>
        <p>Please upload Govermant valid ID</p>
        <input type="file" id="govId" name="govId"/>

        <label htmlFor="Insrance EMI Type"><h3>Select the Type of Insurance</h3></label>
        <Select options={insuranceEMI}></Select>

        <label htmlFor="fingerprint"><h3>Submit ur fingerprint</h3></label>
        <button type='button'>Click to add fingerprint</button>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Insurance
