import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { IoAddCircleOutline } from 'react-icons/io5'
import axios from 'axios'
import { addNewCityAPI } from '../services/allAPI';
import { Flip, toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AddNewCity() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cityResults, setCityResults] = useState([]);
  const navigate = useNavigate()

  // Function to handle city search
  const handleSearch = async () => {
    if (searchQuery) {
      try {
        const response = await axios.get(`https://secure.geonames.org/searchJSON?q=${searchQuery}&country=IN&maxRows=100&featureClass=P&username=abhidrops`);
        setCityResults(response.data.geonames);
      } catch (error) {
        console.error("Error fetching city data:", error);
      }
    }
  };

  const addNewCity= async(e,cityName)=> {
    e.preventDefault()
    console.log("addNewCity");

        try {
          const result = await addNewCityAPI({"cityName":cityName})
          console.log(result);
          if (result.status === 200) {
            toast.success(`${result.data.cityName} has successfully registered`)
            // navigate(`/login`)
          }else{
            toast.error(result.response.data)
          }

        } catch (error) {
          console.log(error);
        }

  }

  return (

    <div className='w-[100vw] md:h-[85vh] h-[82vh] md:px-40 px-3'>
      <ToastContainer
    position="top-left"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Flip}
     />
      <div className="w-full h-full bg-primary rounded-t-xl md:px-10 px-5 flex flex-col items-center">

        <div className="flex flex-col md:flex-row md:w-full justify-center items-center gap-10 py-20">
          <h2 className='text-2xl font-semibold text-info'>Add New City</h2>
          <div className='flex'>
            <input
              type="text"
              className='rounded-s-full py-3 outline-none ps-3 md:w-[40vw] w-[70vw] text-sm'
              placeholder='kochi, mumbai, delhi...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className='bg-secondary p-2 rounded-e-full px-4' onClick={handleSearch}>
              <BiSearch className='text-white'/>
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-3 w-full md:w-[50vw] md:h-[70vh] h-[60vh] overflow-y-scroll'>
          {cityResults.map((city) => (
            <div onClick={(e)=>addNewCity(e,city.name)} key={city.geonameId} className='bg-info w-full h-[10vh] rounded-lg flex items-center justify-between px-10 py-10'>
              <h2 className='font-semibold text-secondary'>{city.name}, {city.adminName1}</h2>
              <button className='rounded-full p-2 bg-primary text-sm font-semibold flex items-center gap-2 text-info px-3 flex justify-center items-center'>
                Add <IoAddCircleOutline className='text-2xl'/>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AddNewCity;
