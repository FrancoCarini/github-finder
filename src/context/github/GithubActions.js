import axios from "axios"

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })

  const res = await axios.get(`${GITHUB_URL}/search/users?${params}`)

  return res.data.items
}

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    axios.get(`${GITHUB_URL}/users/${login}`),
    axios.get(`${GITHUB_URL}/users/${login}/repos`),
  ])

  return {
    user: user.data,
    repos: repos.data,
  }
}
