import {faker} from '@faker-js/faker'

const envName = Cypress.env('envName')

 export default class RandomDataGenerator {
    static generateRandomNumber(minValue = 1, maxValue = 10000) {
        return faker.random.number({min: minValue, max: maxValue})
    }

    static generateEmail() {
        //Emails to be deleted by DB JOb
        return `${envName}-${faker.random.word()}-${this.generateUUID().substring(3,12)}@rrangiloaqtestauto.com`
    }

    static generateCustomerName() {
        return `${envName}-AutomationCustomer ${faker.customer.customerName(1)} QATEST`
    }

    static generateFirstName() {
        return faker.name.firstName()
    }

    static generateMiddleName() {
        return faker.name.middleName()
    }

    static generateLastName() {
        return faker.name.lastName()
    }

    static generateStreetName() {
        return faker.name.streetName()
    }

    static generateCityName() {
        return faker.address.city
    }

    static generatePhoneNumber() {
        return faker.phone.PhoneNumber('+91##########')
    }

    static generateUUID() {
        return faker.datatype.uuid()
    }

    static generateAccountNumber() {
        return faker.finance.accountNumber()
    }

    /**
     * Takes a number of year and adds it to the current date
     * Result is in the format DD MM YYYY (ie. 24 Apr 2024)
     * To use with Datepickers
     * @param yearsFromNow {int}
     * @constructor
     * @returns current date + a number of years given by parameters
     */

    static generateFutureDate(yearsFromNow, customDateFormat=null) {
        return this.#generateDate(true, yearsFromNow, customDateFormat)
    }

    static generatePastDate(yearsQuantity, customDateFormat = null) {
        return this.#generateDate(false, yearsQuantity, customDateFormat)
    }

    static #generateDate(isFutureDate, yearsQuantity, customDateFormat) {
        const dateModified = new Date()
        const currentYear = dateModified.getFullYear()
        if(isFutureDate) dateModified.setFullYear(currentYear + yearsQuantity)
        else dateModified.setFullYear(currentYear - yearsQuantity)

        dateModified.setDate(Math.floor(Math.random() * 25))
        dateModified.setMonth(Math.floor(Math.random() * 7))

        if(customDateFormat == null) {
            return dateModified
                .toLocaleDateString('en-GB', {
                    weekday: undefined,
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                })
                .replace(',', '')
        } else {
            return dateModified.toLocaleTimeString(
                customDateFormat.countryCode,
                customDateFormat.format
            )
        }
    }

    static convertToFullDate(inputDate) {
        let date = new Date(inputDate)
        let year = date.getFullYear()
        let month = (date.getMonth()+1).toString().padStart(2,'0')
        let day = date.getDate().toString.padStart(2, '0')
        return `${year}-${month}-${day}T00:00:00`
    }

    static generateDefaultFormatCurrency(number) {
        const formattedCurrency = number.toLocalString ('en-IND', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: true
        }).replace(',', ' ').replace('.', ',')

        return formattedCurrency
    }
 }