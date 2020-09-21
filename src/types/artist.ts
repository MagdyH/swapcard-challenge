interface Artist {
    id:string;
    mbid:string;
    name:string;
    country:string;
    mediaWikiImages:WikiImage;
    rating:Rate;
    releases:release
}

interface WikiImage{
    url:string;
    descriptionURL:string;
}

interface Rate {
    value:string
}

interface release {
    nodes:releaseNode[];
}

interface releaseNode {
    id:string
    title:string
    date:string
    quality:string
    packaging:string
    barcode:string
    country:string
}

export default Artist;