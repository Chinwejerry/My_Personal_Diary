import { useState, useEffect } from "react";

export const Entry = () => {
  const [entry, setEntry] = useState({
    title: "",
    date: "",
    image: "",
    content: "",
  });
  const [savedEntry, setSavedEntry] = useState(null);

  // Loading saved data from localStorage when component mounts
  useEffect(() => {
    const savedEntry = localStorage.getItem("diaryEntry");
    if (savedEntry) {
      setEntry(JSON.parse(savedEntry));
    }
  }, []);
  // Save to localStorage whenever entry changes
  useEffect(() => {
    localStorage.setItem("diaryEntry", JSON.stringify(entry));
  }, [entry]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("diaryEntry", JSON.stringify(entry));
    setSavedEntry(entry); // Show the entry
    setEntry({ title: "", content: "", date: "" });
    console.log("Saved", entry);
  };
  return (
    <main className="flex justify-center items-center h-screen">
      <div className=" h-150 w-150">
        <h1 className="text-center text-3xl">Today's Diary</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 m-4  "
          action=""
        >
          <label className="text-xl">Title</label>
          <input
            className="border"
            type="text"
            name="title"
            id="title"
            value={entry.title}
            onChange={handleChange}
          />
          <label className="text-xl">Date</label>
          <input
            className="border"
            type="date"
            name="date"
            id="date"
            value={entry.date}
            onChange={handleChange}
          />
          <label className="">Upload Image</label>
          <input
            className="border"
            type="url"
            name="image"
            id="image"
            value={entry.image}
            onChange={handleChange}
          />
          <label className="text-xl">Content</label>
          <textarea
            className="border"
            name="content"
            id="content"
            value={entry.content}
            onChange={handleChange}
            placeholder="Write your thoughts..."
          ></textarea>
          <div className="flex justify-end gap-2">
            <button className="bg-amber-50 w-20 text-black" type="cancel">
              Cancel
            </button>
            <button
              onSubmit={handleSubmit}
              className="bg-purple-600 w-20"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
        {savedEntry && (
          <div
            style={{
              marginTop: "2rem",
              borderTop: "1px solid #ccc",
              paddingTop: "1rem",
            }}
          >
            <div className="h-50 w-50 text-center ">
              <h1 className="p-5 underline ">TODAYS DIARY</h1>
              <h3 className="border m-3">{savedEntry.title}</h3>
              <p className="border m-4">{savedEntry.date}</p>
              <p className="border m-4">{savedEntry.content}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
