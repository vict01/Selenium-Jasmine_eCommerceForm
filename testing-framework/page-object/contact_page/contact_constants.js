class contact_constants {
   
    get attributes() {
        return {
            class: {
                alert: 'alert',
                alertSuccess: 'alert-success'
            },
            id: {
                ddlElement: 'id_contact',
                email: 'email',
                sendBtn: 'submitMessage',
                MsgElement: 'message'             
            }
        }
    }

    get testData() {
        return {
            texmMessage4Service: 'I bought a shirt and it does not fit me despite that it is my size',
            texmMessage4WebMaster: 'I cannot log in your website due to an error message on unavailability',
            contactEmail: 'hector@yopmail.com',          
        }
    }
}

module.exports = new contact_constants();
