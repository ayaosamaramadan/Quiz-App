import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./componants/Header.jsx";
import Loading from "./componants/Loading.jsx";
import Start from "./componants/Start.jsx";
import Error from "./componants/Error.jsx";
import TheQuistions from "./componants/TheQuistions.jsx";
import Score from "./componants/Score.jsx";
import Main from "./componants/Main.jsx";
import Prog from "./componants/Prog.jsx";
import Footer from "./componants/Footer.jsx";

const init = {
  status: "loading",
  questions: [],
  bestScore: 0,
  queIndex: 0,
  points: 0,
  sec: 75,
  answer: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "fetchedData":
      return { ...state, questions: action.payload, status: "ready" };

    case "start":
      return { ...state, status: "active" };

    case "reset":
      return {
        ...init,
        questions: state.questions,
        bestScore: state.bestScore,
        status: "ready",
      };
    case "next":
      return { ...state, queIndex: state.queIndex + 1, answer: null };
    case "newAnswer":
      const selectque = state.questions.at(state.queIndex);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === selectque.correctOption
            ? state.points + selectque.points
            : state.points,
      };
    case "finished":
      return {
        ...state,
        status: "finish",
        bestScore:
          state.points > state.bestScore ? state.points : state.bestScore,
      };
    case "error":
      return { ...state, status: "error" };

    case "time":
      return {
        ...state,
        sec: state.sec - 1,
        status: state.sec === 0 ? "finish" : state.status,
      };

    default:
      throw new Error("error in fetch data");
  }
}
export default function App() {
  const [
    { bestScore, sec, status, questions, answer, queIndex, points },
    dispatch,
  ] = useReducer(reducer, init);

  const queNum = questions.length;
  const max = questions.reduce((prev, cur) => prev + cur.points, 0);
  useEffect(function () {
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "fetchedData", payload: data }))
      .catch((err) => dispatch({ type: "error", payload: err }));
  }, []);
  return (
    <>
      <Header />
      <Main>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && <Start dispatch={dispatch} queNum={queNum} />}
        {status === "active" && (
          <>
            <Prog queNum={queNum} queIndex={queIndex} answer={answer} />

            <TheQuistions
            queNum={queNum}
            queIndex={queIndex}
              question={questions[queIndex]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer
              sec={sec}
              answer={answer}
              queIndex={queIndex}
              queNum={queNum}
              dispatch={dispatch}
            />
          </>
        )}

        {status === "finish" && (
          <Score
            points={points}
            queNum={queNum}
            max={max}
            bestScore={bestScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </>
  );
}
