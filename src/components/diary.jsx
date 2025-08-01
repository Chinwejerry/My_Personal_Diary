import { useState, useEffect } from "react";

export const Diary = () => {
  const [savedEntry, setSavedEntry] = useState(null);
  useEffect(() => {
    const stored = localStorage.getItem("diaryEntry");
    if (stored) {
      setSavedEntry(JSON.parse(stored));
    }
  }, []);

  return (
    <div>
      <div>
        <h1>My Diary</h1>
        <button className="bg-purple-600 p-3 h-15 m-4 ">+ Add Entry</button>

        {savedEntry && (
          <div
            style={{
              marginTop: "2rem",
              borderTop: "1px solid #ccc",
              paddingTop: "1rem",
            }}
          >
            <h3>{savedEntry.title}</h3>
            <p>{savedEntry.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};
