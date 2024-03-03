import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CompleteProfiles(props) {
  const {email,user}=props;

  const [firstName, setFirstName] = useState(user && user.firstName);
  const [lastName, setlastName] = useState(user && user.lastName);
  const [number, setNumber] = useState(user && user.phone);
  const [state, setState] = useState(user && user.state);
  const [address, setAddress] = useState(user && user.address);
  const [yos, setyos] = useState("");
  const [loading, setLoading] = useState(false);
  const [city,setCity] = useState(user && user.city);

const FN=user && user.firstName
const LN=user && user.lastName
const Number=user && user.phone
const State=user && user.state
const Add=user && user.address
const Year=user && user.yearOfStudy
const City=user && user.city

  const formData = {

    firstName:firstName,
    lastName:lastName,
    number:number,
  state:state,
  city:city,
   address:address,
   yearOfStudy:yos
   
  };

  const LoadingToast = ({ loading }) => {
    return (
        <div className={`loading-toast ${loading ? 'visible' : ''}`}>
            <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};
 



const handleSubmit = async (e:any) => {
  e.preventDefault();
  setLoading(true);
   // values object
   const hasChangedFields = Object.values(formData).some(value => value.trim() !== ' ' && value !== null && value !== undefined);

   if (!hasChangedFields) {
     toast.error('Please fill out at least one field');
     setLoading(false); // Reset loading state
     return;
   }
 
   const data = {
    ...formData,
    email: email // Assuming 'email' is the variable holding the email value
  };
  try {
    // Send form data to the server or perform any necessary actions
    const response = await fetch('/api/submitProfile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      toast.success('Form submitted successfully');
      window.location.reload();
      // Optionally, perform any actions after successful submission
    } else {
      toast.error('Failed to submit form');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
  finally{
    setLoading(false);
  }
};



 
 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl text-white mb-4 font-semibold text-center"
      >
   
      </motion.h1>
    
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md border rounded-lg w-full mx-auto mt-8 p-6 bg-transparent shadow-lg"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl mt-2 text-white mb-8 font-semibold text-center"
        >
          Complete Profile
        </motion.h2>

        <ToastContainer />
       {FN=="" && <div className="mb-4">
          <label htmlFor="name" className="block text-white">First Name</label>
          <input type="text" id="name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>}
       {LN=="" && <div className="mb-4">
          <label htmlFor="email" className="block text-white">Last Name</label>
          <input type="email" id="email" value={lastName} onChange={(e) => setlastName(e.target.value)} className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>}
        {Number=="" && <div className="mb-4">
          <label htmlFor="number" className="block text-white">Phone Number:</label>
          <input type="number" id="number" value={number} onChange={(e) => setNumber(e.target.value)} className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>}
    
        {State=="" &&<div className="mb-4">
          <label htmlFor="collegeName" className="block text-white">State</label>
          <input type="text" id="collegeName" value={state} onChange={(e) => setState(e.target.value)} className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>}
        {City=="" && <div className="mb-4">
          <label htmlFor="collegeName" className="block text-white">City</label>
          <input type="text" id="collegeName" value={city} onChange={(e) => setCity(e.target.value)} className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>}
        {Add =="" && <div className="mb-4">
          <label htmlFor="address" className="block text-white">Address:</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>}
       {Year=="" && <div className="mb-4">
          <label htmlFor="yearOfStudying" className="block text-white">Year of Studying:</label>
          <input type="text" id="yearOfStudying" value={yos} onChange={(e) => setyos(e.target.value)} className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>}
       
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
          className="px-4 py-2 border-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 w-full"
        >
           {loading ? 'Please Wait...' : 'Submit'}
        </motion.button>
        <LoadingToast loading={loading} />

      </motion.form>
    </div>
  );
}

export default  CompleteProfiles;