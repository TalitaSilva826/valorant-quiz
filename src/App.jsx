import { useState } from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

export default function App() {
  const [screen, setScreen] = useState("home"); // home | quiz | result
  const [resultKey, setResultKey] = useState("duelist");

  if (screen === "home") {
    return <Home onStart={() => setScreen("quiz")} />;
  }

  if (screen === "quiz") {
    return (
      <Quiz
        onExit={() => setScreen("home")}
        onFinish={(key) => {
          setResultKey(key);
          setScreen("result");
        }}
      />
    );
  }

  return (
    <Result
      resultKey={resultKey}
      onRestart={() => setScreen("home")}
    />
  );
}