function Prog({queNum , queIndex ,answer }){
  return(
    <>
      <progress className="pr" max={queNum} value={queIndex + Number(answer !== null)} />

    </>
  )
}
export default Prog ;