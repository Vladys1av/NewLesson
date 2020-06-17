describe('Main Page',() => {
    it('should Title main page is present and correct text', function () {
        browser.url('https://stage.pasv.us/');
        const titleProgressMonitor = "//span[@id='site-name']";
        const text = $(titleProgressMonitor).getText(); //Progress Monitor
        expect(text).toEqual('Progress Monitor')
    });
    it('should Title main is clickable', function () {
       const titleProgressMonitor = "//span[@id='site-name']";
       const result = $(titleProgressMonitor).isClickable();
       expect(result).toEqual(true);
       });

    it('should verify text of login button', function () {
        const loginBtn = $("//a[@qa='login-link']");
        const textOfLoginBtn = loginBtn.getText();
        expect(textOfLoginBtn).toEqual('Login');


    });







})
