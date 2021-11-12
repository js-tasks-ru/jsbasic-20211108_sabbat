function truncate(str, maxlength) {
    let strSlice = maxlength;
    if(str.length > maxlength) {
        return str.slice(0, strSlice - 1) + '…';
    } 

    return str;
}

// alert( truncate('Вот, что мне хотелось бы сказать на эту тему:', 20) );
// alert( truncate('Всем привет!', 20) );