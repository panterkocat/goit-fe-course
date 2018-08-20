const $sharm = 15;
const $hurgada = 25;
const $taba = 6;
const $nameTaba = 'Таба';
const $nameHurgada = 'Хургада';
const $nameSharm = 'Шарм';
const $errorMesage = 'Ошибка ввода';
const $wellcome = 'Приятного путешествия в группе - ';
const $sorry = 'Нам очень жаль, приходите еще!';
const $lastSorry = 'Извините, столько мест нет ни в одной группе!';
let $verification;


const $number = prompt('Введите число необходимых мест');
if (parseInt($number) !== Number($number) || $number <= 0) {
    alert($errorMesage)
  } else {
        if ($number <= $sharm) {
            let $verification = confirm('есть Шарм, хотите?')
            if ($verification === true) {alert($wellcome + $nameSharm)}
            else {alert($sorry)}
        }   
        if ($number <= $hurgada) {
            let $verification = confirm('есть Хургада, хотите?')
            if ($verification === true) {alert($wellcome + $nameHurgada)}
            else {alert($sorry)}
        }   
        if ($number <= $taba) {
            let $verification = confirm('есть Таба, хотите?')
            if ($verification === true) {alert($wellcome + $nameTaba)}
            else {alert($sorry)}
        }
        if ($number > Math.max($hurgada,$sharm,$taba)) {
        alert($lastSorry)}
}
  



