import '../App.css';
 function Next({dispatch ,answer}) {
  return (
    <button className='btnn' onClick={()=>dispatch({type:"next"})}>Next</button>
  )
}
export default Next;
