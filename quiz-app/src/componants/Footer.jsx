import Time from "./Time"
import Next from "./Next"
import Finish from "./Finish"
import "../App.css"
export default function Footer({answer , queIndex ,queNum , dispatch , sec}) {
  return (
    <>
    <Time dispatch={dispatch} sec={sec}/>
            {answer !== null && queIndex !== queNum - 1 ? (
              <Next dispatch={dispatch}  />
            ) : answer !== null && queIndex === queNum - 1 ? (
              <Finish dispatch={dispatch} />
            ) : null}
    </>
  )
}
