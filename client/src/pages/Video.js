import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoPlayer from "../VideoPlayer";

const Video = () => {
  const [finished, setFinished] = useState(false);
  const [file, setFile] = useState(null)
  // useEffect(()=>{
  //     axios.get("/api/generateTags/" +  "wT3BGq7l9w8").then(function(data){
  //         console.log(data.data)
  //     })
  // }, [])

  const search = async () => {
    const formData = new FormData()
    formData.append('file', file)
    await axios.post("/api/retention", formData)
    axios.get("/api/shortenVideo/" + document.getElementById("videoId").value)
        .then(function (data) {
          setTimeout(setFinished(true), 1500)
        });
    

  };

  return (
    <div className="container w-full m-auto p-4 py-16 text-center">
      <input
        className="w-3/4 m-auto border-gray-200 border-2 rounded-md shadow-lg p-6 focus:ring-4 focus:ring-blue-300 focus:border-none focus:outline-none block my-4"
        placeholder="Enter a video id..."
        id="videoId"
      ></input>
      <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
      <button
        id="search"
        className="w-1/4 bg-blue-700 text-white font-bold text-2xl rounded-lg p-4"
        onClick={(search)}
      >
        Generate Video!
      </button>

      <div className="data w-3/4 m-auto border-gray-200 border-2 rounded-md shadow-lg p-6 block font-medium text-xl my-6">
       
       {finished ? <VideoPlayer/>:""}
      </div>
    </div>
  );
};

export default Video;
