const message = 'Welcome to Node JS';

for (let i=0; i<10; i++) {
    setTimeout(function() {
    console.log(message);
    }, 5000);
}