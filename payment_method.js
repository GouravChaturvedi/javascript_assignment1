 paymentMethod = 'cash';
 switch(paymentMethod){
    case 'credit' :
        console.log('You have a processing fee of 2%');
        break;
    case 'debit' :
        console.log('You have a processing fee of 1.5%');
        break;
    case 'paypal' :
        console.log('You have a processing fee of 3%');
        break;
    default :
        console.log('Invalid payment method');
 }