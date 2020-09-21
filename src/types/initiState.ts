import Artist from './artist';

interface InitiState {
    artists: Artist[];
    favorites: Artist[];
    selectedArtist?: Artist | null;
    error: any,
    totalCount: number
}

export default InitiState;