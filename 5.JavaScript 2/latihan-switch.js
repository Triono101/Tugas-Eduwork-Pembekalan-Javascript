var item = prompt('Masukkan nama makanan/minuman : \n (contoh: Nasi, Daging, Susu, Burger, Softdrink)');

switch(item) {
	case'nasi' :
	case'daging' :
	case'susu' :
		alert('Makanan/minuman SEHAT !');
		break;
	case'burger' :
	case'softdrink' :
		alert('Makanan/minuman TIDAK SEHAT !!!');
		break;
	default :
		alert('Anda memasukka nama makanan/minuman yang SALAH !!!');
		break;
}