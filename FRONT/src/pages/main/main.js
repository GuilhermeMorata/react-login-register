//paginas importadas...
import Headerman from './headermain/header'


function Main(...props){
   console.log(props)
   return(
       <div>
    <Headerman></Headerman>
      <span>OI</span>
       </div> 
    );
}

export default Main;