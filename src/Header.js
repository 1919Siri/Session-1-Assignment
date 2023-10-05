import React from "react"
export default function Header()
{
    return(
        <React.Fragment>
            <div className="header1">
            <div className="header11">
            <h5>THE ONLINE CODING & DESIGN SCHOOL WITH A</h5> &nbsp;&nbsp;
                <div className="heart-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
</svg>
                </div>

            </div>
                <div className="sign-in">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                         <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                            <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>&nbsp;&nbsp;
                    <span style={{ fontSize: '15px', fontWeight: '700', marginLeft: '10px' }}>SIGN IN</span>
                </div>
            </div>
            <div className="header2">
                <div >
                    <a className="logo1" href="https://skillcrush.com/" >skillcrush</a>
                </div>
                <nav className="navigation">
                    <ul>
                        <li >BREAK INTO TECH PROGRAM</li>
                        <li >SKILL COURSES</li>
                        <li >STUDENT OUTCOMES</li>
                        <li >TUTION</li>
                        <li >BLOG</li>
                        <li >TECH JOBS DATABASE</li>
                    </ul>
                </nav>
                <div>
                    <a className="logo2" href="https://learn.skillcrush.com/skillcrush-free-bootcamp/">FREE CODING CAMP</a>
                </div>
            </div>
        </React.Fragment>
    )
}