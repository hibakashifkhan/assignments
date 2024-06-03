"use strict";
function make_album(artist_name, album_title, number_of_tracks) {
    const album = {
        artist: artist_name,
        title: album_title,
    };
    if (number_of_tracks !== undefined) {
        album.tracks = number_of_tracks;
    }
    return album;
}
// Create three different albums
const album1 = make_album('Pink Floyd', 'The Dark Side of the Moon');
const album2 = make_album('The Beatles', 'Abbey Road');
const album3 = make_album('Nirvana', 'Nevermind', 12);
// Print each album to show that the objects are storing the information correctly
console.log(album1);
console.log(album2);
console.log(album3);