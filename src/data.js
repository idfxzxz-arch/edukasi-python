export const materials = [
  {
    id: "pengenalan-python",
    title: "Pengenalan Python",
    level: "Pemula",
    duration: "25 menit",
    category: "Dasar",
    summary: "Kenali Python, keunggulannya, dan contoh penggunaan di dunia nyata.",
    color: "blue",
    content: [
      "Python adalah bahasa pemrograman yang mudah dibaca, fleksibel, dan banyak digunakan untuk web, data, otomasi, AI, serta scripting.",
      "Sintaks Python dibuat sederhana sehingga pemula bisa fokus memahami logika pemrograman, bukan simbol yang rumit.",
      "Python cocok dipelajari bertahap: mulai dari variabel, percabangan, perulangan, struktur data, function, sampai OOP."
    ],
    code: "print('Halo, Python!')\nprint('Saya sedang belajar programming.')"
  },
  {
    id: "instalasi-python",
    title: "Instalasi Python",
    level: "Pemula",
    duration: "20 menit",
    category: "Setup",
    summary: "Siapkan Python, editor kode, dan lingkungan belajar yang nyaman.",
    color: "green",
    content: [
      "Unduh Python dari python.org, aktifkan pilihan Add Python to PATH, lalu cek instalasi lewat terminal.",
      "Gunakan editor seperti VS Code agar penulisan kode lebih nyaman dengan fitur highlight, terminal, dan ekstensi Python.",
      "Biasakan menjalankan file Python dari terminal agar paham alur eksekusi program."
    ],
    code: "python --version\npython app.py"
  },
  {
    id: "variabel-tipe-data",
    title: "Variabel dan Tipe Data",
    level: "Pemula",
    duration: "35 menit",
    category: "Dasar",
    summary: "Pelajari cara menyimpan nilai dan mengenali tipe data utama Python.",
    color: "yellow",
    content: [
      "Variabel adalah nama yang digunakan untuk menyimpan nilai. Python tidak mewajibkan deklarasi tipe secara eksplisit.",
      "Tipe data dasar meliputi string, integer, float, boolean, dan None.",
      "Gunakan nama variabel yang jelas agar program mudah dibaca kembali."
    ],
    code: "nama = 'Alya'\numur = 17\ntinggi = 165.5\naktif = True\n\nprint(nama, umur, tinggi, aktif)"
  },
  {
    id: "operator",
    title: "Operator",
    level: "Pemula",
    duration: "30 menit",
    category: "Dasar",
    summary: "Gunakan operator aritmatika, perbandingan, dan logika.",
    color: "red",
    content: [
      "Operator aritmatika dipakai untuk menghitung angka seperti tambah, kurang, kali, bagi, dan modulo.",
      "Operator perbandingan menghasilkan nilai boolean, misalnya lebih besar atau sama dengan.",
      "Operator logika seperti and, or, dan not membantu membuat kondisi yang lebih kaya."
    ],
    code: "nilai = 85\nlulus = nilai >= 75\nhadir = True\n\nprint(lulus and hadir)"
  },
  {
    id: "input-output",
    title: "Input dan Output",
    level: "Pemula",
    duration: "30 menit",
    category: "Dasar",
    summary: "Ambil masukan pengguna dan tampilkan hasil program.",
    color: "blue",
    content: [
      "Fungsi input() mengambil teks dari pengguna. Hasil input selalu berupa string.",
      "Gunakan int() atau float() untuk mengubah input menjadi angka.",
      "Fungsi print() menampilkan output ke terminal."
    ],
    code: "nama = input('Nama: ')\numur = int(input('Umur: '))\n\nprint(f'Halo {nama}, tahun depan kamu {umur + 1} tahun.')"
  },
  {
    id: "if-else",
    title: "If Else",
    level: "Pemula",
    duration: "35 menit",
    category: "Kontrol Alur",
    summary: "Buat keputusan dalam program menggunakan kondisi.",
    color: "green",
    content: [
      "If else memungkinkan program menjalankan blok kode berbeda berdasarkan kondisi.",
      "Gunakan elif untuk memeriksa beberapa kondisi secara berurutan.",
      "Indentasi sangat penting karena Python memakai spasi untuk menentukan blok kode."
    ],
    code: "nilai = 82\n\nif nilai >= 90:\n    print('A')\nelif nilai >= 75:\n    print('B')\nelse:\n    print('Perlu latihan lagi')"
  },
  {
    id: "for-loop",
    title: "For Loop",
    level: "Pemula",
    duration: "35 menit",
    category: "Kontrol Alur",
    summary: "Ulangi proses pada data berurutan dengan for loop.",
    color: "yellow",
    content: [
      "For loop cocok untuk mengulang item dalam list, string, range, atau koleksi lain.",
      "range() sering dipakai untuk membuat urutan angka.",
      "Loop membantu mengurangi kode berulang dan membuat program lebih ringkas."
    ],
    code: "buah = ['apel', 'mangga', 'jeruk']\n\nfor item in buah:\n    print(item)"
  },
  {
    id: "while-loop",
    title: "While Loop",
    level: "Pemula",
    duration: "35 menit",
    category: "Kontrol Alur",
    summary: "Ulangi proses selama sebuah kondisi masih bernilai benar.",
    color: "red",
    content: [
      "While loop berjalan selama kondisinya True.",
      "Pastikan kondisi bisa berubah agar program tidak terjebak infinite loop.",
      "While sering cocok untuk menu program atau proses yang belum diketahui jumlah pengulangannya."
    ],
    code: "angka = 1\n\nwhile angka <= 5:\n    print(angka)\n    angka += 1"
  },
  {
    id: "list",
    title: "List",
    level: "Pemula",
    duration: "40 menit",
    category: "Struktur Data",
    summary: "Simpan banyak data dalam urutan yang bisa diubah.",
    color: "blue",
    content: [
      "List adalah struktur data berurutan yang dapat menyimpan banyak nilai.",
      "Item list bisa diakses menggunakan indeks mulai dari 0.",
      "List mendukung operasi tambah, ubah, hapus, slicing, dan iterasi."
    ],
    code: "nilai = [80, 90, 75]\nnilai.append(88)\n\nprint(nilai[0])\nprint(sum(nilai) / len(nilai))"
  },
  {
    id: "tuple",
    title: "Tuple",
    level: "Pemula",
    duration: "25 menit",
    category: "Struktur Data",
    summary: "Gunakan koleksi berurutan yang nilainya tetap.",
    color: "green",
    content: [
      "Tuple mirip list, tetapi tidak dapat diubah setelah dibuat.",
      "Tuple cocok untuk data yang sifatnya tetap, seperti koordinat atau konfigurasi.",
      "Karena immutable, tuple membantu menjaga data agar tidak berubah tanpa sengaja."
    ],
    code: "koordinat = (10, 20)\nx, y = koordinat\n\nprint(x, y)"
  },
  {
    id: "dictionary",
    title: "Dictionary",
    level: "Pemula",
    duration: "45 menit",
    category: "Struktur Data",
    summary: "Simpan data dalam pasangan key dan value.",
    color: "yellow",
    content: [
      "Dictionary menyimpan data menggunakan key yang unik.",
      "Struktur ini cocok untuk data yang punya label, misalnya profil siswa.",
      "Nilai dictionary dapat berupa string, angka, list, atau dictionary lain."
    ],
    code: "siswa = {\n    'nama': 'Bima',\n    'kelas': 'XI',\n    'nilai': 88\n}\n\nprint(siswa['nama'])"
  },
  {
    id: "set",
    title: "Set",
    level: "Pemula",
    duration: "25 menit",
    category: "Struktur Data",
    summary: "Kelola kumpulan data unik tanpa urutan tetap.",
    color: "red",
    content: [
      "Set menyimpan nilai unik, sehingga duplikasi otomatis dihilangkan.",
      "Set mendukung operasi gabungan, irisan, dan selisih.",
      "Gunakan set saat membutuhkan pengecekan keanggotaan yang cepat."
    ],
    code: "tag = {'python', 'web', 'python'}\ntag.add('data')\n\nprint(tag)"
  },
  {
    id: "function",
    title: "Function",
    level: "Menengah",
    duration: "45 menit",
    category: "Reusable Code",
    summary: "Buat kode yang bisa dipakai ulang dengan function.",
    color: "blue",
    content: [
      "Function membungkus logika tertentu agar dapat dipanggil berkali-kali.",
      "Parameter membuat function lebih fleksibel, sedangkan return mengirimkan hasil.",
      "Function yang baik biasanya punya satu tugas yang jelas."
    ],
    code: "def hitung_luas_persegi(sisi):\n    return sisi * sisi\n\nprint(hitung_luas_persegi(5))"
  },
  {
    id: "module",
    title: "Module",
    level: "Menengah",
    duration: "35 menit",
    category: "Reusable Code",
    summary: "Pisahkan kode ke beberapa file dan gunakan import.",
    color: "green",
    content: [
      "Module adalah file Python yang berisi kode, function, atau class yang dapat digunakan di file lain.",
      "Import membantu menjaga proyek tetap rapi saat program mulai membesar.",
      "Python juga menyediakan banyak module bawaan seperti math, random, dan datetime."
    ],
    code: "import math\n\nakar = math.sqrt(81)\nprint(akar)"
  },
  {
    id: "error-handling",
    title: "Error Handling",
    level: "Menengah",
    duration: "40 menit",
    category: "Robust Code",
    summary: "Tangani error agar program tidak berhenti mendadak.",
    color: "yellow",
    content: [
      "Error handling dilakukan dengan try, except, else, dan finally.",
      "Tangani error yang spesifik agar penyebab masalah lebih jelas.",
      "Program yang baik memberi pesan error yang membantu pengguna memperbaiki input."
    ],
    code: "try:\n    angka = int(input('Masukkan angka: '))\n    print(10 / angka)\nexcept ValueError:\n    print('Input harus angka')\nexcept ZeroDivisionError:\n    print('Tidak bisa dibagi nol')"
  },
  {
    id: "file-handling",
    title: "File Handling",
    level: "Menengah",
    duration: "45 menit",
    category: "Data",
    summary: "Baca dan tulis file teks menggunakan Python.",
    color: "red",
    content: [
      "File handling memungkinkan program menyimpan data sederhana tanpa database.",
      "Gunakan with open() agar file otomatis ditutup setelah selesai digunakan.",
      "Mode umum meliputi r untuk membaca, w untuk menulis ulang, dan a untuk menambah isi."
    ],
    code: "with open('catatan.txt', 'w') as file:\n    file.write('Belajar Python')\n\nwith open('catatan.txt', 'r') as file:\n    print(file.read())"
  },
  {
    id: "oop",
    title: "OOP",
    level: "Menengah",
    duration: "60 menit",
    category: "Paradigma",
    summary: "Kenali class, object, attribute, dan method.",
    color: "blue",
    content: [
      "Object Oriented Programming membantu memodelkan data dan perilaku dalam satu struktur.",
      "Class adalah cetakan, sedangkan object adalah hasil dari cetakan tersebut.",
      "OOP berguna saat program memiliki banyak entitas dengan data dan aksi masing-masing."
    ],
    code: "class Siswa:\n    def __init__(self, nama):\n        self.nama = nama\n\n    def sapa(self):\n        return f'Halo, saya {self.nama}'\n\nbudi = Siswa('Budi')\nprint(budi.sapa())"
  },
  {
    id: "library-python",
    title: "Library Python",
    level: "Menengah",
    duration: "40 menit",
    category: "Ekosistem",
    summary: "Jelajahi library populer untuk web, data, dan otomasi.",
    color: "green",
    content: [
      "Library mempercepat pembuatan program karena menyediakan fitur siap pakai.",
      "Contoh library populer: requests, pandas, matplotlib, flask, django, dan pytest.",
      "Gunakan pip untuk memasang package dari Python Package Index."
    ],
    code: "pip install requests\n\nimport requests\nresponse = requests.get('https://api.github.com')\nprint(response.status_code)"
  },
  {
    id: "string-method",
    title: "String Method",
    level: "Pemula",
    duration: "35 menit",
    category: "Dasar",
    summary: "Olah teks dengan method bawaan seperti lower, upper, strip, dan split.",
    color: "blue",
    content: [
      "String method membantu membersihkan, mengubah, dan memecah teks tanpa membuat logika dari nol.",
      "Method seperti strip() sering dipakai untuk menghapus spasi di awal dan akhir input pengguna.",
      "split() mengubah string menjadi list berdasarkan pemisah tertentu."
    ],
    code: "nama = '  Python Learning  '\n\nprint(nama.strip())\nprint(nama.upper())\nprint('apel,mangga,jeruk'.split(','))"
  },
  {
    id: "slicing",
    title: "Slicing",
    level: "Pemula",
    duration: "30 menit",
    category: "Struktur Data",
    summary: "Ambil sebagian data dari string, list, atau tuple menggunakan indeks.",
    color: "green",
    content: [
      "Slicing digunakan untuk mengambil bagian tertentu dari data berurutan.",
      "Format umumnya adalah data[start:stop:step], dengan stop tidak ikut diambil.",
      "Slicing sering dipakai untuk preview data, memotong teks, atau membalik urutan."
    ],
    code: "angka = [10, 20, 30, 40, 50]\n\nprint(angka[1:4])\nprint(angka[::-1])"
  },
  {
    id: "list-comprehension",
    title: "List Comprehension",
    level: "Menengah",
    duration: "40 menit",
    category: "Struktur Data",
    summary: "Buat list baru dengan sintaks ringkas dan tetap mudah dibaca.",
    color: "yellow",
    content: [
      "List comprehension membuat list baru dari proses transformasi atau filter data.",
      "Sintaks ini ringkas, tetapi tetap perlu digunakan dengan bijak agar tidak sulit dibaca.",
      "Cocok untuk operasi sederhana seperti kuadrat angka atau filter nilai."
    ],
    code: "angka = [1, 2, 3, 4, 5]\nkuadrat = [item ** 2 for item in angka]\ngenap = [item for item in angka if item % 2 == 0]\n\nprint(kuadrat)\nprint(genap)"
  },
  {
    id: "lambda",
    title: "Lambda",
    level: "Menengah",
    duration: "30 menit",
    category: "Function",
    summary: "Gunakan function kecil satu baris untuk kebutuhan sederhana.",
    color: "red",
    content: [
      "Lambda adalah function anonim yang biasanya dipakai untuk logika pendek.",
      "Lambda sering muncul bersama sorted(), map(), atau filter().",
      "Jika logika mulai panjang, gunakan def agar kode lebih jelas."
    ],
    code: "data = [('Alya', 90), ('Bima', 85), ('Citra', 95)]\nurut = sorted(data, key=lambda siswa: siswa[1])\n\nprint(urut)"
  },
  {
    id: "pip-package",
    title: "PIP dan Package",
    level: "Menengah",
    duration: "35 menit",
    category: "Ekosistem",
    summary: "Pasang dan kelola package Python menggunakan pip.",
    color: "blue",
    content: [
      "PIP adalah package manager untuk memasang library Python dari PyPI.",
      "Gunakan requirements.txt agar dependency project mudah dipasang ulang.",
      "Biasakan membaca dokumentasi package sebelum menggunakannya di project."
    ],
    code: "pip install requests\npip freeze > requirements.txt\npip install -r requirements.txt"
  },
  {
    id: "virtual-environment",
    title: "Virtual Environment",
    level: "Menengah",
    duration: "35 menit",
    category: "Setup",
    summary: "Pisahkan dependency antar project agar lingkungan kerja tetap rapi.",
    color: "green",
    content: [
      "Virtual environment membuat ruang dependency khusus untuk satu project.",
      "Dengan venv, versi library antar project tidak saling bertabrakan.",
      "Aktifkan environment sebelum memasang package atau menjalankan project."
    ],
    code: "python -m venv .venv\n\n# Windows\n.venv\\Scripts\\activate\n\n# macOS/Linux\nsource .venv/bin/activate"
  },
  {
    id: "json-python",
    title: "JSON di Python",
    level: "Menengah",
    duration: "45 menit",
    category: "Data",
    summary: "Baca dan tulis data JSON untuk konfigurasi atau pertukaran data.",
    color: "yellow",
    content: [
      "JSON adalah format data populer yang mudah dibaca manusia dan mesin.",
      "Module json bawaan Python dapat mengubah dictionary menjadi JSON dan sebaliknya.",
      "JSON sering dipakai untuk file konfigurasi dan respons API."
    ],
    code: "import json\n\nprofil = {'nama': 'Alya', 'aktif': True}\nteks_json = json.dumps(profil)\ndata = json.loads(teks_json)\n\nprint(data['nama'])"
  },
  {
    id: "csv-python",
    title: "CSV di Python",
    level: "Menengah",
    duration: "45 menit",
    category: "Data",
    summary: "Kelola data tabel sederhana menggunakan file CSV.",
    color: "red",
    content: [
      "CSV cocok untuk menyimpan data tabel sederhana seperti daftar siswa atau transaksi.",
      "Python menyediakan module csv untuk membaca dan menulis file CSV.",
      "Gunakan DictReader saat ingin mengakses kolom berdasarkan nama header."
    ],
    code: "import csv\n\nwith open('siswa.csv', newline='') as file:\n    reader = csv.DictReader(file)\n    for row in reader:\n        print(row['nama'], row['nilai'])"
  },
  {
    id: "datetime-python",
    title: "Datetime",
    level: "Menengah",
    duration: "35 menit",
    category: "Data",
    summary: "Gunakan tanggal dan waktu untuk log, deadline, atau laporan.",
    color: "blue",
    content: [
      "Module datetime membantu membuat, membaca, dan memformat tanggal serta waktu.",
      "strftime() mengubah tanggal menjadi string dengan format tertentu.",
      "datetime sering dipakai untuk pencatatan waktu transaksi atau aktivitas."
    ],
    code: "from datetime import datetime\n\nsekarang = datetime.now()\nprint(sekarang.strftime('%d-%m-%Y %H:%M'))"
  },
  {
    id: "unit-testing",
    title: "Unit Testing",
    level: "Menengah",
    duration: "50 menit",
    category: "Robust Code",
    summary: "Uji function kecil agar program lebih mudah dipercaya.",
    color: "green",
    content: [
      "Unit testing memeriksa bagian kecil program, biasanya function, secara otomatis.",
      "Testing membantu menemukan bug lebih cepat saat kode berubah.",
      "Mulai dari test sederhana untuk function perhitungan atau validasi input."
    ],
    code: "def tambah(a, b):\n    return a + b\n\nassert tambah(2, 3) == 5\nassert tambah(-1, 1) == 0"
  },
  {
    id: "api-request",
    title: "API Request",
    level: "Menengah",
    duration: "55 menit",
    category: "Ekosistem",
    summary: "Ambil data dari internet menggunakan request HTTP sederhana.",
    color: "yellow",
    content: [
      "API memungkinkan program Python berkomunikasi dengan layanan lain lewat internet.",
      "Library requests sering digunakan untuk mengirim GET atau POST request.",
      "Respons API umumnya berbentuk JSON yang bisa diolah menjadi dictionary Python."
    ],
    code: "import requests\n\nresponse = requests.get('https://api.github.com')\ndata = response.json()\n\nprint(data['current_user_url'])"
  },
  {
    id: "mini-project-kalkulator",
    title: "Mini Project Kalkulator",
    level: "Pemula",
    duration: "50 menit",
    category: "Project",
    summary: "Bangun kalkulator terminal sederhana dengan operasi dasar.",
    color: "yellow",
    content: [
      "Project kalkulator melatih input, operator, if else, dan function.",
      "Mulai dari operasi tambah, kurang, kali, dan bagi.",
      "Tambahkan validasi agar pembagian nol tidak membuat program error."
    ],
    code: "def tambah(a, b):\n    return a + b\n\nangka1 = float(input('Angka pertama: '))\nangka2 = float(input('Angka kedua: '))\nprint(tambah(angka1, angka2))"
  },
  {
    id: "mini-project-to-do-list",
    title: "Mini Project To Do List",
    level: "Menengah",
    duration: "70 menit",
    category: "Project",
    summary: "Buat aplikasi daftar tugas sederhana berbasis terminal.",
    color: "red",
    content: [
      "To do list melatih list, loop, function, dan menu interaktif.",
      "Fitur dasar yang bisa dibuat: tambah tugas, lihat tugas, hapus tugas, dan keluar.",
      "Project ini bisa dikembangkan dengan file handling agar data tetap tersimpan."
    ],
    code: "tasks = []\n\ndef tambah_tugas(nama):\n    tasks.append(nama)\n\ntambah_tugas('Belajar function')\ntambah_tugas('Mengerjakan latihan')\nprint(tasks)"
  },
  {
    id: "mini-project-data-siswa",
    title: "Mini Project Data Siswa",
    level: "Menengah",
    duration: "80 menit",
    category: "Project",
    summary: "Kelola data siswa memakai list dan dictionary.",
    color: "blue",
    content: [
      "Project data siswa melatih kombinasi list, dictionary, function, dan pencarian data.",
      "Setiap siswa dapat disimpan sebagai dictionary berisi nama, kelas, dan nilai.",
      "Tambahkan fitur rata-rata nilai untuk latihan pengolahan data."
    ],
    code: "siswa = [\n    {'nama': 'Alya', 'nilai': 90},\n    {'nama': 'Bima', 'nilai': 85}\n]\n\nrata_rata = sum(item['nilai'] for item in siswa) / len(siswa)\nprint(rata_rata)"
  }
];

