// frontend/src/App.js
import React from 'react';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to Scriptu</h1>
                <p>Your scriptwriting companion. Start writing your script easily with Scriptu.</p>
                <button onClick={() => alert("Getting Started with Scriptu!")}>Get Started</button>
            </header>
            <footer>
                <p>&copy; 2025 Scriptu, All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;

