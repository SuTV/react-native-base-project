import Realm from 'realm';
import { UserSchema } from '../realm-schemas';
import BaseRepository from '../base'
import User from '../../models/user'
import StringUtil from '../../../utils/string-util'

let _idProp = 'id';
let _repo = new BaseRepository(UserSchema, _idProp);

let UserRepository = {

    getDefaultUser: function(cb) {
        _repo.findAll((error, items) => {
            if(error) { cb(error); }
            else {
                cb(null, items.length > 0 ? items[0] : null);
            }
        });
    },

    getByTypeAndId: function(type, userId, cb) {
        Realm.open({schema: [_repo.schema]})
        .then(realm => {
            let items = realm.objects(_repo.schema.name).filtered('type = ' + type + ' AND userId = "' + userId + '"');

            return cb(null, items.length > 0 ? items[0] : null);
        })
        .catch(error => {
            return cb(error);
        });
    },

    create: function(data, cb) {
        return _repo.create(data, cb);
    },

    update: function(type, userId, newVal: User, cb) {
        Realm.open({schema: [_repo.schema]})
            .then(realm => {
                let items = realm.objects(_repo.schema.name).filtered('type = ' + type + ' AND userId = "' + userId + '"');
                item = items[0];

                if(item) {
                    realm.write(() => {
                        item.type = newVal.type;
                        item.userId = newVal.userId;
                        item.userInfoInString = newVal.userInfoInString;
                        item.isActive = newVal.isActive;
                    });
                }

                return cb(null, item);
            })
            .catch(error => {
                return cb(error);
            });
    },

    deleteAll: function(cb) {
        return _repo.deleteAll(cb);
    }
};

module.exports = UserRepository;