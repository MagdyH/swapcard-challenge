import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import artistAction from '../redux/actions/artistAction';
import noImage from '../no-image.jpg';
import { ToastProvider, useToasts } from 'react-toast-notifications'

export function ArtistDetails(props: any) {

    const [selectedArtist, setSelectedArtist] = useState();
    const { addToast } = useToasts();
    const { state } = props.location;
    useEffect(() => {
        setSelectedArtist(state);
    })
    let isFavorite = props.favorites.filter((favor: any) =>
        favor.id === props.selectedArtist?.id
    )[0];
    return (
        <div className="container">
            {props.selectedArtist && <>
                <div className="summary">
                    <div className="row">
                        <div className="col-4">
                            <img className="img-details" src={(props.selectedArtist.mediaWikiImages && props.selectedArtist.mediaWikiImages[0]?.url) ? props.selectedArtist.mediaWikiImages[0]?.url : noImage} alt="..." />
                        </div>
                        <div className="col-4 bio">
                            <h5 className="card-title">{props.selectedArtist.name}</h5>
                            <Rating name="half-rating"
                                defaultValue={props.selectedArtist.rating?.value ? props.selectedArtist.rating?.value : 0}
                                precision={props.selectedArtist.rating?.value ? props.selectedArtist.rating?.value : 0.5}
                                readOnly={true} />
                            <p className="card-text">{props.selectedArtist.country ? props.selectedArtist.country : "N/A"}</p>
                        </div>
                        <div className="col-4 bio">
                            {
                                isFavorite ? <button className="btn remove-favorite" onClick={() => {
                                    props.artistAction.removeFromFavorite(props.selectedArtist);
                                }}>Remove from favorites <span className="fa fa-star checked"></span>
                                </button>
                                    : <button className="btn add-to-favorite" onClick={() => {
                                        props.artistAction.addToFavorite(props.selectedArtist);
                                        addToast(`${props.selectedArtist.name} has been added to your favorites`, { appearance: 'success' });
                                    }}>Add to favorites <span className="fa fa-star"></span>
                                    </button>
                            }

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="releases">
                        <table className="table table-striped">
                            <thead>
                                <td>title</td>
                                <td>date</td>
                                <td>quality</td>
                                <td>packaging</td>
                                <td>barcode</td>
                                <td>country</td>
                            </thead>
                            <tbody>
                                {
                                    props.selectedArtist.releases?.nodes.map((release: any) => (
                                        <tr key={release.id}>
                                            <td>{release.title}</td>
                                            <td>{release.date}</td>
                                            <td>{release.quality}</td>
                                            <td>{release.packaging}</td>
                                            <td>{release.barcode}</td>
                                            <td>{release.country}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>}
        </div>
    )
}

function mapStatetoProps({ artistReducer }: any) {
    return {
        favorites: artistReducer.favorites,
        selectedArtist: artistReducer.selectedArtist
    }
}
function mapDispatcherToProps(dispatch: any) {
    return {
        artistAction: bindActionCreators(artistAction, dispatch)
    }
}
export default connect(mapStatetoProps, mapDispatcherToProps)(ArtistDetails);