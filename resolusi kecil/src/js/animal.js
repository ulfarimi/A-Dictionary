
//struktur obyeknya (class) nya
function animal(nama, name, gambar, animasi, sound){
	this.nama = nama;
	this.name = name;
	this.gambar = gambar;
	this.animasi = animasi;
	this.sound = sound;
}

//datanya :
var hewan = new Array();
hewan[0] = new animal("kupu-kupu","butterfly","kupu2.png","kupu2.gif","kupu2.mp3");
hewan[1] = new animal("katak","frog","katak.png","katak.gif","katak.mp3");
hewan[2] = new animal("salmon","salmon","salmon.png","salmon.gif","salmon.mp3");
hewan[3] = new animal("anjing","dog","","anjing.gif","anjing.mp3");
hewan[4] = new animal("bunglon","chameleon","bunglon.png","bunglon.gif","bunglon.mp3");
hewan[5] = new animal("jerapah","giraffe","jerapah.png","jerapah.gif","jerapah.mp3");
hewan[6] = new animal("ikan","fish","ikan.png","ikan.gif","ikan.mp3");
hewan[7] = new animal("lumba-lumba","dolphin","lumba.png","lumba.gif","lumba2.mp3");
hewan[8] = new animal("monyet","monkey","monyet.png","monyet.gif","monyet.mp3");
hewan[9] = new animal("hiu","shark","hiu.png","hiu.gif","hiu.mp3");
hewan[10] = new animal("paus","wale","paus.png","paus.gif","paus.mp3");
hewan[11] = new animal("macan","tiger","","","harimau-tiger.mp3");
hewan[12] = new animal("singa","lion","","","singa - lion.mp3");
hewan[13] = new animal("gajah","elephant","","","gajah.mp3");
hewan[14] = new animal("nyamuk","mosquito","","","nyamuk.mp3");
hewan[15] = new animal("lebah","bee","","","lebah.mp3");
hewan[16] = new animal("tikus","mouse","","","tikus.mp3");
hewan[17] = new animal("semut","ant","","","semut.mp3");
hewan[18] = new animal("bebek","duck","","","bebek.mp3");
hewan[19] = new animal("ayam","chicken","","","ayam.mp3");
hewan[20] = new animal("kucing","cat","","","kucing.mp3");
hewan[21] = new animal("babi","pig","","","babi.mp3");
hewan[22] = new animal("orang utan","orang utan","","","orang utan.mp3");
hewan[23] = new animal("angsa","swan","","","angsa.mp3");
hewan[24] = new animal("merpati","pigeon","","","merpati.mp3");
hewan[25] = new animal("kura-kura","turtle","","","kura2.mp3");
hewan[26] = new animal("lalat","fly","","","lalat.mp3");

//fungsi untuk pencarian
function moreInfo(form){
	var s=form.search; //search adalah id dari textbox untuk search
	var selection=s.value;
	var namaHewan, nameOfAnimal, image, animation, sounds;
	
	for (i=0; i<animal.length; i++){
		if (animal[i].nama == selection || animal[i].name == selection){
			namaHewan = animal[i].nama;
			nameOfAnimal = animal[i].name;
			image = animal[i].gambar;
			animation = animal[i].animasi;
			sounds = animal[i].sound;
			break;
		}
	}
	
	//ditampilkan disini:
	form.nama.value = namaHewan;
	form.name.value = namaOfAnimal;
	form.gambar.value = image;
}

//untuk menampilkan semua (select)
function showAllData(){
	for (j=0; j<hewan.length; j++){
		document.write(hewan[j].nama+" \n");
	}
}

//nenampilkan data dengan paging
function showData(indexAwal, jumlah){
	//pengecekan untuk index setelah ditambahkan dengan variabel jumlah
	var namaHewan, nameOfAnimal, image, animation, sounds;
	var temp=indexAwal+jumlah-1;
	if (temp > hewan.length){
		temp= hewan.length;
	}

	for (j=indexAwal; j<=temp; j++){
		document.write(hewan[j].nama+" \n");
		//tinggal ditampilkan aja
		namaHewan = hewan[j].nama;
		nameOfAnimal = hewan[j].name;
		image = hewan[j].gambar;
		animation = hewan[j].animasi;
		sounds = hewan[j].sound;
	}
}