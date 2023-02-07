
import './legend.css'
// typeof document!=='undefined'
const Legend = ()=>{

// const hover = typeof document!=='undefined' && document.getElementsByClassName('hover').addEventListener("click", ()=>{
//     alert("hii")
// })



    return(<>
    <div className="main">
    <div className="legend">
        <p>Legend (Click to View)</p>
        <div className="lagendDiv">
        <div>4 Answer</div>
        <div>2 No Answer</div>
        <div>1 Review Answer</div>
        <div>1 Review Answer</div>
        <div>1 Dump</div>
        <div>No Visit</div>
        </div>
    </div>
    <div className="allquestion">
        <div className='popup'>10 All Question
        <span class="popuptext">
            <p>Question 1</p>
            <p>Question 2</p>
            <p>Question 3</p>
            <p>Question 4</p>
            <p>Question 5</p>
            <p>Question 6</p>
            <p>Question 7</p>
            <p>Question 8</p>
            <p>Question 9</p>
            <p>Question 10</p>
            </span></div>
        <button>Prolilc</button>
        <button>Insir</button>
        <button>Questions</button>
        <button>Submit</button>
    </div>
    </div>
    </>)
}

export default Legend;