export const roadmap = [
  "Pahami cara kerja program, terminal, dan instalasi Python.",
  "Kuasai variabel, tipe data, operator, input, dan output.",
  "Latih percabangan if else serta perulangan for dan while.",
  "Gunakan struktur data list, tuple, dictionary, dan set.",
  "Bangun kebiasaan membuat function yang kecil dan jelas.",
  "Pelajari module, error handling, dan file handling.",
  "Masuk ke OOP untuk membuat program yang lebih terstruktur.",
  "Kerjakan mini project dan baca dokumentasi library populer."
];

export const codeExamples = [
  {
    title: "Cek Bilangan Genap",
    topic: "If Else",
    code: "angka = int(input('Masukkan angka: '))\n\nif angka % 2 == 0:\n    print('Genap')\nelse:\n    print('Ganjil')"
  },
  {
    title: "Rata-rata Nilai",
    topic: "List",
    code: "nilai = [80, 90, 75, 88]\nrata_rata = sum(nilai) / len(nilai)\nprint(rata_rata)"
  },
  {
    title: "Function Konversi Suhu",
    topic: "Function",
    code: "def celsius_ke_fahrenheit(celsius):\n    return (celsius * 9 / 5) + 32\n\nprint(celsius_ke_fahrenheit(30))"
  },
  {
    title: "Baca File",
    topic: "File Handling",
    code: "with open('data.txt', 'r') as file:\n    isi = file.read()\n    print(isi)"
  }
];

