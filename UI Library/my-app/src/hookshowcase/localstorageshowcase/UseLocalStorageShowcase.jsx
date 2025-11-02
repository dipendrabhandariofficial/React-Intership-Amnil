import React, { useState } from "react";
import ShowcaseContainer from "../../showcase/ShowcaseContainer";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./UseLocalStorageShowcase.css";
import { Button } from "../../components/button/Button";

export default function UseLocalStorageShowcase() {
  const usageCode1 = `import useLocalStorage from "./useLocalStorage";

function Example() {
  const { value: user, setValue, addValue, removeItem } = 
    useLocalStorage("user", { name: "", email: "" });

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => setValue({ name: "Dipendra", email: "dip@example.com" })}>
        Save User
      </button>
      <button onClick={() => addValue({ email: "new@example.com" })}>
        Add Email
      </button>
      <button onClick={removeItem}>Remove User</button>
    </div>
  );
}`;

  // ------------------- USAGE CODE 2 -------------------
  const usageCode2 = `import useLocalStorage from "./useLocalStorage";

function ThemeExample() {
  const { value: theme, setValue: setTheme } = useLocalStorage("theme", "light");

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("auto")}>Auto</button>
    </div>
  );
}`;

  // ------------------- DEMO 1: User -------------------
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const {
    value: user,
    setValue: setUser,
    addValue: addUserProp,
    removeItem: removeUser,
  } = useLocalStorage("demo-user", { name: "", email: "" });

  const saveUser = () => {
    if (!userName) return;
    setUser({ name: userName, email: userEmail });
    setUserName("");
    setUserEmail("");
  };

  const addEmailToUser = () => {
    if (!userEmail) return;
    addUserProp({ email: userEmail });
    setUserEmail("");
  };

  // ------------------- DEMO 2: Theme -------------------
  const { value: theme, setValue: setTheme } = useLocalStorage(
    "demo-theme",
    "light"
  );

  return (
    <div className="ls-showcase-container">
      <h2 className="ls-showcase-title">useLocalStorage Hook</h2>

      <p className="ls-showcase-intro">
        <code>useLocalStorage</code> is a React hook that syncs state with the
        browser's localStorage. It simplifies saving, updating, and removing
        persistent data (like user preferences or app settings) while providing
        a familiar React state interface.
      </p>

      {/* ---------- Showcase 1: User Object ---------- */}
      <ShowcaseContainer title="Usage 1: User Object" code={usageCode1}>
        <div className="ls-demo">
          <div className="ls-demo-left">
            <div className="ls-input-group">
              <label className="ls-label">Name</label>
              <input
                className="ls-input"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter name"
              />
            </div>
            <div className="ls-input-group">
              <label className="ls-label">Email</label>
              <input
                className="ls-input"
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>

            <div className="ls-actions">
              <Button onClick={saveUser} colorScheme="blue">
                Save User (Replace)
              </Button>
              <Button onClick={addEmailToUser} colorScheme="green">
                Add Email (Merge)
              </Button>
              <Button onClick={removeUser} colorScheme="red">
                Remove User
              </Button>
            </div>
          </div>

          <div className="ls-demo-right">
            <h4 className="ls-section-title">Current User Data</h4>
            <pre className="ls-pre">{JSON.stringify(user, null, 2)}</pre>
          </div>
        </div>
      </ShowcaseContainer>

      {/* <ShowcaseContainer title="Usage 2: Theme Preference" code={usageCode2}>
        <div className="ls-demo ls-demo-simple">
          <div className="ls-theme-selector">
            <label className="ls-label">Select Theme</label>
            <div className="ls-theme-buttons">
              <Button
                onClick={() => setTheme("light")}
                colorScheme={theme === "light" ? "blue" : "gray"}
              >
                Light
              </Button>
              <Button
                onClick={() => setTheme("dark")}
                colorScheme={theme === "dark" ? "blue" : "gray"}
              >
                Dark
              </Button>
              <Button
                onClick={() => setTheme("auto")}
                colorScheme={theme === "auto" ? "blue" : "gray"}
              >
                Auto
              </Button>
            </div>
            <p className="ls-theme-display">
              {" "}
              //if its dark change to dark here Current theme:{" "}
              <strong>{theme}</strong>
            </p>
          </div>
        </div>
      </ShowcaseContainer> */}

      {/* Best Practices Section */}
      <div className="ls-best-practices-section">
        <h2 className="ls-best-practices-title">Best Practices</h2>
        <div className="ls-best-practices-grid">
          <div className="ls-dos-card">
            <h3 className="ls-card-header-do">✓ Do</h3>
            <ul className="ls-dos-list">
              <li>
                Store small, non-sensitive data (preferences, UI state, form
                drafts)
              </li>
              <li>Use consistent data shapes with proper TypeScript types</li>
              <li>
                Provide sensible default values via initialValue parameter
              </li>
              <li>Handle parse/stringify errors gracefully (hook does this)</li>
              <li>
                Use <code>setValue</code> to replace entire value
              </li>
              <li>
                Use <code>addValue</code> to merge objects or append to arrays
              </li>
              <li>
                Test in private/incognito mode where localStorage might be
                disabled
              </li>
            </ul>
          </div>

          <div className="ls-donts-card">
            <h3 className="ls-card-header-dont">✗ Don't</h3>
            <ul className="ls-donts-list">
              <li>
                Store sensitive information (passwords, auth tokens, API keys)
              </li>
              <li>
                Save very large data (5MB) prefer IndexedDB or server storage
              </li>
              <li>
                Assume localStorage is always available (SSR, privacy modes)
              </li>
              <li>
                Store functions or circular references (not JSON-serializable)
              </li>
              <li>
                Rely on localStorage for cross-tab sync without event listeners
              </li>
              <li>Use it as a database replacement for complex queries</li>
              <li>
                Forget that localStorage is domain-specific and persistent
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
