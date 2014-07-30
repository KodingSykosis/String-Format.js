String.prototype.format = function () {
    var results = this.toString(),
        translate = function(format, key, value) {
            if (typeof value === 'object')
                for(var prop in value)
                    format = translate(format, key + '.' + prop, value[prop]);

            var re = new RegExp('{(?=[^{])' + key + '(?::(?:\\^([^}]+)|\\$([^}]+)|!([^}]+)|([^}]+)))?}(?:(?=[^}])|$)', 'g');
            return format.replace(re, function(match, group1, group2, group3, group4) {
                var str;
                switch(typeof value) {
                    case 'boolean':
                    case 'number':
                        str = value.toString();
                        break;
                    default:
                        if (new Date(value) != 'Invalid Date' && value !== null && value !== undefined) {
                            if (typeof Date.prototype.format === 'undefined')
                            throw "Format not defined for type Date.";

                            str = (new Date(value)).format(group4);
                        } else {
                            str = value || group3 || '';
                        }
                }

                return (group1 || '') + str + (group2 || '');
            });
        },
        data = (typeof arguments[0] === 'object' &&
                !(arguments[0] instanceof Date || arguments[0] instanceof Array))
                    ? arguments[0]
                    : arguments;

    for (var prop in data) {
        results = translate(results, prop, data[prop]);
    }

    return results.replace(/{(?=[^{])[^:}]+(?::!([^}]*)|[^}]+)?}(?:(?=[^}])|$)/g, '$1');
};

String.prototype.containsFormatting =
    function() {
        return (/{(?=[^}])[^}]+}(?:(?=[^}])|$)/).test(this);
    };
