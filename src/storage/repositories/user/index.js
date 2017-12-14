import { UserSchema } from '../schemas';
import BaseRepository from '../base'
import User from '../../models/user'
import StringUtil from '../../../utils/string-util'

export default class UserRepository extends BaseRepository {
    constructor(realm) {
        super(realm, UserSchema, 'id')
    }

    getDefaultUser = function(cb) {
        this.findAll((error, items) => {
            if(error) { cb(error); }
            else {
                cb(null, items.length > 0 ? items[0] : null);
            }
        });
    }

    getByTypeAndId = function(type, userId, cb) {
        try {
            let items = this._realm.objects(this._schema.name).filtered('type == ' + type + ' AND userId == "' + userId + '"');

            return cb(null, items.length > 0 ? items[0] : null);
        } catch (error) {
            return cb(error);
        }
    }

    update = function(type, userId, newVal: User, cb) {
        try {
            let items = this._realm.objects(this._schema.name).filtered('type == ' + type + ' AND userId == "' + userId + '"');
            item = items[0];

            if(item) {
                this._realm.write(() => {
                    item.type = newVal.type;
                    item.userId = newVal.userId;
                    item.userInfoInString = newVal.userInfoInString;
                    item.isActive = newVal.isActive;
                });
            } else {
                this._realm.write(() => {
                    this._realm.create(this._schema.name, newVal);
                });
            }

            return cb(null, item);
        } catch (error) {
            return cb(error);
        }
    }

    deleteUser = function(type, userId, cb) {
        try {
            let items = this._realm.objects(this._schema.name).filtered('type == ' + type + ' AND userId == "' + userId + '"');
            item = items[0];

            if(item) {
                this._realm.write(() => {
                    this._realm.delete(item);
                });
            } else {
                alert('NULL');
            }

            return cb(null);
        } catch (error) {
            return cb(error);
        }
    }
}