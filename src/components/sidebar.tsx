import React, { useState } from 'react';
import { connect } from 'react-redux';

export function Sidebar(props: any) {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <>
            <div className="sidebar" onClick={() => {
                setShowSidebar(true);
            }}>
                favoritires <span className="fa fa-star"></span>
            </div>

            {
                showSidebar && <div className="nav-side">
                    <a href="#" className="closebtn" onClick={() => { setShowSidebar(false); }}>&times;</a>
                    {
                        props.favorites.length > 0 ? <ul className="favorite-list">

                            {
                                props.favorites.map((favor: any) => (
                                    <li key={favor.id} className="favorite-list-item">{favor.name}</li>
                                ))
                            }
                        </ul> : <span>No favoritires added</span>
                    }

                </div>
            }
        </>
    )
}

function mapStatetoProps({ artistReducer }: any) {
    return {
        favorites: artistReducer.favorites
    }
}

export default connect(mapStatetoProps, null)(Sidebar);