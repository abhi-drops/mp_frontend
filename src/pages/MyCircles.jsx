import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "../assets/images/BiSearch.svg";
import CardCircle from "../assets/components/CardCircle";
import circleicon from "../assets/images/circleicon.svg";
import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import CardSearch from "../assets/components/CardSearch";

import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import { toPng } from "@dicebear/converter";
import CircleAvatarComponent from "../assets/components/CircleAvatarComponent";
import { Flip, toast, ToastContainer } from "react-toastify";
import { addnewcircleAPI, getUserDataAPI, searchCirclesAPI } from "../services/allAPI";
import UserContext from "../assets/ContextAPI/UserContext";
import { Link } from "react-router-dom";
function MyCircles() {
  const [userResponse, setuserResponse] = useContext(UserContext);
  console.log("User Response:", userResponse);
  const [newCircleName, setNewCircleName] = useState("");

  const [circleSearchName,setCircleSearchName]=useState("")
  const[circleSearchResult,setCircleSearchResult]=useState([])

  const[updatedUser,setUpdateUser]=useState(false)

  const [newCircleIconSeed, setNewCircleIconSeed] = useState(
    Math.floor(100000 + Math.random() * 900000)
  );

  async function randomizeCircleIcon() {
    setNewCircleIconSeed(Math.floor(100000 + Math.random() * 900000));
  }


  const handleAddNewCircle = async (e) => {
    e.preventDefault();
    if (newCircleName === "") {
      toast.info("Please fill the missing field");
    } else {
      const reqBody = new FormData();
      reqBody.append("circleName", newCircleName);
      reqBody.append("cityId", sessionStorage.getItem("selectedCityId"));
      reqBody.append("circlePic", newCircleIconSeed);
      const token = sessionStorage.getItem("token");
      console.log("Token:", token);
      if (token) {
        const reqHeader = {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };
        try {
          const result = await addnewcircleAPI(reqBody, reqHeader);
          console.log("Add Circle Result:", result);
          if (result.status === 200) {
            toast.success("Circle Added Successfully");
            document.getElementById("modalAdd").classList.toggle("hidden");
            setNewCircleName("");
            setUpdateUser(!updatedUser)
          } else {
            console.log("Add Circle Error:", result.response.data);
          }
        } catch (err) {
          console.log("Add Circle Catch Error:", err);
        }
      }
    }
  };
  const getUserData = async () => {
    const reqBody = new FormData();
    const token = sessionStorage.getItem("token");
    console.log("Token:", token);
    if (token) {
      const reqHeader = {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      try {
        const result = await getUserDataAPI(reqBody, reqHeader);
        console.log("Get User Data Result:", result);
        if (result.status === 200) {
          setuserResponse(result.data);
        } else {
          console.log("Get User Data Error:", result.response.data);
        }
      } catch (err) {
        console.log("Get User Data Catch Error:", err);
      }
    }
  };



  const searchCircles= async(e)=> {
    e.preventDefault()
    console.log("addNewCity");

        try {
          const result = await searchCirclesAPI({"circleName":circleSearchName})
          if (result.status === 200) {

            // success
            setCircleSearchResult(result.data)
            console.log("circle search result :",result.data);

          }else{
            console.error(result.response.data)
          }

        } catch (error) {
          console.log(error);
        }

  }


  useEffect(() => {
    getUserData();
  }, [updatedUser]);

  if (!userResponse || !userResponse.userCircles) {
    return <div className="w-full h-full flex justify-center items-center">Loading...</div>;
  }

  return (
    <>
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
      <div className="w-[100vw] md:h-[85vh] h-[82vh] md:px-40 px-3">
        <div className="w-full h-full bg-primary rounded-t-xl md:px-10 px-5 ">
          <div className="w-full flex justify-between pt-10 items-center ">
            <div className="md:text-3xl text-xl font-semibold text-info">
              <h2>My Circles</h2>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <button
                className="outline outline-info rounded-full p-1 text-info text-xl hover:scale-105 w-8 h-8 flex justify-center items-center"
                onClick={() =>
                  document.getElementById("modalAdd").classList.toggle("hidden")
                }
              >
                +
              </button>

              {/* modal */}

              <div
                class="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] hidden justify-center items-center backdrop-blur-sm   flex justify-center items-center  "
                id="modalAdd"
              >
                <button
                  className="md:relative fixed z-20 left-80 mb-[90vh] md:mb-0 md:bottom-20 md:left-2/4 md:me-10 text-white ms-5 md:ms-0"
                  onClick={() =>
                    document
                      .getElementById("modalAdd")
                      .classList.toggle("hidden")
                  }
                >
                  <RxCross2 />
                </button>
                <div className="md:w-2/4 md:h-2/6 w-full h-full bg-success md:rounded-lg flex flex-col-reverse md:flex-row justify-center items-center gap-3">
                  <div className="flex gap-3 items-center pe-24 md:pe-0">
                    <CircleAvatarComponent seed={newCircleIconSeed} />
                    <button
                      className="rounded-full p-2 bg-info h-12 text-sm font-semibold flex items-center gap-2 text-secondary px-4 flex justify-center items-center"
                      onClick={randomizeCircleIcon}
                    >
                      randomize icon
                    </button>
                  </div>

                  <div className="flex">
                    <input
                      type="text"
                      className="rounded-s-full py-3 outline-none ps-3 md:w-[20vw] w-[60vw] text-sm"
                      placeholder="Cycle Club , Developers , cricket ..."
                      value={newCircleName}
                      onChange={(e) => setNewCircleName(e.target.value)}
                    />
                    <button
                      className="bg-secondary p-2 rounded-e-full px-4 text-info"
                      onClick={(e) => handleAddNewCircle(e)}
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </div>

              <button
                className="rounded-full p-2 bg-info text-sm font-semibold flex items-center gap-2 text-secondary px-2  flex justify-center items-center"
                onClick={() =>
                  document
                    .getElementById("modalSearch")
                    .classList.toggle("hidden")
                }
              >
                <img src={SearchIcon} alt="" />
                Search
              </button>

              {/* modal search  */}
              <div
                class="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] hidden justify-center items-center backdrop-blur-sm   flex justify-center items-center "
                id="modalSearch"
              >
                <button
                  className="md:relative fixed z-20 left-80 mb-[90vh] md:mb-0 md:bottom-64 md:left-[51%] md:me-10 text-white ms-5 md:ms-0"
                  onClick={() =>
                    document
                      .getElementById("modalSearch")
                      .classList.toggle("hidden")
                  }
                >
                  <RxCross2 />
                </button>
                <div className="md:w-2/4 md:h-5/6 w-full h-full bg-success md:rounded-lg flex flex-col justify-center items-center p-5">
                  <div className="flex">
                    <input
                      type="text"
                      className="rounded-s-full py-3 outline-none ps-3 md:w-[40vw] w-[80vw] text-sm"
                      placeholder="Cycle Club , Developers , cricket ..."
                      value={circleSearchName} onChange={e=>setCircleSearchName(e.target.value)}
                    />
                    <button className="bg-secondary p-2 rounded-e-full px-4" onClick={e=>searchCircles(e)}>
                      <BiSearch className="text-white" />
                    </button>
                  </div>

                  <div className=" md:w-[43vw] w-[85vw] mt-5 overflow-y-scroll">
                    {
                      circleSearchResult.map((circle)=>{
                        return(
                          <Link key={circle._id} to={`/circle/${circle._id}`}>
                          <CardSearch
                      name={circle.circleName}
                      icon={circle.circlePic}
                      userno={circle.circleMembers?.length}
                    /></Link>
                        )
                      })
                    }


                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-gradient-to-b from-primary to-transparent w-full h-5 relative top-6 "></div>


          {/* Cards Group */}
<div className="w-[100%] h-[82%] mt-2 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 grid gap-3 overflow-y-scroll pt-5">
  {sessionStorage.getItem("selectedCityId") ? (
    userResponse.userCircles.filter(
      (circle) => circle.circleCityId === sessionStorage.getItem("selectedCityId")
    ).length > 0 ? (
      userResponse.userCircles.filter(
        (circle) => circle.circleCityId === sessionStorage.getItem("selectedCityId")
      ).map((circle) => (
        <Link to={`/circle/${circle._id}`} key={circle._id}>
          <CardCircle
            name={circle.circleName}
            circlePic={circle.circlePic}
            userno={circle.circleMembers?.length}
          />
        </Link>
      ))
    ) : (
      <p className="w-[100%] font-bold text-xl text-info opacity-40">
        No circles found for the selected city.
      </p>
    )
  ) : (
    <p className="w-[100%] font-bold text-xl text-info opacity-40">
      Select a city to view the circles
    </p>
  )}
</div>


        </div>
      </div>
    </>
  );
}

export default MyCircles;
