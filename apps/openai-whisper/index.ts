import axios from 'axios'
import 'dotenv/config'
import { Track, AccessToken, AudioFeatures } from 'spotify-types'
import { URLSearchParams } from 'url'
import { v4 as uuidv4 } from 'uuid'

const apiScope = ['playlist-read-private', 'user-read-private'].join(' ')

const main = async (): Promise<void> => {
  const tracks = await getLikedSongs()
  // const feature = await getAudioFeatures_Track('07A0whlnYwfWfLQy4qh3Tq')

  console.log(tracks)
}

const getLikedSongs = async (limit = 50, offset = 0, tracks = []): Promise<Track[]> => {
  const accessToken = await getAccessToken()

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/me/tracks?limit=${limit}&offset=${offset}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    )

    console.log(response.status)
    console.log(response.statusText)
  } catch (error) {
    console.log(`Error: ${error}`)
  }

  // if (!response.ok) {
  //   throw new Error(`HTTP Error: ${response.status}`)
  // }

  // const data = await response.json()
  // tracks.push(...data.items)

  // if (data.next) {
  //   return fetchAllSavedTracks(url, accessToken, limit, offset + limit, tracks)
  // }

  return tracks
}

const getAudioFeatures_Track = async (track_id: string): Promise<AudioFeatures> => {
  const access_token = await getAccessToken()

  const api_url = `https://api.spotify.com/v1/audio-features/${track_id}`
  try {
    const response = await axios.get<AudioFeatures>(api_url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    return response.data
  } catch (error) {
    console.log(error)
  }

  return {} as AudioFeatures
}

// const getAccessToken = async (): Promise<string> => {
//   const params = new URLSearchParams()
//   params.append('grant_type', 'client_credentials')
//   params.append('scope', apiScope)

//   const { CLIENT_ID, CLIENT_SECRET } = process.env
//   const base64Credentials = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')

//   const { data } = await axios.post<AccessToken>('https://accounts.spotify.com/api/token', params, {
//     headers: {
//       Authorization: `Basic ${base64Credentials}`,
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   })

//   if (!data.access_token) {
//     throw new Error('No access token')
//   }

//   console.log(`Fetched new access token: ${data.access_token}`)
//   return data.access_token
// }

const getAccessToken = async (): Promise<string> => {
  const state = uuidv4()
  res.
  return ''
}

main().catch(console.error)
