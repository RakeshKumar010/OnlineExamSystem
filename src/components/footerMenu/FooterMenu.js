import Link from 'next/link'
import './FooterMenu.css'

const FooterMenu = () => {
  return (
    <>
    
    <div className="footerMenu">
        <ul>
            <li>
                <Link rel="stylesheet" href="./menuFooter/CLear" >CLEAR RESPONSE</Link>
            </li>
            <li>
                <Link rel="stylesheet" href="./menuFooter/Review" >REVIEW</Link>
            </li>
            <li>
                <Link rel="stylesheet" href="./menuFooter/Dump" >DUMP</Link>
            </li>
            <li> 
                <Link rel="stylesheet" href="./menuFooter/Previous" >PREVIOUS</Link>
            </li>
            <li className='lastMenu'>
                <Link rel="stylesheet" href="./menuFooter/Next" >NEXT</Link>
            </li>
        </ul>
    </div>
    </>
  )
}

export default FooterMenu