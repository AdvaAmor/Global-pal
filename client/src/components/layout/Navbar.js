import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul>
            <li>
                <Link to="/profiles">
                    Pal's
                </Link>
            </li>

            <li>
                <Link to="/search">
                    Search
                </Link>
            </li>

            <li>
                <Link to="/adminGroups"> 
                    Admin Groups
                </Link>
            </li>
            <li>
                <Link to="/Groups"> 
                    All Groups
                </Link>
            </li>
            <li>
                <Link to="/dashboard">
                    <i className="fas fa-user" />{' '}
                    <span className="hide-sm">My Profile</span>
                </Link>
            </li>
            <li>
                <Link to="/videocall"> 
                    Video
                </Link>
            </li>
            <li>
                <Link to="/messenger"> 
                    InBox
                </Link>
            </li>
            <li>
                <Link onClick={logout} to="/">
                    <i className="fas fa-sign-out-alt" />{' '}
                    <span className="hide-sm">Logout</span>
                </Link>
            </li>
        </ul>

    );
    const guestLinks = (
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>

    );


    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/"><i className="fas fa-code"></i> GlobalPal</Link>
            </h1>
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </nav>
    )
}
Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, { logout })(Navbar);
