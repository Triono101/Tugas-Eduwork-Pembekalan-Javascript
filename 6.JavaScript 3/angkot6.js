var jumlahAngkot = 10;
var angkotBeroperasi = 6;

for(var NoAngkot = 1; NoAngkot <= jumlahAngkot; NoAngkot++) {
   
    if( NoAngkot <= 6 && NoAngkot !== 5 ) {
        console.log ('Angkot No. ' + NoAngkot + ' beroperasi dengan baik.');
    } else if( NoAngkot === 8 || NoAngkot === 10 || NoAngkot === 5) {
        console.log ('Angkot No. ' + NoAngkot + ' sedang lembur');
    } else {
        console.log ('Angkot No. ' + NoAngkot + ' sedang tidak beroperasi.');
    }
}