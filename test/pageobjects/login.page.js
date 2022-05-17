
const Page = require('./page');
class LoginPage extends Page{


    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#userNameId_input');
    }

    get inputPassword () {
        return $('#passwdId_input');
    }

    get btnSubmit () {
        return $('#SignIn');
    }


    get secPage () {
        return $('h1*=Unrecognized');
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.waitForDisplayed({ timeout: 5000 })
        await this.inputUsername.setValue(username);
        await this.inputPassword.waitForDisplayed({ timeout: 5000 })
        await this.inputPassword.setValue(password);
        await this.btnSubmit.waitForDisplayed({ timeout: 5000 })
        await this.btnSubmit.click();
        await this.secPage.waitForDisplayed({ timeout: 10000 })
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();