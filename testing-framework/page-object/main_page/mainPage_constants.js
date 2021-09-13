class contact_constants {
   
    get attributes() {
        return {
            id: {
                userName: 'ContentPlaceHolder1_txtUserName',
                email: 'ContentPlaceHolder1_txtEmail',
                password: 'ContentPlaceHolder1_txtPassword',
                confirmPassword: 'ContentPlaceHolder1_txtPassword2',
                strongPasswordLbl: 'passstrength',
                invalidPasswordLbl: 'ContentPlaceHolder1_txtPassword-error',
                invalidPasswordLbl2: 'ContentPlaceHolder1_txtPassword2-error',
                agreeTermsCheck: 'ContentPlaceHolder1_MyCheckBox',
                agreeTermsAlert: 'ctl00$ContentPlaceHolder1$MyCheckBox-error', 
                btnCreateAccount: 'ContentPlaceHolder1_btnRegister'        
            },
            css: {
                validPasswordAlert: '#passstrength > .text-success',
                emptyCaptcha: '.alert-danger',
                htmlBody: 'body'
            }
        }
    }

    get testData() {
        return {
            userNameData: "Pedro01",
            contactEmail: 'pedro0@yopmail.com', 
            passwordData: 'Abcd1234*/',
            confirmPasswordData: 'Abcd1234*/',
            strongPassword: 'Strength: Strong!'            
        }
    }
}

module.exports = new contact_constants();
