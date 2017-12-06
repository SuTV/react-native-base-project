import Realm from 'realm';

export default class BaseRepository {
    constructor(schema, keyVal) {
        this.schema = schema;
        this.key = keyVal;
    }

    findAll = function(cb) {
        Realm.open({schema: [this.schema]})
            .then(realm => {
                let items = realm.objects(this.schema.name);
                return cb(null, items);
            })
            .catch(error => {
                return cb(error);
            });
    }

    findByKey = function(keyVal, cb) {
        Realm.open({schema: [this.schema]})
            .then(realm => {
                let items = realm.objects(this.schema.name).filtered(this.key + ' = "' + keyVal + '"');
                return cb(null, items.length > 0 ? items[0] : null);
            })
            .catch(error => {
                return cb(error);
            });
    }

    create = function(data, cb) {
        Realm.open({schema: [this.schema]})
            .then(realm => {
                realm.write(() => {
                    realm.create(this.schema.name, data);
                });

                return cb(null, data);
            })
            .catch(error => {
                return cb(error);
            });
    }

    deleteByKey = function(keyVal, cb) {
        Realm.open({schema: [this.schema]})
            .then(realm => {
                let items = realm.objects(this.schema.name).filtered(this.key + ' = "' + keyVal + '"');
                item = items[0];
    
                if(item) {
                    realm.write(() => {
                        realm.delete(item);
                    });
                }
    
                return cb(null);
            })
            .catch(error => {
                return cb(error);
            });
    }

    deleteAll = function(cb) {
        Realm.open({schema: [this.schema]})
            .then(realm => {
                let items = realm.objects(this.schema.name);

                if(items.length > 0) {
                    realm.write(() => {
                        realm.delete(items);
                    });
                }

                return cb(null);
            })
            .catch(error => {
                return cb(error);
            });
    }
}