function hasProperties(data, properties) {
    let array = [];
    for (let property of properties) {
        loopInProperty(data.field, property);
    }

    return array;
}

function whitelist(data, properties) {
    for(let property in data){
        if(!(properties.includes(property)))
            delete data[property];
    }
    return data;
}

function blacklist(data, properties) {

}

function loopInProperty(object, property){
    let str = property.split('.');
    let i;
    let o; //same as Object in Param
    for(i = 1; i < str.length; i++){
        if(str in object)
            return false;
    }
    return true;
}

module.exports = {
    hasProperties,
    whitelist,
    blacklist
};
