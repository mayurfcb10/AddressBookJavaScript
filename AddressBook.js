
class ContactDetails {

    // property
    firstName;
    lastName;
    address;
    city;
    state;
    email;
    zip;
    phoneNumber;

    // Constructor
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.email = params[5];
        this.zip = params[6];
        this.phoneNumber = params[7];
    }

    // getters and setters
    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = this.firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = this.lastName;
    }

    get address() {
        return this._address;
    }

    set address(address) {
        this._address = this.lastName;
    }

    get city() {
        return this._city;
    }

    set city(city) {
        this._city = this.city;
    }

    get state() {
        return this._state;
    }

    set state(state) {
        this._state = this.state;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = this.email;
    }

    get zip() {
        return this._zip;
    }

    set zip(zip) {
        this._zip = this.zip;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber) {
        this._phoneNumber = this.phoneNumber;
    }

    toString() {
        return 'FirstName: ' + this.firstName + ', LastName: ' + this.lastName + ', Address: ' + this.address +
            ', City: ' + this.city + ', State: ' + this.state + ', Email: ' + this.email + ', Zip: ' + this.zip + ', PhoneNumber: ' + this.phoneNumber;
    }
}

let contactDetails = new ContactDetails('Mayur', 'Zope', 'Housing', 'Pithampur',
    'MP', 'm@gmail.com', '545454', '8686886860');

console.log(contactDetails.toString());