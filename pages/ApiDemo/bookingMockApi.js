class BookingMockApi {

    constructor(page) {
        this.page = page;
    }

    async mockGetAllBookings() {
        await this.page.route('**/booking', async (route) => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify([{ bookingid: 1 },{ bookingid: 2 },{ bookingid: 3 }])
            });
        });
    }

    async mockBookingNotFound() {
        await this.page.route('**/booking/1', async (route) => {
            await route.fulfill({
                status: 404,
                contentType: 'application/json',
                body: JSON.stringify({
                    message: 'Booking Not Found'
                })
            });
        });
    }

}

module.exports = { BookingMockApi };