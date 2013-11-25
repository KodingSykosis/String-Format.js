String.prototype.format = function () {
    var results = this.toString(),
        translate = function(format, key, value) {
            if (typeof value === 'object')
                for(var prop in value)
                    format = translate(format, key + '.' + prop, value[prop]);

            if (typeof value === 'boolean') {
                value = value.toString();
            }

            var re = new RegExp('{(?=[^{])' + key + '(?::(?:\\^([^}]+)|\\$([^}]+)|!([^}]+)))?}(?=[^}])', 'g');
            return format.replace(re, '$1' + (value || '$3') + '$2');
        },
        data = typeof arguments[0] === 'object' ? arguments[0] : arguments;

    for (var prop in data) {
        results = translate(results, prop, data[prop]);
    }

    return results.replace(/{(?=[^{])[^:}]+(?::!([^}]*))?}(?=[^}])/g, '$1');
};
