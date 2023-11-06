import {Link, withRouter} from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
import './index.css'

const Header = () => {
  return (
    <nav className="header-container">
      <div className="header-responsive">
        <Link to="/" className="home-link">
          <h1 className="page-heading"> movieDB </h1>
        </Link>
        <div className="search-container">
          <input type="search" className="search-bar" placeholder="Search.." />
          <button type="button" className="search-btn">
            <BiSearch />
          </button>
        </div>
        <ul className="nav-items-container">
          <li>
            <Link to="/" className="nav-item">
              {' '}
              Popular{' '}
            </Link>
          </li>
          <li>
            <Link to="/top-rated" className="nav-item">
              {' '}
              Top Rated{' '}
            </Link>
          </li>
          <li>
            <Link to="/upcoming" className="nav-item">
              {' '}
              Upcoming{' '}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