export const exercises = [
  {
    task: "Jika alas = 10 dan tinggi = 6, berapa hasil luas segitiga dengan rumus alas * tinggi / 2?",
    options: ["60", "30", "16", "36"],
    answer: "30",
    explanation: "Luas segitiga = 10 * 6 / 2, hasilnya 30."
  },
  {
    task: "Kode mana yang benar untuk menampilkan angka 1 sampai 5 menggunakan for loop?",
    options: ["for i range(1, 5): print(i)", "while i in range(5): print(i)", "for i in range(1, 6): print(i)", "print(range 1, 5)"],
    answer: "for i in range(1, 6): print(i)",
    explanation: "range(1, 6) menghasilkan angka 1, 2, 3, 4, dan 5 karena batas akhir tidak ikut."
  },
  {
    task: "Manakah function yang benar untuk menghitung total setelah diskon 10%?",
    options: ["return harga + 10", "return harga / 10", "return diskon - harga", "return harga * 0.9"],
    answer: "return harga * 0.9",
    explanation: "Diskon 10% berarti pembeli membayar 90% dari harga awal."
  },
  {
    task: "Untuk mengambil nilai nama dari dictionary siswa = {'nama': 'Budi'}, kode yang benar adalah...",
    options: ["siswa.nama", "siswa['nama']", "siswa(0)", "nama[siswa]"],
    answer: "siswa['nama']",
    explanation: "Dictionary diakses menggunakan key di dalam tanda kurung siku."
  },
  {
    task: "Method yang tepat untuk menambahkan item baru ke list tasks adalah...",
    options: ["tasks.add('Belajar')", "tasks.push('Belajar')", "tasks.append('Belajar')", "tasks.insert = 'Belajar'"],
    answer: "tasks.append('Belajar')",
    explanation: "append() menambahkan item ke bagian akhir list."
  },
  {
    task: "Jika angka = [2, 4, 6], hasil dari sum(angka) adalah...",
    options: ["3", "246", "6", "12"],
    answer: "12",
    explanation: "sum() menjumlahkan semua elemen numerik dalam list."
  },
  {
    task: "Keyword yang digunakan untuk menangkap error di Python adalah...",
    options: ["catch", "except", "error", "handle"],
    answer: "except",
    explanation: "Python menggunakan try dan except untuk menangani error."
  },
  {
    task: "Output dari teks = 'python'; teks.upper() adalah...",
    options: ["python", "Python", "upper", "PYTHON"],
    answer: "PYTHON",
    explanation: "upper() mengubah semua huruf dalam string menjadi huruf kapital."
  }
];

