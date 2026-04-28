import { useState } from "react";

export default function App() {
  const [userA, setUserA] = useState("");
  const [userB, setUserB] = useState("");
  const [result, setResult] = useState("");

  const checkMatch = () => {
    if (!userA || !userB) {
      setResult("Both users must enter a feeling.");
      return;
    }

    if (userA.toLowerCase() === userB.toLowerCase()) {
      setResult("💞 It's a match! Feelings are mutual.");
    } else {
      setResult("🔒 Not revealed. Feelings are not aligned yet.");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center", fontFamily: "serif" }}>
      <h1>💖 Luvelle Love Sync</h1>

      <input
        placeholder="User A feeling"
        value={userA}
        onChange={(e) => setUserA(e.target.value)}
        style={{ margin: "10px", padding: "10px" }}
      />

      <input
        placeholder="User B feeling"
        value={userB}
        onChange={(e) => setUserB(e.target.value)}
        style={{ margin: "10px", padding: "10px" }}
      />

      <br />

      <button onClick={checkMatch} style={{ padding: "10px 20px" }}>
        Check Sync
      </button>

      <h3 style={{ marginTop: "20px" }}>{result}</h3>
    </div>
  );
}