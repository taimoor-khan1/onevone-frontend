// import React, { useEffect, useState } from "react";
// import DefaultLayout from "../../components/DefaultLayout";

// import contextscreenbg from "../../assets/images/context-screen-bg.png";
// import user1img from "../../assets/images/user-1-img.png";
// import user2img from "../../assets/images/user-2-img.png";
// import user3img from "../../assets/images/user-3-img.png";
// import user4img from "../../assets/images/user-4-img.png";
// import user5img from "../../assets/images/user-5-img.png";
// import GlassBox from "../../components/GlassBox";
// import ChallengeBox from "../../components/ChallengeBox";
// import FullScreenBG from "../../components/FullScreenBG";
// import { Link } from "react-router-dom";
// import Challenge from "../../components/Challenge/Challenge";
// import { GetUserService } from "../../api/services/User";
// import loginScreenBg from "../../assets/images/login-screen-bg.png";

// const contextEntryData = [
//   {
//     id: 1,
//     image: user1img,
//     name: "Martin Joel",
//     email: "Martin.Joel@mail.com",
//   },
//   {
//     id: 2,
//     image: user2img,
//     name: "Mark  james",
//     email: "Martin.Joel@mail.com",
//   },
//   {
//     id: 3,
//     image: user3img,
//     name: "Martha Collin",
//     email: "Martin.Joel@mail.com",
//   },
//   {
//     id: 4,
//     image: user4img,
//     name: "Sam  Robinson",
//     email: "Martin.Joel@mail.com",
//   },
//   {
//     id: 5,
//     image: user5img,
//     name: "Alexa Renne",
//     email: "Martin.Joel@mail.com",
//   },
//   {
//     id: 6,
//     image: user1img,
//     name: "Martin Joel",
//     email: "Martin.Joel@mail.com",
//   },
//   {
//     id: 7,
//     image: user2img,
//     name: "Mark  james",
//     email: "Martin.Joel@mail.com",
//   },
//   {
//     id: 8,
//     image: user3img,
//     name: "Martha Collin",
//     email: "Martin.Joel@mail.com",
//   },
//   {
//     id: 9,
//     image: user4img,
//     name: "Sam  Robinson",
//     email: "Martin.Joel@mail.com",
//   },
//   {
//     id: 10,
//     image: user5img,
//     name: "Alexa Renne",
//     email: "Martin.Joel@mail.com",
//   },
// ];

// const ContextEntry = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchUser = async () => {
//     try {
//       setLoading(true)
//       const token = localStorage.getItem("token");
//       const response = await GetUserService(token);
//       setData(response?.data||[])
//       setLoading(false)

//     } catch (error) {
//       console.log(error)
//       setLoading(false)

//     }
//   };
//   useEffect(() => {
//     fetchUser();
//   }, []);

//   return loading ? (
//     <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
//       <FullScreenBG backgroundImage={loginScreenBg}>
//         <h1 className="login-title">Loading.....</h1>
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </FullScreenBG>
//     </div>
//   ) : (
//     <DefaultLayout>
//       <FullScreenBG backgroundImage={contextscreenbg}>
//         <div className="col-md-12">
//           <GlassBox>
//             <h2 className="login-title">Context Entry</h2>
//             <div className="context-fee-box">
//               <h3>$10.00</h3>
//               <p>
//                 Contest Fee <span className="greenColor">Received</span>
//               </p>
//             </div>
//             <div className="total-competitors-div">
//               <p>
//                 <span className="whiteColor-80">Total Competitors</span>: {data?.length||0}
//               </p>
//               <Link to={"/previous-match"} className="whiteColor-80">
//                 Previous Match
//               </Link>
//             </div>
//             <div className="challenge-boxes glass-bg custon-scroll">
//               {data.map((item, index) => (
//                 <ChallengeBox
//                   image={item?.profilePicture}
//                   name={item?.username}
//                   email={item.email}
//                   key={index}
//                 />
//               ))}
//             </div>
//           </GlassBox>
//         </div>
//       </FullScreenBG>
//     </DefaultLayout>
//   );
// };

