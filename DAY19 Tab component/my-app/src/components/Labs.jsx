import React from 'react'
import '../App.css';

const Labs = () => {
  const [activeTab, setActiveTab] = React.useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <div
          className={activeTab === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </div>
        <div
          className={activeTab === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </div>
        <div
          className={activeTab === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </div>
      </div>

      <div className="content-tabs">
        <div className={activeTab === 1 ? "content active-content" : "content"}>
          <h2>Content 1</h2>
          <hr />
          <p>Content for tab one.</p>
        </div>

        <div className={activeTab === 2 ? "content active-content" : "content"}>
          <h2>Content 2</h2>
          <hr />
          <p>Content for tab two.</p>
        </div>

        <div className={activeTab === 3 ? "content active-content" : "content"}>
          <h2>Content 3</h2>
          <hr />
          <p>Content for tab three.</p>
        </div>
      </div>
    </div>
  );
};

export default Labs;
