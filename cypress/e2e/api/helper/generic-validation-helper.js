export default class GenericValidation {
    http200Validations(httpResponse) {
        expect(httpResponse.status).to.eq(200)
        expect(httpResponse.isOKStatusCode).to.eq(true)
        expect(httpResponse.statusText).to.eq('OK')
    }

    http201Validations(httpResponse) {
        expect(httpResponse.status).to.eq(201)
        expect(httpResponse.isOKStatusCode).to.eq(true)
        expect(httpResponse.statusText).to.eq('Created')
    }

    http204Validations(httpResponse) {
        expect(httpResponse.status).to.eq(204)
        expect(httpResponse.isOKStatusCode).to.eq(true)
        expect(httpResponse.statusText).to.eq('No Content')
    }

    http400Validations(httpResponse) {
        expect(httpResponse.status).to.eq(400)
        expect(httpResponse.isOKStatusCode).to.eq(false)
        expect(httpResponse.statusText).to.eq('Bad Request')
    }

    http500Validations(httpResponse) {
        expect(httpResponse.status).to.eq(500)
        expect(httpResponse.isOKStatusCode).to.eq(false)
        expect(httpResponse.statusText).to.eq('Internal Srver Error')
    }
}