export const quizzes = [
  {
    question: "Tipe data untuk menyimpan teks di Python adalah...",
    options: ["integer", "boolean", "string", "float"],
    answer: "string"
  },
  {
    question: "Fungsi untuk menampilkan output ke terminal adalah...",
    options: ["input()", "len()", "type()", "print()"],
    answer: "print()"
  },
  {
    question: "Struktur data yang menggunakan pasangan key dan value adalah...",
    options: ["tuple", "dictionary", "set", "string"],
    answer: "dictionary"
  },
  {
    question: "Keyword untuk membuat function di Python adalah...",
    options: ["func", "function", "def", "make"],
    answer: "def"
  },
  {
    question: "Blok yang digunakan untuk menangani error adalah...",
    options: ["if else", "for in", "class object", "try except"],
    answer: "try except"
  }
];

export const projects = [
  {
    title: "Kalkulator Terminal",
    difficulty: "Pemula",
    description: "Buat kalkulator operasi tambah, kurang, kali, dan bagi dengan validasi input.",
    skills: ["Input", "Operator", "If Else", "Function"]
  },
  {
    title: "To Do List",
    difficulty: "Menengah",
    description: "Kelola daftar tugas dengan fitur tambah, lihat, hapus, dan simpan ke file.",
    skills: ["List", "Loop", "Function", "File Handling"]
  },
  {
    title: "Data Siswa",
    difficulty: "Menengah",
    description: "Bangun program untuk menyimpan data siswa, mencari nama, dan menghitung rata-rata nilai.",
    skills: ["Dictionary", "List", "Function", "Error Handling"]
  }
];

export const tips = [
  "Tulis kode setiap hari walau hanya 20 menit agar sintaks terasa natural.",
  "Jangan hanya membaca materi. Ubah contoh kode dan lihat hasilnya.",
  "Saat error muncul, baca pesan error dari baris paling bawah terlebih dahulu.",
  "Gunakan project kecil untuk mengikat banyak konsep menjadi satu pemahaman.",
  "Biasakan memberi nama variabel yang menjelaskan isi datanya."
];
