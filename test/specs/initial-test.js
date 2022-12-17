describe('eMag.ro', () => {

    it('should have the correct page title', async () => {
      //Open the eMag.ro in Google browser
      await browser.url('https://www.emag.ro'); 

      //It is expected from that page to have a specific title
      await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată');
    });


   it('should contain a login button', async () => {
      const loginButton = await $('#my_account');

      //It is expected to be displayed the Login button
      await expect(loginButton).toBeDisplayed();
    });


   it('should have correct Laptop url', async () => {
      const laptopButton = await $('.gtm_31vgamc');

      //Click on the button of the section 'Laptop, Tablete & Telefoane'
      await laptopButton.click();

      //It is expected that button to have a specific URL
      await expect(laptopButton).toHaveUrl('https://www.emag.ro/laptop-tablete-telefoane/d?ref=hdr_menu_department_1');
    });


    it('should contain a cart button', async () => {
      const cartButton = await $('#my_cart');

      //It is expected Cart button to be displayed
      await expect(cartButton).toBeDisplayed();
    });


    it('should open eMag Genius page', async () => {
      const geniusButton = await $('[title="Genius"]');
      
      //Click on the Genius section button
      await geniusButton.click();

      //It is expected that page to have a specific title
      await expect(browser).toHaveTitle('Genius: livrare gratuită și oferte exclusive pe eMAG, Tazz, Fashion Days și Freshful - eMAG.ro');
    });


    it('should have a working search', async () => {
      const searchBox = await $('#searchboxTrigger');
      const searchButton = await $('.searchbox-submit-button');

      //Write the name of a specific product of the store into the search box
      await searchBox.setValue('Tricou polo');

      //Click on the search button to get the results
      await searchButton.click();

      //It is expected that page with results to have the following title
      await expect(browser).toHaveTitle('Cauți Tricou polo? Alege din oferta eMAG.ro');
     });


   it('should select one product', async () => {
      const productButton = await $('//*[@id="card_grid"]/div[1]/div/div/div[3]/div/a/div[1]');
      
      //Click on the button of a product from the results list
      await productButton.click();
     });


   it('should change the images of the product', async () => {
      const image0 = await $('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[1]');
      const image1 = await $('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[2]');
      const image2 = await $('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[3]');
      const image3 = await $('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[4]');
      const image4 = await $('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[5]');


      //Hover one by one the images of the selected product
      image0.elementHover('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[1]');
      image1.elementHover('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[2]');
      image2.elementHover('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[3]');
      image3.elementHover('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[4]');
      image4.elementHover('//*[@id="main-container"]/section[3]/div/div[1]/div[1]/div[1]/div[3]/div/div/div[5]');
     });


   it('should add a product to cart', async () => {
      const cartButton = await $('.btn.btn-xl.btn-primary.btn-emag.btn-block.main-button.gtm_680klw.yeahIWantThisFamilyProduct');
      const favoriteButton = await $('.add-to-favorites.btn.btn-xl.btn-default.btn-icon.btn-block.gtm_t95ovv.add-to-favorites-family');
        
      //Click on the Favorite button and wait until it is displayed
      await favoriteButton.click();
      await favoriteButton.waitForDisplayed();

      //Click on the Cart button and wait until it is displayed
      await cartButton.click();
      await cartButton.waitForDisplayed();
     });
});