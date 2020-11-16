
class ContactDetails {
    
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
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (firstNameRegex.test(firstName)) {
            this._firstName = this.firstName;
        } else
            throw 'FirstName should start with capital letter and alteast 3 characters';
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (lastNameRegex.test(lastName)) {
            this._lastName = this.lastName;
        } else
            throw 'LastName should start with capital letter and alteast 3 characters';
    }

    get address() {
        return this._address;
    }

    set address(address) {
        let addressRegex = RegExp('^[A-Za-z0-9 ]{4,}$');
        if (addressRegex.test(address)) {
            this._address = this.address;
        } else
            throw 'Address should have alteast 4 characters';
    }

    get city() {
        return this._city;
    }

    set city(city) {
        let cityRegex = RegExp('^[A-Za-z ]{4,}$');
        if (cityRegex.test(city)) {
            this._city = this.city;
        } else
            throw 'City should have alteast 4 characters';
    }

    get state() {
        return this._state;
    }

    set state(state) {
        let stateRegex = RegExp('^[A-Za-z ]{4,}$');
        if (stateRegex.test(state)) {
            this._state = this.state;
        } else
            throw 'State should have alteast 4 characters';
    }

    get email() {
        return this._email;
    }

    set email(email) {
        let emailRegex = RegExp("^[a-zA-Z0-9]{1,}[-+._][a-zA-Z0-9]{0,}@[a-zA-Z]{1,}.[a-zA-Z]{1,}.[a-zA-Z]*");
        if (emailRegex.test(email)) {
            this._email = this.email;
        } else
            throw 'Email should match the valid format';
    }

    get zip() {
        return this._zip;
    }

    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{3}?(\s)[0-9]{3}$');
        if (zipRegex.test(zip)) {
            this._zip = this.zip;
        } else
            throw 'Zip should match the valid format';
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[0-9]{2} [0-9]{10}$');
        if (phoneNumberRegex.test(zip)) {
            this._phoneNumber = this.phoneNumber;
        } else
            throw 'PhoneNumber should match the valid format';
    }

    toString() {
        return 'FirstName: ' + this.firstName + ', LastName: ' + this.lastName + ', Address: ' + this.address +
            ', City: ' + this.city + ', State: ' + this.state + ', Email: ' + this.email + ', Zip: ' + this.zip + ', PhoneNumber: ' + this.phoneNumber;
    }
}
