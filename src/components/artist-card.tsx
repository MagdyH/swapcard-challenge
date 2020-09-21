import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import artistAction from '../redux/actions/artistAction';
import noImage from '../no-image.jpg';


export function ArtistCard(props: any) {
    return (
        <>
                <div className="card card-layout">
                    <img src={(props.artist.mediaWikiImages && props.artist.mediaWikiImages[0]?.url) ? props.artist.mediaWikiImages[0]?.url : noImage} className="card-img-top img-card" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.artist.name}</h5>
                        <Rating name="half-rating"
                            defaultValue={props.artist.rating?.value ? props.artist.rating?.value : 0}
                            precision={props.artist.rating?.value ? props.artist.rating?.value : 0.5}
                            readOnly={true} />
                        <p className="card-text">{props.artist.country ? props.artist.country:"N/A"}</p>
                        <Link to={{ pathname: "/artist-details", state: props.artist }} className={'see-details'} onClick={() => {
                            props.artistAction.setSelectedArtist(props.artist);
                        }} >See Details</Link>
                    </div>
                </div>
        </>
    )
}

function mapDispatcherToProps(dispatch: any) {
    return {
        artistAction: bindActionCreators(artistAction, dispatch)
    }
}
export default connect(null, mapDispatcherToProps)(ArtistCard);