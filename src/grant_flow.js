const clientId = process.env.REACT_APP_SPOTIFY_KEY
const redirectUri = 'http://localhost:3000'

const scope = ['playlist-modify-private', 'playlist-read-private']

let url = 'https://accounts.spotify.com/authorize'
url += '?response_type=token'
url += '&client_id=' + encodeURIComponent(clientId)
url += '&scope=' + encodeURIComponent(scope)
url += '&redirect_uri=' + encodeURIComponent(redirectUri)
url += '&show_dialog=' + encodeURIComponent(true)

export const auth = url
