import { Link } from "react-router-dom";

function Navigation({ onRouteChange }){
  return(
    <header className="sans-serif">
    <div >
      <div className="">
        <nav className="dt w-100 mw8 center">
          <div className="dtc w2 v-mid pa3">
            <a href="/" className="dib w2 h2 pa1 ba b--black-90 grow-large border-box">
            <svg
            className="link black-90 hover-black"
            data-icon="skull"
            viewBox="0 0 32 32"
            style={{fill: "currentcolor"}}
            >
            <title>
            skull icon
            </title>
            <path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 …" />
            </svg>
            </a>
          </div>
            <div className="dtc v-mid tr pa3">
              <Link to="/Doctors"> <a className="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3" href="/" onClick = {() => onRouteChange('home') }>
                Doctors
              </a></Link>
              <Link to="/Vasst"><a className="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3" href="/" onClick = {() => onRouteChange('home') }>
                Virtual Assistant
              </a></Link>
              <Link to="/About"><a className="f6 fw4 hover-black no-underline black-70 dn dib-l pv2 ph3" href="/" onClick = {() => onRouteChange('home') }>
                About
              </a></Link>
              <Link to="/Scheduler"><a className="f6 fw4 hover-black no-underline black-70 dn dib-l pv2 ph3" href="/" onClick = {() => onRouteChange('home') }>
                Scheduler
              </a></Link>
              <a className="f6 fw4 hover-black no-underline black-70 dib ml2 pv2 ph3 ba" href="/" onClick = {() => onRouteChange('signin') }>
                Sign Out
              </a>
            </div>
        </nav>
       </div>
      </div>

</header>
  );
}

export default Navigation;
