// Kata tugas yang tidak bisa dikapitalkan menurut PUEBI dan lain
// https://ejaan.kemendikdasmen.go.id/eyd/penggunaan-huruf/huruf-kapital/
// 
const kataTugas = [
    "agar", "ala", "alih-alih", "akan", "andaikan", "asal", "asalkan", "atas",
    "bak", "bagi", "bahu-membahu", "begitu", "biar", "biarpun", "bila",
    "dan", "dari", "daripada", "dengan", "demi", "di", "dalam",
    "ibarat", "hingga", "jika", "jikalau", "kalang-kabut", "kalau", "karena", "ke", 
    "kepada", "kendati", "ketika", "laksana", "maka", "manakala", "melainkan", 
    "mengenai", "meskipun", "melalui", "namun", "oleh", "padahal", "pada", "sampai", 
    "sambil", "sayur-mayur", "seakan-akan", "seandainya", "sebab", "sebagaimana", 
    "sebelum", "sebagai", "sehabis", "sejak", "sekalipun", "selagi", "selama", 
    "sementara", "semenjak", "seperti", "seraya", "serba-serbi", "sesudah", "setelah", 
    "selesai", "sewaktu", "sungguh", "supaya", "tatkala", "tentang", "terhadap", 
    "tetapi", "tanpa", "untuk", "umpamanya", "walau", "yang"
];

/**
 * Ubah teks menjadi teks berhuruf besar semua
 * @param {string} text Teks atau penggalannya
 * @returns {string} Teks yang sudah menjadi besar
 */
function capitalize(text) {
    return text.toUpperCase();
}

/**
 * Ubah teks menjadi teks berhuruf kecil semua
 * @param {string} text Teks atau penggalannya
 * @returns {string} Teks yang sudah menjadi kecil
 */
function normalize(text) {
    return text.toLowerCase();
}

/**
 * Ubah teks menjadi teks berkalimat
 * @param {string} text Teks atau penggalamannya
 * @returns {string} Teks yang sudah menjadi kalimat 
 */
function sentenced(text) {
    const firstChar = capitalize(text.charAt(0));
    const restChars = normalize(text.slice(1));

    return firstChar + restChars;
}

/**
 * Ubah teks menjadi judul sesuai PUEBI
 * @param {string} text Teks atau penggalannya
 * @returns {string} Teks yang sudah menjadi judul 
 */
function titled(text) {
    const normalText = normalize(text);
    const textArray = normalText.split(/\s+/g);

    for (let i = 0; i < textArray.length; i = i + 1) {
        if (i === 0) {
            textArray[i] = sentenced(textArray[i]);
        } else if (!kataTugas.includes(textArray[i])) {
            textArray[i] = sentenced(textArray[i]);
        }
    }

    return textArray.join(' ');
}

export {
    capitalize,
    normalize,
    sentenced,
    titled
}