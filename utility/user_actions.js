var util = browser.params.utilities;
var isLoggingOn = browser.params.logging;

var UserActions = function () {

    this.Click = function (elemnetToClickOn) {
        elemnetToClickOn.isDisplayed().then(function () {
            highlight(elemnetToClickOn);
            elemnetToClickOn.click().then(function () {
                consoleLog('clicked on element ' + elemnetToClickOn.locator());
            }, function (error) {
                throw 'Failed to clicked on element ' + elemnetToClickOn.locator() + ' and the error was ' + error;
            });
        }, function (error) {
            throw 'Given element ' + elemnetToClickOn.locator() + ' not displayed and the error was ' + error;
        });
    };

    this.waitAndClick = function (elemnetToClickOn, timeOut) {
        util.waitForElementDisplay(elemnetToClickOn, timeOut).then(function () {
            highlight(elemnetToClickOn);
            elemnetToClickOn.click().then(function () {
                consoleLog('clicked on element ' + elemnetToClickOn.locator());
            }, function (error) {
                throw 'Failed to clicked on element ' + elemnetToClickOn.locator() + ' and the error was ' + error;
            });
        }, function (error) {
            throw 'Given element ' + elemnetToClickOn.locator() + ' not displayed and the error was ' + error;
        });
    };

    this.mouseMoveAndClick = function (elemnetToClickOn) {
        elemnetToClickOn.isDisplayed().then(function () {
            highlight(elemnetToClickOn);
            util.mouseToElement(elemnetToClickOn).then(function () {
                consoleLog('mouse moved on element ' + elemnetToClickOn.locator());
            }, function (error) {
                throw 'Failed to mouse move on element ' + elemnetToClickOn.locator() + ' and the error was ' + error;
            });
            elemnetToClickOn.click().then(function () {
                consoleLog('clicked on element' + elemnetToClickOn.locator());
            }, function (error) {
                throw 'Failed to clicked on element ' + elemnetToClickOn.locator() + ' and the error was ' + error;
            });
        }, function (error) {
            throw 'Given element ' + elemnetToClickOn + 'not displayed and the error was ' + error;
        });
    };

    this.TypeText = function (elemnetToTypeIn, textToType) {
        elemnetToTypeIn.isDisplayed().then(function () {
            highlight(elemnetToTypeIn);
            elemnetToTypeIn.sendKeys(textToType).then(function () {
                consoleLog('entered text ' + textToType + ' in element' + elemnetToTypeIn.locator());
            }, function (error) {
                throw 'Failed to enter text ' + textToType + ' in element' + elemnetToTypeIn.locator() + ' and the error was ' + error;
            });
        }, function (error) {
            throw 'Given element ' + elemnetToTypeIn.locator() + 'not displayed and the error was ' + error;
        });
    };

    this.ClearAndType = function (elemnetToTypeIn, textToType) {
        elemnetToTypeIn.isDisplayed().then(function () {
            highlight(elemnetToTypeIn);
            elemnetToTypeIn.clear();
            elemnetToTypeIn.sendKeys(textToType).then(function () {
                consoleLog('entered text ' + textToType + ' in element ' + elemnetToTypeIn.locator());
            }, function (error) {
                throw 'Failed to enter text ' + textToType + ' in element' + elemnetToTypeIn.locator() + ' and the error was ' + error;
            });
        }, function (error) {
            throw 'Given element ' + elemnetToTypeIn.locator() + ' not displayed and the error was ' + error;
        });
    };

    this.switchToWindowByIndex = function (n) {
        browser.getAllWindowHandles().then(function (handles) {
            expect(handles.length).toBeGreaterThan(n);
            browser.switchTo().window(handles[n]);
            consoleLog('Focus switched to ' + (n + 1) + 'numbered window');
        });
    };

    this.closeWindowByIndex = function (n) {
        this.switchToWindowByIndex(n);
        browser.driver.close();
        consoleLog('Closed ' + (n + 1) + 'numbered window');
    };

    this.hitEnterKey = function () {
        browser.actions().sendKeys(protractor.Key.ENTER);
        consoleLog('Hit Enter Button');
    };

    function highlightGivenElementInGivenColor(webElement, color) {
        return browser.executeScript("arguments[0].style.border='3px solid " + color + "'", webElement);
    }

    function highlight(element) {
        var webElement = element.getWebElement();
        highlightGivenElementInGivenColor(webElement, 'red');
        browser.sleep(100);
        highlightGivenElementInGivenColor(webElement, 'green');
        browser.sleep(100);
        browser.executeScript("arguments[0].style.border='0px solid'", webElement);
    };

    function consoleLog(message) {
        if (isLoggingOn)
            console.log('       -> ' + message);
    };
};

module.exports = new UserActions();