// export default ContextEntry;
import React, { useEffect, useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import contextscreenbg from "../../assets/images/context-screen-bg.png";
import GlassBox from "../../components/GlassBox";
import ChallengeBox from "../../components/ChallengeBox";
import FullScreenBG from "../../components/FullScreenBG";
import { Link } from "react-router-dom";
import { GetUserService } from "../../api/services/User";
import loginScreenBg from "../../assets/images/login-screen-bg.png";
import socket from "../../utils/socket"; // Import Socket.IO
import { toast } from "react-toastify";

const ContextEntry = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [challenger, setChallenger] = useState(null); // Track the challenger
  const [showChallengePopup, setShowChallengePopup] = useState(false); // Show/hide challenge popup
  const [challengeResponse, setChallengeResponse] = useState(null); // Track challenge response

  // Fetch users
  const fetchUser = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await GetUserService(token);
      setData(response?.data || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Send a challenge to another user
  const handleChallenge = (user) => {
    const CurrentUser = localStorage.getItem("user");
    const userDetail = CurrentUser ? JSON.parse(CurrentUser) : null;
    const userName = userDetail.username;
    socket.emit("challenge", { challenger: userName, challengee: user.username });
    // setShowChallengePopup(true); // Show the challenge popup
    setTimeout(() => {
      if (!challengeResponse) {
        setChallengeResponse("no-response");
        setShowChallengePopup(false); // Hide the popup after 5 seconds
        toast(`${user.username} did not respond to your challenge.`);
      }
    }, 5000);
  };

  // Handle challenge received
  useEffect(() => {

    const CurrentUser = localStorage.getItem("user");
    const userDetail = CurrentUser ? JSON.parse(CurrentUser) : null;
    const userName = userDetail.username;
    socket.on("challengeReceived", (data) => {
      const { challenger,challengee } = data;
      if(challengee===userName){
        console.log({challengee})
        setChallenger(challenger); 
        setShowChallengePopup(true); 
  
        // Set a timeout for 5 seconds
        setTimeout(() => {
          if (showChallengePopup) {
            setShowChallengePopup(false); // Hide the popup after 5 seconds
            toast(`${challenger} did not respond to your challenge.`);
          }
        }, 5000);
      }
      
    });

    // Clean up listener
    return () => {
      socket.off("challengeReceived");
    };
  }, [showChallengePopup]);

  // Handle challenge response
  const handleChallengeResponse = (response) => {
    const CurrentUser = localStorage.getItem("user");
    const userDetail = CurrentUser ? JSON.parse(CurrentUser) : null;
    const userName = userDetail.username;
    socket.emit("challengeResponse", { challenger, challengee: userName, response });
    setShowChallengePopup(false); // Hide the popup after response
  

    if (response === "accept") {
      // Redirect to Chess.com
      window.location.href = `https://www.chess.com/play/online/new?username1=${challenger}&username2=${userName}`;
    }
    
  };

  // Listen for challenge response
  useEffect(() => {
    const CurrentUser = localStorage.getItem("user");
    const userDetail = CurrentUser ? JSON.parse(CurrentUser) : null;
    const userName = userDetail.username;
    socket.on("challengeResponse", (data) => {
      const { challenger,challengee,response, } = data;

      if (response === "reject") {
        // Show rejection message
        toast(`${challenger} has rejected your challenge.`);
      }
      if(challengee!==userName){
        if (response === "accept") {
          // Redirect to Chess.com
          window.location.href = `https://www.chess.com/play/online/new?username1=${challengee}&username2=${userName}`;
        }
      }
      
    });

    // Clean up listener
    return () => {
      socket.off("challengeResponse");
    };
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  return loading ? (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <FullScreenBG backgroundImage={loginScreenBg}>
        <h1 className="login-title">Loading.....</h1>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </FullScreenBG>
    </div>
  ) : (
    <DefaultLayout>
      <FullScreenBG backgroundImage={contextscreenbg}>
        <div className="col-md-12">
          <GlassBox>
            <h2 className="login-title">Context Entry</h2>
            <div className="context-fee-box">
              <h3>$10.00</h3>
              <p>
                Contest Fee <span className="greenColor">Received</span>
              </p>
            </div>
            <div className="total-competitors-div">
              <p>
                <span className="whiteColor-80">Total Competitors</span>: {data?.length || 0}
              </p>
              <Link to={"/previous-match"} className="whiteColor-80">
                Previous Match
              </Link>
            </div>
            <div className="challenge-boxes glass-bg custon-scroll">
              {data.map((item, index) => (
                <ChallengeBox
                  image={item?.profilePicture}
                  name={item?.username}
                  email={item.email}
                  key={index}
                  onChallenge={() => handleChallenge(item)} // Add challenge button
                />
              ))}
            </div>
          </GlassBox>
        </div>

        {/* Challenge Popup */}
        {showChallengePopup && (
          <div className="challenge-popup">
            <div className="popup-content">
              <h3>{challenger} has challenged you!</h3>
              <button onClick={() => handleChallengeResponse("accept")}>Accept</button>
              <button onClick={() => handleChallengeResponse("reject")}>Reject</button>
            </div>
          </div>
        )}
      </FullScreenBG>
    </DefaultLayout>
  );
};

export default ContextEntry;