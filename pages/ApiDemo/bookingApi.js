const config = require('../../playwright.config');

class BookingApi {
    constructor(request) {
        this.request = request;
    }

    async getAllBookings() {
        return await this.request.get(`${config.use.demoApiUrl}/booking`);
    }

    async getBookingById(id) {
        return await this.request.get(`${config.use.demoApiUrl}/booking/${id}`);
    }

    async createBooking(payload) {
        return await this.request.post(`${config.use.demoApiUrl}/booking`,
            {
                data: payload
            }
        );
    }

    async createToken(payload) {
        return await this.request.post(`${config.use.demoApiUrl}/auth`,
            {
                data: payload
            }
        );
    }

    async updateBooking(id, token, payload) {
        return await this.request.put(`${config.use.demoApiUrl}/booking/${id}`,
            {
                headers: {
                    Cookie: `token=${token}`
                        },
                data: payload
            }
        );
        }

    async partialUpdateBooking(id, token, payload) {
    return await this.request.patch(`${config.use.demoApiUrl}/booking/${id}`,
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
    return await this.request.delete(`${config.use.demoApiUrl}/booking/${id}`,
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