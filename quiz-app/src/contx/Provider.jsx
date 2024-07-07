import React, { createContext, useContext, useEffect, useReducer } from "react";

const CreatedContext = createContext();

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
  
  function Provider({ children }) {
  const init = {
    status: "loading",
    questions: [],
    bestScore: 0,
    queIndex: 0,
    points: 0,
    sec: 75,
    answer: null,
  };

  

  const [state, dispatch] = useReducer(reducer, init);

useEffect(function () {
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "fetchedData", payload: data }))
      .catch((err) => dispatch({ type: "error", payload: err }));
  }, []);

  const queNum = questions.length;

  return (
    <CreatedContext.Provider value={{state, dispatch , queNum}}>
      {children}
    </CreatedContext.Provider>
  );
}

function useCon() {
  const con = useContext(CreatedContext);
  if (!con) {
    throw new Error("useCon must be used within a TheProvider");
  }
  return con;
}

export { Provider, useCon };
