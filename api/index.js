export const API_HOST = process.env.NEXT_PUBLIC_DEVTEST_URL;

export const apiEndpoints = {
    users: {
        getAllUsers: `${API_HOST}/users`
    },
    urn: {
        checkUrn: `${API_HOST}/api/urn/validate`
    }
};
