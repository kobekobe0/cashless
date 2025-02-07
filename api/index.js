export const API_HOST = process.env.NEXT_PUBLIC_API_URL

export const apiEndpoints = {
    users: {
        getAllUsers: `${API_HOST}/posts`
    }
}