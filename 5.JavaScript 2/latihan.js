var tanya = true;
while(tanya) {
	// menangkap pilihan player
	var p = prompt('pilih : gajah, semut, orang');

	// menangkap pilihan computer
	// membangkitkan bilangan random
	var comp = Math.random();

	if( comp < 0.334) {
		comp = 'gajah'
	} else if( comp >= 0.334 && comp <0.667) {
		comp = 'orang'
	} else {
		comp = 'semut'
	}
	console.log(comp);

	var hasil = '';
	// menentukan rules
	if( p == comp ) {
		hasil = 'SERI';
	} else if( p == 'gajah') {
		// if( comp == 'orang') {
		// 	hasil = 'MENANG';
		// } else {
		// 	hasil = 'KALAH';
		// }
		hasil = ( comp == 'orang' ) ? 'MENANG !' : 'KALAH !!!';
	} else if( p == 'orang') {
		hasil = ( comp == 'gajah' ) ? 'KALAH !!!' : 'MENANG !';
	} else if( p == 'semut') {
		hasil = ( comp == 'orang' ) ? 'KALAH !!!' : 'MENANG !';
	} else {
		hasil = 'Anda memasukkan pilihan yang salah !!!';
	}

	// tampilkan hasilnya
		alert(' Kamu memilih: ' + p + ' dan Komputer memilih: ' + comp + '\n Maka hasilnya: kamu ' + hasil);

		tanya = confirm('Ingin bermain lagi?');
}
	alert('Terimakasih telah bermain dengan kami.')