let ObjectUtil = {
    getPropertyName: function (prop, value) {
        for(var i in prop) {
            if (prop[i] == value){
                 return i;
            }
        }

        return false;
     }
};

module.exports = ObjectUtil;