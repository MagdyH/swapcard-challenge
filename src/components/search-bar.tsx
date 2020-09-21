import React from 'react';
import Search from './search';
import { Link } from 'react-router-dom';
import logo from '../logo_swapcard.svg';

export default function SearchBar(props: any) {

    return (
        <>
            <nav className="navbar navbar-expand-lg justify-content-between search-bar">
                <div className="collapse navbar-collapse">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="150" height="30" className="d-inline-block align-top" alt="" />
                    </a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link nav-text" to="/">Home</Link>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <Search />
                    </form>
                </div>
            </nav>
        </>
    )
}
