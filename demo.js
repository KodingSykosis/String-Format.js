/*globals jQuery*/
(function($) {
    Date.prototype.format = function(format) {
        return $.format.date(this, format);
    };

    $(function() {
        var output = $('#output');
        var str1 = "{Hi:!Hello} my name is {name},\n" +
            "I like {like:^to }.\nWhat do {you:$ like to do?}\n{what}" +
            "{{ foo: bar }}\n\n Now: {date:yyyy-dd-MM}\n\n";

        output.append(str1.format({
            //Hi: 'foo',
            name: 'FormatJs',
            like: 'build',
            you: 'you',
            date: new Date()
        }));

        var str2 = "Your {0} said she {1} it when I {2} and {3} her {4}.{5}\n";

        output.append(str2.format('mom', 'liked', 'pushed', 'popped', 'Array', 0));

        output.append("#{0}\n\n".format('Submission0'));

        output.append("{foo:!---}".format({foo:null}));
    });
})(jQuery);
