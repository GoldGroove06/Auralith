import { create } from 'zustand'
import React, { useState, useRef } from 'react'

export const useSearchStore = create((set) => ({
    searchResults: [],
    setSearchResults: (results) => set({ searchResults: results }),
}))


function parseTidalSearchResponse(response) {
    const included = response.included || [];
    const data = response.data || [];

    // maps
    const artistsMap = {};
    const albumsMap = {};
    const artworksMap = {};

    // build lookup maps
    included.forEach((item) => {
        if (item.type === "artists") {
            artistsMap[item.id] = item;
        }

        if (item.type === "albums") {
            albumsMap[item.id] = item;
        }

        if (item.type === "artworks") {
            artworksMap[item.id] = item;
        }
    });

    // only tracks
    const tracks = included.filter(
        (item) => item.type === "tracks"
    );

    // parse tracks
    return tracks.map((track) => {
        const attrs = track.attributes;

        // artist
        const artistId =
            track.relationships?.artists?.data?.[0]?.id;

        const artist =
            artistsMap[artistId];

        // album
        const albumId =
            track.relationships?.albums?.data?.[0]?.id;

        const album =
            albumsMap[albumId];

        // artwork
        const artworkId =
            album?.relationships?.coverArt?.data?.[0]?.id;

        const artwork =
            artworksMap[artworkId];

        // best artwork url
        const artworkUrl =
            artwork?.attributes?.files?.find(
                (f) => f.meta.width === 640
            )?.href ||
            artwork?.attributes?.files?.[0]?.href ||
            null;

        return {
            id: track.id,

            title: attrs.title,

            isrc: attrs.isrc,

            duration: attrs.duration,

            explicit: attrs.explicit,

            artist: artist
                ? {
                    id: artist.id,
                    name: artist.attributes.name,
                }
                : null,

            album: album
                ? {
                    id: album.id,
                    title: album.attributes.title,
                    releaseDate:
                        album.attributes.releaseDate,
                }
                : null,

            artwork: artwork
                ? {
                    id: artwork.id,
                    url: artworkUrl,
                    files: artwork.attributes.files,
                }
                : null,
        };
    });
}

const search = async (searchQuery) => {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/vnd.api+json");
    myHeaders.append("Authorization", `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`);
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    console.log(typeof searchQuery)


    const res = await fetch(`https://openapi.tidal.com/v2/searchResults/${searchQuery}?explicitFilter=INCLUDE&countryCode=US&include=tracks,tracks.artists,tracks.albums,tracks.albums.coverArt`, requestOptions)
    const data = await res.json()

    const searchResult = await parseTidalSearchResponse(data)
    useSearchStore.getState().setSearchResults(searchResult)
    return searchResult

}

export default search