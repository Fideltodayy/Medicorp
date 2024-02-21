import ApiService from './ApiService'
export async function apiPostUser(data) {
    return ApiService.fetchData({
        url: '/user/add-user',
        method: 'post',
        data,
    })
}

export async function apiPostFarmer(data) {
    return ApiService.fetchData({
        url: '/farmer/add-farmer',
        method: 'post',
        data,
    })
}

export async function apiPostFactory(data) {
    return ApiService.fetchData({
        url: '/factory/add-factory',
        method: 'post',
        data,
    })
}

export async function apiGetSuppliers() {
    return ApiService.fetchData({
        url: '/supplier/get-suppliers',
        method: 'get',
    })
}
export async function apiGetRefreshToken(data) {
    return ApiService.fetchData({
        url: '/refresh-token',
        method: 'post',
        data,
    })
}

export async function apiLogin(data) {
    return ApiService.fetchData({
        url: '/login',
        method: 'post',
        data,
    })
}