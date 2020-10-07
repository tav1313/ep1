const Page = require('./citi.base.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CitiStartPage extends Page {
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }

    navigateCatalog(name) {
        $('.main-navigation').$('a=' + name).click();
    }
}

module.exports = new CitiStartPage();
