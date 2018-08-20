const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const $cansel = 'Отменено пользователем!'; 
const $accessDenied = 'Доступ запрещен!';
const $welcome = 'Добро пожаловать!';

const $login = prompt('Enter Login');
if ($login === null) {
    alert($cansel)
} else {
    if ($login !== adminLogin) {
        alert($accessDenied)
    } else {
        const $password = prompt('Enter password')
        if ($password === null) {
        alert($cansel)   
        } else {
    if ($password !== adminPassword) {
        alert($accessDenied)
    } else {
        alert($welcome)
    }
        }
    }
}
