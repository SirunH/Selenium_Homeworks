const { Builder, By } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const should = require("chai").should();
//describe block
describe("Adding and checking the new item", function () {
    //it block
    it("Filling all fields with valid data", async function () {
        //launch the browser
        let driver = await new Builder().forBrowser("firefox").build();
        //navigate to TextBox page
        await driver.get("https://demoqa.com/text-box");
        let url = await driver.getCurrentUrl();
        url.should.to.contain("https://demoqa.com/text-box");
        //fill the fields
        let NewName = await driver.findElement(By.id("userName")).sendKeys("Piere");
        let NewEmail = await driver.findElement(By.id("userEmail")).sendKeys("Piere@gmail.com");
        let NewCaddress = await driver.findElement(By.id("currentAddress")).sendKeys("Paris");
        let NewPaddress = await driver.findElement(By.id("permanentAddress")).sendKeys("Lyon");
        //click the Submit button
        let element = driver.findElement(By.id("submit"));
        await driver.executeScript("arguments[0].scrollIntoView()", element);
        element.click();
        //assert a new item is added
        let newItem = await driver.findElement(By.id("output")).getText();
        let name = await driver.findElement(By.id("name")).getText();
        let email = await driver.findElement(By.id("email")).getText();
        let caddress = await driver.findElement(By.css("p:nth-child(3)")).getText();
        let paddress = await driver.findElement(By.css("p:last-child")).getText();
        name.should.to.contain("Piere");
        email.should.to.contain("Piere@gmail.com");
        caddress.should.to.contain("Paris");
        paddress.should.to.contain("Lyon");
        //close the browser
        await driver.quit();
    });

    it("Filling one field with invalid data", async function () {
        //launch the browser
        let driver = await new Builder().forBrowser("firefox").build();
        //navigate to TextBox page
        await driver.get("https://demoqa.com/text-box");
        let url = await driver.getCurrentUrl();
        url.should.to.contain("https://demoqa.com/text-box");
        //fill the fields
        let NewName = await driver.findElement(By.id("userName")).sendKeys(">>>>");
        let NewEmail = await driver.findElement(By.id("userEmail")).sendKeys("Piere@gmail.com");
        let NewCaddress = await driver.findElement(By.id("currentAddress")).sendKeys("Paris");
        let NewPaddress = await driver.findElement(By.id("permanentAddress")).sendKeys("Lyon");
        //click the Submit button
        let element = driver.findElement(By.id("submit"));
        await driver.executeScript("arguments[0].scrollIntoView()", element);
        element.click();
        //assert a new item is added
        let newItem = await driver.findElement(By.id("output")).getText();
        let name = await driver.findElement(By.id("name")).getText();
        let email = await driver.findElement(By.id("email")).getText();
        let caddress = await driver.findElement(By.css("p:nth-child(3)")).getText();
        let paddress = await driver.findElement(By.css("p:last-child")).getText();
        name.should.to.contain("Piere");
        email.should.to.contain("Piere@gmail.com");
        caddress.should.to.contain("Paris");
        paddress.should.to.contain("Lyon");
        //close the browser
        await driver.quit();
    });
});







