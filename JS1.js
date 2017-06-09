var zmienna1 = "text";
var zmienna2 = 2;
var zmienna3 = 5;
var zmienna4 = "tekst";
var tablica1 = [1, 2, 5, 7];
var tablica2 = [2, "tekst"];

/*
alert(zmienna1);
alert(zmienna2);
alert('2 == 5\n'+(zmienna2 == zmienna3));
alert(zmienna1 + zmienna4);
alert(tablica1);

alert(tablica2.pop());
alert(tablica2)

alert(tablica1.length);
alert(tablica1.concat(tablica2));
alert(tablica1.concat(tablica2).sort());

var a = 1;
var b = -2;
alert(a > 0 ? (a + ' większe od 0') : (a + ' mniejsze bądź równe 0') );
alert(b > 0 ? (b + ' większe od 0') : (b + ' mniejsze bądź równe 0') );
*/

/*
var wybor = prompt('Co chcesz zrobić?\nA: 1+1\nB: 1-1\nQ: wyjść');
if (wybor == 'a' || wybor == 'A') {alert('1+1 = 2');}
if (wybor == 'b' || wybor == 'B') {alert('1-1 = 0');}
if (wybor == 'q' || wybor == 'Q') {alert('Do widzenia!');}
*/

/* Wymaga poprawy - pewnie trzeba rozbić nawiasy warunkowe
var wybor = prompt('Menu\nWybierz:\nA: 1+1\nB: 1-1\nQ: wyjście');
switch wybor
{
	case ('a' || 'A'):
	{alert('1+1 = 2');
	break;
	}
	case ('b' || 'B'):
	{alert('1-1 = 0');
	break;
	}
	case ('q' || 'Q'):
	{alert('Do widzenia!');
	break;
	}
	default:
	alert('Pomyłka');
}
*/
/*
for(var i = 1; i < 11; i++)
{
	alert('Napis '+i);
}
*/
/*
Funkcja - potęgowanie
function potegowanie(x, y) {
var wynik = 1;
for(var i = 1; i <= y; i++)
{
	wynik *= x;
}
return wynik
}

var x = parseInt(prompt('Podaj x:'));
var y = parseInt(prompt('Podaj y:'));


var wynik = potegowanie(x,y);

alert('Wynik: ' + wynik);
*/

/*funkcja sprawdzająca płeć
function witaj(imie) {
	if (imie.slice(-1) == 'a') {
		alert('Jak się masz dziecino?');
	}
	else {
		alert('Cześć gościu!');
	}
}

witaj(prompt('Jak masz na imię?'));
*/

//FE39
//document.getElementById("cos").innerHTML = alert('Kliknąłeś');
