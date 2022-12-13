describe('eMag.ro', () => {

    it('should have the correct page title', async () => {
       await browser.url('https://www.emag.ro');
       await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată');
    });


   it('should contain a login button', async () => {
       const loginButton = await $('#my_account');
       await expect(loginButton).toBeDisplayed();
    });


   it('should have correct Laptop url', async () => {
        const laptopButton = await $('.gtm_31vgamc');

        await laptopButton.click();
        await expect(laptopButton).toHaveUrl('https://www.emag.ro/laptop-tablete-telefoane/d?ref=hdr_menu_department_1');
    });


    it('should contain a cart button', async () => {
       const cartButton = await $('#my_cart');
       await expect(cartButton).toBeDisplayed();
    });


    it('should open eMag Genius page', async () => {
        const geniusButton = await $('[title="Genius"]');
        await geniusButton.click();
        await expect(browser).toHaveTitle('Genius: livrare gratuită și oferte exclusive pe eMAG, Tazz, Fashion Days și Freshful - eMAG.ro');
    });


    it('should have a working search', async () => {
        const searchBox = await $('#searchboxTrigger');
        const searchButton = await $('.searchbox-submit-button');

        await searchBox.setValue('Tricou polo');
        await searchButton.click();

        await expect(browser).toHaveTitle('Cauți Tricou polo? Alege din oferta eMAG.ro');
     });


   it('should select one product', async () => {
        const productButton = await $('//*[@id="card_grid"]/div[1]/div/div/div[3]/div/a/div[1]');
        await productButton.click();
     });


   it('should change the images of the product', async () => {
        const image0 = await $('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[1]');
        const image1 = await $('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[2]');
        const image2 = await $('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[3]');
        const image3 = await $('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[4]');
        const image4 = await $('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[5]');


        image0.elementHover('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[1]');
        image1.elementHover('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[2]');
        image2.elementHover('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[3]');
        image3.elementHover('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[4]');
        image4.elementHover('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[5]');
     });


   it('should add a product to cart', async () => {
        const cartButton = await $('.btn.btn-xl.btn-primary.btn-emag.btn-block.main-button.gtm_680klw.yeahIWantThisFamilyProduct');
        const favoriteButton = await $('.add-to-favorites.btn.btn-xl.btn-default.btn-icon.btn-block.gtm_t95ovv.add-to-favorites-family');
        
        await favoriteButton.click();
        await favoriteButton.waitForDisplayed();

        await cartButton.click();
        await cartButton.waitForDisplayed();
     });
});