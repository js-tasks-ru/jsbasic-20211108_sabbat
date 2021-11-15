function isEmpty(obj) {
    for (let key in obj){
        if (obj.hasOwnProperty(key)) {
            return false;
        } 
    }

    return true;
}

let schedule = {};
alert ( isEmpty(schedule) );

schedule['8:30'] = 'Stend up';
alert( isEmpty(schedule) );


