// bool, int, float, double, string, data, and date

export const UserSchema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
        id: {type: 'string', indexed: true},
        type: 'int',
        userId: 'string',
        userInfoInString: 'string',
        isActive: 'bool'
    }
};