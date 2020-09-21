import React from 'react';
import { connect } from 'react-redux';
import ArtistCard from './artist-card';
import Loader from 'react-loader-spinner';

export function SearchResult(props: any) {
    return (
        <div className={'container'}>
            {
                props.loading && <div className="loader"><Loader
                    type="Puff"
                    color="rgb(0, 204, 136)"
                    height={100}
                    width={100}
                    timeout={30000}

                /></div>
            }
            {
                props.artists?.length > 0 && <>
                    <div className={'row'}><span className={'total'}>Total Count:</span> {props.totalCount}</div>
                    <div className={'row'}>
                        {
                            props.artists?.map((artist: any) => (
                                <div className={'col-4'}>
                                    <ArtistCard artist={artist} />
                                </div>
                            ))
                        }
                    </div>
                </>
            }
            {
                props.error && <div className="no-result">
                    No Result found.
                </div>
            }
        </div>
    )
}

function mapStatetoProps({ artistReducer }: any) {
    return {
        artists: artistReducer.artists,
        loading: artistReducer.loading,
        error: artistReducer.error,
        totalCount: artistReducer.totalCount
    }
}

export default connect(mapStatetoProps, null)(SearchResult);