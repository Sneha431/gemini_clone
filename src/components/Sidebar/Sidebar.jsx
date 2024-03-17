import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { AppContext } from "../../context/Contextfile";
import EllipsisText from "react-ellipsis-text";
const Sidebar = () => {
  const [extended, setextended] = useState(false);
  const { prevprompt, onsent, setshowResult } = useContext(AppContext);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          className="top"
          onClick={() => setextended(!extended)}
        />
        <div className="new-chat" onClick={() => setshowResult(false)}>
          <img src={assets.plus_icon} />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevprompt &&
              prevprompt.map((text, index) => (
                <div
                  className="recent-entry"
                  key={index}
                  onClick={() => onsent(text)}
                >
                  <img src={assets.message_icon} />

                  <EllipsisText text={text} length={10} />
                </div>
              ))}
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} />
          {extended ? <p>Activty</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
