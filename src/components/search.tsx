import React, { useState, useRef } from 'react';
import { useQuery, gql } from '@apollo/client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import artistAction from '../redux/actions/artistAction';


const artists = gql`
  query artists($searchQuery: String!) {
    search {
      artists(query: $searchQuery) {
        nodes {
          id
          name
          mediaWikiImages{
            url
            descriptionURL
          }
          rating{
            value
          }
          country
          releases {
            nodes{
                id
                title
                date
                quality
                packaging
                barcode
                country
           }
           }
        }
        totalCount
      }
    }
  }
`;

export function Search(props: any) {

    const [searchQuery, setSearchQuery] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [isdirty, setIsdirty] = useState(false);
    const searchInput = useRef(null);
    const { loading, error, data } = useQuery(artists, {
        variables: { searchQuery },
    });

    props.artistAction.getArtistResult(data?.search?.artists?.nodes, loading, error, data?.search?.artists?.totalCount);

    return (
        <>
            <div className="search-container">
                <span className="search-icon">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </span>
                <input ref={searchInput}
                    className="search-input"
                    type="text"
                    placeholder="Search for Artist"
                    aria-label="Search"
                    //value={inputValue}
                    /*onChange={(event) => {
                        if (event.target.value.length > 0) {
                            setInputValue(event.target.value);
                        } else {
                            //setInputValue("");
                        }
                    }}*/
                    onKeyDown={(event: any) => {
                        if (event.keyCode === 13) {
                            setSearchQuery(event.target.value)
                        }
                    }} />

                {/*
                    (inputValue && inputValue !== '') &&
                    <button className="btn search-close-icon" onClick={(event) => {
                        setInputValue("");
                    }}>
                        &times;
                    </button>
                */}
            </div >
        </>
    )
}

function mapStatetoProps({ artistReducer }: any) {
    return {
        artists: artistReducer.artists
    }
}
function mapDispatcherToProps(dispatch: any) {
    return {
        artistAction: bindActionCreators(artistAction, dispatch)
    }
}
export default connect(mapStatetoProps, mapDispatcherToProps)(Search);