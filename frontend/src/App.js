import React, { useState } from "react";

function App() {
  const [quote, setQuote] = useState("Click the button to get a quote!");

  const handleGetQuote = async () => {
    // 일단은 백엔드 연결 전이니까 임시로 랜덤 문구를 넣어 둘 수도 있어
    const dummyQuotes = [
      "The future depends on what you do today.",
      "Life is 10% what happens to us and 90% how we react to it.",
      "Do one thing every day that scares you.",
    ];
    const randomIndex = Math.floor(Math.random() * dummyQuotes.length);
    setQuote(dummyQuotes[randomIndex]);
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
