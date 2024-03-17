import { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/Contextfile";
import { Code } from "react-content-loader";

const Main = () => {
  const {
    // prevprompt,
    // setprevprompt,
    onsent,
    recentprompt,
    // setrecentprompt,
    showResult,
    // setshowResult,
    loading,
    // setloading,
    resultData,
    // setresultData,
    input,
    setinput,
  } = useContext(AppContext);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.gemini_icon} alt="Gemini Icon" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>Hello Dev</p>
          <p>How can I help you today?</p>
        </div>

        {loading && <Code />}
        {!loading && showResult ? (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="Compass Icon" />
              <p>{recentprompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Compass Icon" />
              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            </div>
          </div>
        ) : (
          !loading && (
            <div className="cards">
              <div className="card" onClick={() => onsent("Brainstorm ten")}>
                <p>
                  Brainstorm ten names for an orange cat were adopting from the
                  shelter, with some nickname options as well.
                </p>
                <img src={assets.compass_icon} alt="Compass Icon" />
              </div>
              <div className="card" onClick={() => onsent("SQL Query")}>
                <p>Certainly! You can use the following SQL query.</p>
                <img src={assets.bulb_icon} alt="Bulb Icon" />
              </div>
              <div
                className="card"
                onClick={() => onsent("Vite vs CRA: React")}
              >
                <p>Vite vs CRA: React</p>
                <img src={assets.question_icon} alt="Question Icon" />
              </div>
              <div className="card" onClick={() => onsent("Mongo DB query")}>
                <p>Mongo DB query</p>
                <img src={assets.code_icon} alt="Code Icon" />
              </div>
            </div>
          )
        )}
      </div>
      <div className="main-bottom">
        <div className="search-box">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setinput(e.target.value);
            }}
            placeholder="Enter a prompt here?"
          />
          <div>
            <img src={assets.gallery_icon} alt="Gallery Icon" />
            <img src={assets.mic_icon} alt="Mic Icon" />
            <img
              src={assets.send_icon}
              alt="Send Icon"
              onClick={() => onsent(input)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
