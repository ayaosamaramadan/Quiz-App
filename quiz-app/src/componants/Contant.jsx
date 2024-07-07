import Prog from "./Prog";
import TheQuistions from "./TheQuistions";
import Footer from "./Footer";
function Contant({ queNum, queIndex, answer, question, dispatch, sec}) {
  return (
    <>
      <Prog queNum={queNum} queIndex={queIndex} answer={answer} />

      <TheQuistions
        queNum={queNum}
        queIndex={queIndex}
        question={question}
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
  );
}
export default Contant;
