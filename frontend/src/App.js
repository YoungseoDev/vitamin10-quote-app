import React, { useState } from "react";

function App() {
  const [quote, setQuote] = useState("Click the button to get a quote!");

  const handleGetQuote = async () => {
    try {
      const response = await fetch("http://localhost:5000/quote");
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
      setQuote("Failed to fetch quote from server.");
    }
  };
  

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Quote of the Day</h1>
      <p
        style={{
          marginTop: "20px",
          maxWidth: "400px",
          textAlign: "center",
          fontSize: "1.2rem",
        }}
      >
        {quote}
      </p>
      <button
        onClick={handleGetQuote}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Get Quote
      </button>
    </div>
  );
}

export default App;
