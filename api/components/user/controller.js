const nanoId = require('nanoid');
const Table = 'users';

module.exports = function(injectedStore) {
    let store = injectedStore;
    if(!store) {
        store = require('../../../store/dummy');
    }

    function list () {
        return store.list(Table);
    }

    function get(id) {
        return store.get(Table, id);
    }

    function upSert(body) {
        const user = {
            name: body.name,
            last_name: body.last_name
        }
        if(body.id) {
            user.id = body.id;
        }
        else {
            user.id = nanoId();
        }

        return store.upSert(Table, user);
    }

    return {
        list,
        get,
        upSert
    }
}