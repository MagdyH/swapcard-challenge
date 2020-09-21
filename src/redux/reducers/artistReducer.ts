import InitiState from '../../types/initiState';
import Artist from '../../types/artist';
import ActionType from '../constants';

const initState: InitiState = {
    artists: [],
    favorites: [],
    error: {},
    selectedArtist: null,
    totalCount: 0

}

export default function artistReducer(state = initState, action: any) {
    switch (action.type) {
        case ActionType.GET_ARTIST_RESULT:
            return {
                ...state, artists: action.playload.artists,
                loading: action.playload.loading,
                error: action.playload.error,
                totalCount: action.playload.totalCount
            }
        case ActionType.ADD_TO_FAVORITE:
            return { ...state, favorites: [...state.favorites, action.playload] }
        case ActionType.REMOVE_FROM_FAVORITE:
            return { ...state, favorites: state.favorites.filter((favor: Artist) => favor.id !== action.playload.id) }
        case ActionType.SET_SELECTED_ARTIST:
            return { ...state, selectedArtist: action.playload }
        default:
            return state;
    }
}