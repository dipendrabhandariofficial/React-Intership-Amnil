import React, { useState } from "react";
import TabList from "./Tablist";
import "../App.css";

const Tabs = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabs = React.Children.toArray(children);

    return (
        <div className="container">
            <TabList>
                {tabs.map((tab, index) =>
                    React.cloneElement(tab, {
                        isActive: index === activeIndex,
                        onSelect: () => setActiveIndex(index),
                    })
                )}
            </TabList>

            <div className="content-tabs">
                {tabs.map((tab, index) => (
                    <div
                        className={activeIndex === index ? "content active-content" : "content"}
                    >
                        {tab.props.children}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
