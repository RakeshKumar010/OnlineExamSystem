import Link from 'next/link'

import './Navbar.css'

const Navbar = () => {

  return (
    
    <>
    <div className="navbar">
        <ul>
                <li className='firstList'>
                    <Link href='/allSection'>All section</Link>
                </li>
                <li>
                    <Link href='/physics'>PHYSICS</Link>
                </li>
                <li>
                    <Link href='/chymistry'>CHEMISTRY</Link>
                </li>
                <li>
                    <Link href='/math'>MATH</Link>
                </li>
               
        </ul>
    </div>
    </>
  )
}

export default Navbar