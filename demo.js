/*globals jQuery*/
(function($) {
    $(function() {
        var output = $('#output');
        var testString = "{Hi:!Hello} my name is {name},\n" +
            "I like {like:^to }.\nWhat do {you:$ like to do?}\n{what}" +
            "{{ foo: bar }}";

        output.html(testString.format({
            //Hi: 'foo',
            name: 'FormatJs',
            like: 'build',
            you: 'you'
        }));
    });
})(jQuery);
