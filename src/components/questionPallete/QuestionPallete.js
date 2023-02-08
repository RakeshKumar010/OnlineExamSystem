import './QuestionPallete.css'

const QuestionPallete = () => {
  return (
    <>
        <div className="questionpallete">
        <p className="heading">Question Pallete</p>
        <div className="quesbtn">
        <button className='green'>1</button>
        <button className='pink'>2</button>
        <button className='green'>3</button>
        <button className='green'>4</button>
        <button className='pink'>5</button>
        <button className='yellow'>6</button>
        <button className='green'>7</button>
        <button className='white'>8</button>
        <button className='purple'>9</button>
        <button className='gray' style={{padding:"5px 10px"}}>10</button>
        </div>
        </div>
    </>
  )
}

export default QuestionPallete