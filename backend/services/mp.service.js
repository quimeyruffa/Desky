const axios = require("axios");

class PaymentService {
    constructor() {
        this.tokensMercadoPago = {
            prod: {},
            test: {
                access_token:
                    "TEST-5887101483840470-112022-6da1a8dcd186ee88a4978572f1ef296a-234027794"
            }
        };
        this.mercadoPagoUrl = "https://api.mercadopago.com/checkout";
    }

    async createPaymentMercadoPago() {
        const url = `${this.mercadoPagoUrl}/preferences?access_token=${this.tokensMercadoPago.test.access_token}`;

        const items = [
            {
                id: "1234",
                title: 'Desky Cowork',
                quantity: 1,
                currency_id: "ARS",
                unit_price: 15500,
            }
        ];

        const preferences = {
            items,
           
            back_urls: {
                "success": "http://localhost:3000/",
                "failure": "http://localhost:8080/feedback",
                "pending": "http://localhost:8080/feedback"
            },

            auto_return: "approved"
        };

        try {
            const request = await axios.post(url, preferences, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            console.log('holaaa soy request', request);
            return request.data;
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = PaymentService;
