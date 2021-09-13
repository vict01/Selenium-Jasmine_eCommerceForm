class CommonConstant {
    get commonData() {
        return {
            applicationUrl: 'https://etherscan.io/register',
            defaultTimeout: 45000,
            implicitWaitDefaultTimeout: 30000,
        }
    }

    get timeouts() {
        return {
            xs: 5000,
            s: 10000,
        }
    }
}

module.exports = new CommonConstant();