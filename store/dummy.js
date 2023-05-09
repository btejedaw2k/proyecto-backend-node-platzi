const db = {
    'users': [
        { id: '1', name: 'Bryan', last_name: 'Tejeda' },
        { id: '2', name: 'Juan', last_name: 'Shion' },
        { id: '3', name: 'Mario', last_name: 'Chacon' },
        { id: '4', name: 'Evelyn', last_name: 'Oliva' }
    ]
};

async function list(table) {
    return db[table];
}

async function get(table, id) {
    let collection = await list(table);
    return collection.filter(item => item.id === id)[0] || null;
}

async function upSert(table, data) {
    db[table].push(data);
    return data || null;
}

async function remove(table, id) {
    return true;
}

module.exports = {
    list,
    get,
    upSert,
    remove
}