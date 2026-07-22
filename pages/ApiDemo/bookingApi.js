const config = require('../../playwright.config');

class BookingApi {
    constructor(request) {
        this.request = request;
    }

    endpoints = {
        getAllBookings: '/booking',
        getBookingById: (id) => `/booking/${id}`,

        createBooking: '/booking',

        createToken: '/auth',
        updateBooking: (id) => `/booking/${id}`,

        partialUpdateBooking: (id) => `/booking/${id}`,

        deleteBooking: (id) => `/booking/${id}`

    };

    async getAllBookings() {
        return await this.request.get(`${config.use.demoApiUrl}${this.endpoints.getAllBookings}`
        );
    }

    async getBookingById(id) {
        return await this.request.get(`${config.use.demoApiUrl}${this.endpoints.getBookingById(id)}`
        );
    }

    async createBooking(payload) {
        return await this.request.post(`${config.use.demoApiUrl}${this.endpoints.createBooking}`,
            {
                data: payload
            }
        );
    }

    async createToken(payload) {               // POST Create Token
        return await this.request.post(`${config.use.demoApiUrl}${this.endpoints.createToken}`,
            {
                data: payload
            }
        );
    }

    async updateBooking(id, token, payload) {
        return await this.request.put(`${config.use.demoApiUrl}${this.endpoints.updateBooking(id)}`,
            {
                headers: {
                    Cookie: `token=${token}`
                        },
                data: payload
            }
        );
        }

    async partialUpdateBooking(id, token, payload) {
    return await this.request.patch(`${config.use.demoApiUrl}${this.endpoints.partialUpdateBooking(id)}`,
        {
            headers: 
            {
                Cookie: `token=${token}`
            },
            data: payload
        }
    );
    }

    async deleteBooking(id, token) {
    return await this.request.delete(`${config.use.demoApiUrl}${this.endpoints.deleteBooking(id)}`,
        {
            headers: 
            {
                Cookie: `token=${token}`
            }
        }
    );
    }

}

module.exports = { BookingApi };