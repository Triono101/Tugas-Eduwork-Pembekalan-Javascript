// Membuat Object

// 1. Object Literal

var pelajar = {
	nama : 'orang1',
	umur : 27,
	pekerjaan : 'web developer',
	gaji : [6.5, 7.0, 8.5],
	alamat : {
		desa : "purwo kencono",
		kecamatan : "sekampung udik",
		kabupaten : "lampung timur",
		provinsi : "lampung"
	}
};

var pelajar2 = {
	nama : 'orang2',
	umur : 27,
	pekerjaan : 'web developer',
	gaji : [9.0, 10, 12],
	alamat : {
		desa : "purwo kencono",
		kecamatan : "sekampung udik",
		kabupaten : "lampung timur",
		provinsi : "lampung"
	}
};

// 2. Function Declaration

function buatObjectPelajar(nama, umur, pekerjaan, gaji, alamat) {
	var pelajar = {};
	pelajar.nama = nama;
	pelajar.umur = umur;
	pelajar.pekerjaan = pekerjaan;
	pelajar.gaji = gaji;
	pelajar.alamat = alamat

	return pelajar;
}

var pelajar3 = buatObjectPelajar('orang-', '27', 'web developer', '9.5', 'lampung');

var pelajar4 = buatObjectPelajar('orang+', '27', 'web developer', '10', 'lampung');

// 3. Constructor Function

function Pelajar(nama, umur, pekerjaan, gaji, alamat) {
	// var = this {};
	this.nama = nama;
	this.umur = umur;
	this.pekerjaan = pekerjaan;
	this.gaji = gaji;
	this.alamat = alamat;

	// return this;
}

pelajar5 = new Pelajar('orang$', '27', 'web developer', '11', 'lampung');

