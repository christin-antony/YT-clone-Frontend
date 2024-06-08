import React from "react";
import "./Side.css";
import image2 from "./image/youtube.png";
import image3 from "./image/music.png";
import { SiYoutubekids } from "react-icons/si";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import FeedbackIcon from "@mui/icons-material/Feedback";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SensorsIcon from "@mui/icons-material/Sensors";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const Side = () => {
  
  return (
    <div className="Sdiv0">
      <div className="Sdiv1">
        <div className="Sdiv11">
          <div className="Sdiv22">
          
            <HomeIcon className="SiconA" />
            <p className="Sp1">Home</p>
          </div>

          <div className="Sdiv2">
            <SubscriptionsIcon className="Sicon" />
            <p className="Sp1">Subscription</p>
          </div>
        </div>
        <div className="Sdiv11">
          <div className="Sdiv2">
            <VideoLibraryIcon className="Sicon" />
            <p className="Sp1">You</p>
          </div>
          <div className="Sdiv2">
            <HistoryIcon className="Sicon" />
            <p className="Sp1">History</p>
          </div>
        </div>
        <div className="Sdiv11">
          <p className="Sp2">
            Sign in to like videos, <br /> comment ansd Subscrib.
          </p>
          <div className="profile">
            <i className="fa-regular fa-user i1"></i>
            <p className="Hp1">sign in</p>
          </div>
        </div>
        <div className="Sdiv11">
          <h1 className="Sh1">Explore</h1>
          <div className="Sdiv2">
            <WhatshotIcon className="Sicon" />
            <p className="Sp1">Trending</p>
          </div>
          <div className="Sdiv2">
            <ShoppingBagIcon className="Sicon" />
            <p className="Sp1">Shopping</p>
          </div>
          <div className="Sdiv2">
            <MusicNoteIcon className="Sicon" />
            <p className="Sp1">Music</p>
          </div>
          <div className="Sdiv2">
            <MovieCreationIcon className="Sicon" />
            <p className="Sp1">Movies</p>
          </div>
          <div className="Sdiv2">
            <SensorsIcon className="Sicon" />
            <p className="Sp1">Live</p>
          </div>
          <div className="Sdiv2">
            <SportsEsportsIcon className="Sicon" />
            <p className="Sp1">Gaming</p>
          </div>
          <div className="Sdiv2">
            <NewspaperIcon className="Sicon" />
            <p className="Sp1">News</p>
          </div>
          <div className="Sdiv2">
            <i className="fa-solid fa-trophy SI"></i>
            <p className="Sp1">Sports</p>
          </div>
          <div className="Sdiv2">
            <LightbulbIcon className="Sicon" />
            <p className="Sp1">Courses</p>
          </div>
          <div className="Sdiv2">
            <PodcastsIcon className="Sicon" />
            <p className="Sp1">Podcasts</p>
          </div>
        </div>
        <div className="Sdiv11">
          <div className="Sdiv2">
            <ControlPointIcon className="Sicon" />
            <p className="Sp1">Browse channels</p>
          </div>
        </div>
        <div className="Sdiv11">
          <h1 className="Sh1">More from YouTube</h1>
          <div className="Sdiv2">
            <img src={image2} alt="" className="Simagey" />
            <p className="Sp1">Youtube Premium</p>
          </div>
          <div className="Sdiv2">
            <img src={image3} alt="" className="Simagey" />
            <p className="Sp1">Youtube Music</p>
          </div>
          <div className="Sdiv2">
          <SiYoutubekids className="Sicon1"  />
            <p className="Sp1">Youtube Kids</p>
          </div>
        </div >
        <div className="Sdiv11">
          <div className="Sdiv2">
            <SettingsIcon className="Sicon" />
            <p className="Sp1">Settings</p>
          </div>
          <div className="Sdiv2">
            {" "}
            <i className="fa-regular fa-flag SI"></i>
            <p className="Sp1">Report history</p>
          </div>
          <div className="Sdiv2">
            <HelpOutlineIcon className="Sicon" />
            <p className="Sp1">Help</p>
          </div>
          <div className="Sdiv2">
            <FeedbackIcon className="Sicon" />
            <p className="Sp1">Send feedback</p>
          </div>
        </div>

        <div >
          <p className="Sp3">
            About press Copyright <br /> Contact us Creators <br /> Advertise
            Developers{" "}
          </p>
          <p className="Sp3">
            Terms Privacy Policy & Safety <br /> How YouTube Works <br /> Test
            new features
          </p>
          <p className="Sp3">
            <span>
              <i class="fa-regular fa-copyright"></i>
            </span>{" "}
            2024 Google LLC
          </p>
        </div>
      </div>
    </div>
  );
};

export default Side;
