
// // Notification Generator

function sendNotification(email) {

    if(email.includes('@') === false){
        return "Invalid Email"
    }
    const cutUpEmail = email.split('@');
    const userName = cutUpEmail[0];
    const domainName = cutUpEmail[1];
    return userName + ' sent you an email from ' + domainName; 
}

const notification = sendNotification('ahmeadashraful@gmail.com');
console.log(notification);

