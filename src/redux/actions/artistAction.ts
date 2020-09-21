import ActionType from '../constants';
import Artist from '../../types/artist'

export const artistActions = {
    getArtistResult: (artists: Artist[], loading: any, error: any, totalCount: number) => {
        return { type: ActionType.GET_ARTIST_RESULT, playload: { artists, loading, error, totalCount } }
    },
    addToFavorite: (artist: Artist) => {
        return { type: ActionType.ADD_TO_FAVORITE, playload: artist }
    },
    removeFromFavorite: (artist: Artist) => {
        return { type: ActionType.REMOVE_FROM_FAVORITE, playload: artist }
    },
    setSelectedArtist: (artist: Artist) => {
        return { type: ActionType.SET_SELECTED_ARTIST, playload: artist }
    },
}
export default artistActions;