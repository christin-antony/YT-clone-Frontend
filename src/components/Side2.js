import React from 'react'
import './Side2.css'
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";


import { SiYoutubeshorts } from "react-icons/si";

const Side2 = () => {
    return (
        <div className='SSdiv00'>
            <div className='SSdiv0'>
                <div className='SSdiv11'>
                    <HomeIcon className='SSicon1' />
                    <p className='SSp1'>Home</p>


                </div>
                <div className='SSdiv1'>
                <SiYoutubeshorts className='SSicon' />
                    <p className='SSp1'>Shorts</p>

                </div>
                <div className='SSdiv1'>

                    <SubscriptionsIcon className='SSicon' />
                    <p className='SSp1'>Subscription</p>

                </div>
                <div className='SSdiv1'>
                    <VideoLibraryIcon className='SSicon' />

                    <p className='SSp1'>You</p>

                </div>
                <div className='SSdiv1'>
                    <HistoryIcon className='SSicon' />

                    <p className='SSp1'>History</p>

                </div>

            </div>
        </div>
    )
}

export default Side2