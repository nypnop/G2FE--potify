var client_id = process.env.REACT_APP_SPOTIFY_KEY;
var redirect_uri = 'http://localhost:3000';


var scope = ['playlist-modify-private','playlist-read-private'];

var url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
url += '&show_dialog=' + encodeURIComponent(true);

export const auth=url;