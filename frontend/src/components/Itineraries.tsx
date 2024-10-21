import React, { useState } from "react";

interface Message {
  type: "user" | "bot";
  content: string;
}

const formatMessageContent = (content: string) => {
  // Bold text wrapped in *
  const boldedContent = content.replace(/\*(.*?)\*/g, "<strong>$1</strong>");

  // Split bullet points (assuming they are indicated with '- ' at the beginning of a line)
  const bulletPoints = boldedContent.split(/\n/g).map((line) => {
    if (line.startsWith("- ")) {
      return `<li>${line.substring(2)}</li>`; // Remove the '- ' and wrap it in <li>
    }
    return `<p>${line}</p>`; // Wrap regular lines in <p>
  });

  return `<ul>${bulletPoints.join("")}</ul>`; // Wrap bullet points in <ul>
};

const Itineraries: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Save the user's message to chat history
    const newMessage: Message = { type: "user", content: userInput };
    setChatHistory((prev) => [...prev, newMessage]);

    // Call the Gemini Model API
    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAhoVnKY0SDW3TiNSs579w34rPWGoFyEv8",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: userInput,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data); // Log the response to inspect its structure

      if (
        data.candidates &&
        data.candidates.length > 0 &&
        data.candidates[0].content &&
        data.candidates[0].content.parts.length > 0
      ) {
        const rawMessage = data.candidates[0].content.parts[0].text;
        const formattedMessage = formatMessageContent(rawMessage); // Format the message content

        const botMessage: Message = {
          type: "bot",
          content: formattedMessage,
        };

        // Update chat history with the bot's response
        setChatHistory((prev) => [...prev, botMessage]);
      } else {
        const errorMessage: Message = {
          type: "bot",
          content: "I couldn't understand the response. Please try again.",
        };
        setChatHistory((prev) => [...prev, errorMessage]);
      }

      setUserInput(""); // Clear the input field
    } catch (error) {
      console.error("Error fetching response:", error);
      const errorMessage: Message = {
        type: "bot",
        content: "There was an error with the API. Please try again.",
      };
      setChatHistory((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div
      id="impact-calculator"
      className="container mx-auto my-12 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-green-800">
        Green Travel Itineraries
      </h2>

      <div className="chat-box mb-4 border p-4 rounded-lg overflow-y-auto max-h-60">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${
              msg.type === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`p-2 rounded-lg ${
                msg.type === "user" ? "bg-white" : "bg-white"
              }`}
            >
              <strong>{msg.type === "user" ? "You" : "Travel Planner"}:</strong>{" "}
              <span
                dangerouslySetInnerHTML={{ __html: msg.content }}
              />
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Ask about travel itineraries..."
          className="flex-grow p-2 border rounded"
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-green-600 text-white rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Itineraries;
