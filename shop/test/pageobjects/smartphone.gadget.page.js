const Page = require('./citi.base.page');

class SmartphoneGadgetPage extends Page {
    open () {
        return super.open('catalog/mobile/smartfony/')
    }

    navigateCatalog(name) {
        $('a=' + name).click();
    }

    sortPrice() {
        //$('//*[@data-name="price"]').
        $('span=цене').click();
    }

    addToBasket(num) {
        let elms = $$('.js--subcategory-product-item');

        // TODO: consider approach 'forEach'
        for (let i = 0; i < num; i++) {
            let addBtn = elms[i].$('.add_to_cart');
            addBtn.click();
            $('.js--popup-basket__close-btn').click();
        }
    }
}

module.exports = new SmartphoneGadgetPage();