let score
score = 50
console.log("Hasil Variabel score "+score);

let playerName = "Budi"
console.log("Hasil variabel playerName "+playerName);
// alert(playerName)
playerName = "Andy"
console.log("Halo playerName "+playerName);
// alert(playerName)

const pi = 3.14
// pi = 12
console.log(pi);

//bukan berupa object atau array > tidak bisa diganti
const angkaKeberuntungan = 10

//sample
//umum yang digunakan > object
//id, nama, jenkel
const objectAngkaKeb = {id:1, name:'arif', jenkel:'L'}
objectAngkaKeb.id = 2
objectAngkaKeb.name = "andi"
objectAngkaKeb.jenkel = "laki-laki"
objectAngkaKeb.alamat = "Lampung"
console.log(objectAngkaKeb);

//sample > array
const arrayNumber = [1,2,3,4,5]
arrayNumber.push(6)
arrayNumber.push(7)
console.log(arrayNumber);

var namaLengkap = "test"

// penamaan variabel tidak boleh menggunakan "reserved keyword"
// let let = 0;

let weight = 75
// alert(weight + 15)

let originalNum = 23
let numberToBeAdded = originalNum + 7
let newNum = originalNum + numberToBeAdded
console.log(newNum);
// alert(newNum);

let message = "Welcome's"
let message2 = 'Welcome\'s'
console.log(message2);

let htmlSnippet = '<h1 class="header">This is a header';
htmlSnippet = "<h1 class=\"header\">This is a header</h1>";

let visitor = prompt('Siapakah namanya?')
let message3 = 'Halo' + visitor;
message3 = message3 + '. Selamat datang di kelas Modern JavaScript' 
message3 += 'Kita senang sekali kamu mau datang berkunjung, ' 
message3 += visitor + '. Semoga kamu berkenan datang kembali untuk belajar bersama.';

alert(message3);

let isFinished = true;

let kode=["React", "Php", "Ruby"]

var fruits = ['anggur', 'melati', 'apel', 'jeruk']
var buah_buahan = ['strawberry', 'pir', 'durian']
// fruits.push.apply(fruits, buah_buahan)

var index_yang_ingin_dihapus = 1 // karena fruits[1]=melati, kita ingin menghapus melati dari array buah-buahan ini

fruits.splice(index_yang_ingin_dihapus, 1)

// fruits = []
fruits.splice(0, fruits.length)
