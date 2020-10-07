const assert = require('chai').assert;
const CitiStartPage = require('../pageobjects/citi.start.page')
const SmartphoneGadgetPage = require('../pageobjects/smartphone.gadget.page')

describe('2 most expensive goods', () => {

    it('ep-1', ()=> {
        CitiStartPage.open();
        CitiStartPage.navigateCatalog('Смартфоны и гаджеты');
        SmartphoneGadgetPage.open();
        // TODO: all these explicit waits are wrong - should be replaced by wdio native waiters
        // + it'll be easier to implement having 'at-id' within html elms
        browser.pause(1 * 1000)
        SmartphoneGadgetPage.sortPrice();
        browser.pause(3 * 1000);
        SmartphoneGadgetPage.sortPrice();
        browser.pause(3 * 1000);
        SmartphoneGadgetPage.addToBasket(2);
        browser.pause(10 * 1000);

        // TODO: assert that 2 selected goods are in basket actually
    });
});


