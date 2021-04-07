// console.log('hello world')

//ambil element user
const user = document.getElementById('user');

// init variable
const user_logged_in = "Marcell"

// ES5
// user.innerHTML = "Selamat data, " + user_logged_in;

// ES6
user.innerHTML = `Anda berhasil login, ${user_logged_in}`;