import Realm from 'realm';

export default class BaseRepository {
    constructor(realm: Realm, schema, keyVal) {
        this._realm = realm;
        this._schema = schema;
        this._key = keyVal;
    }

    findAll = function(cb) {
        try {
            let items = this._realm.objects(this._schema.name);
            return cb(null, items);
        } catch (error) {
            return cb(error);
        }
    }

    findByKey = function(keyVal, cb) {
        try {
            let items = this._realm.objects(this._schema.name).filtered(this._key + ' == "' + keyVal + '"');
            return cb(null, items.length > 0 ? items[0] : null);
        } catch (error) {
            return cb(error);
        }
    }

    create = function(data, cb) {
        try {
            this._realm.write(() => {
                this._realm.create(this._schema.name, data);
            });

            return cb(null, data);
        } catch (error) {
            alert(error.message);
            return cb(error);
        }
    }

    createList = function(dataList, cb) {
        try {
            this._realm.write(() => {
                for(let i = 0; i < dataList.length; i++) {
                    let data = dataList[i];

                    this._realm.create(this._schema.name, data);
                }
            });

            return cb(null, dataList);
        } catch (error) {
            return cb(error);
        }
    }

    deleteByKey = function(keyVal, cb) {
        try {
            let items = this._realm.objects(this._schema.name).filtered(this._key + ' == "' + keyVal + '"');
            item = items[0];

            if(item) {
                this._realm.write(() => {
                    this._realm.delete(item);
                });
            }

            return cb(null);
        } catch (error) {
            return cb(error);
        }
    }

    deleteAll = function(cb) {
        try {
            let items = this._realm.objects(this._schema.name);

            if(items.length > 0) {
                this._realm.write(() => {
                    this._realm.delete(items);
                });
            }

            return cb(null);
        } catch (error) {
            return cb(error);
        }
    }
}