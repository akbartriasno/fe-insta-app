const updateUser = (dataUser) => ({
    type: 'update/user',
    user: dataUser
}) 

const updateAccessToken = (accessToken) => ({
    type: 'update/token',
    accessToken: accessToken
})


const reset = () => ({
    type: 'clearState'
})

export {updateUser, updateAccessToken, reset}