import React, { useState } from 'react';
import Main2 from './Main2';
import Main from './Main';
import Side from './Side';
import Side2 from './Side2';
import Header from './Header';
import './Home.css';

const Home = () => {
    const [currentComponent, setCurrentComponent] = useState("Side");
    const [isToggled, setIsToggled] = useState(false);

    const handleIconClick = () => {
        setCurrentComponent(currentComponent === "Side" ? "Side2" : "Side");
        setIsToggled(!isToggled);
    };

    return (
        <div className="main">
            <Header onIconClick={handleIconClick} />
            <div className="one">
                <div className={isToggled ? "two" : "two1"}>
                    {currentComponent === "Side" ? <Side2 /> : <Side/>}
                </div>
                <div className="three">
                    <Main isToggled={isToggled} />
                    <Main2 isToggled={isToggled} />
                </div>
            </div>
        </div>
    );
};

export default Home;
