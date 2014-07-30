String-Format.js
================

String formatting for javascript

    var str = "{Hi:!Hello} my name is {name},\n" +
            "I like {like:^to }.\nWhat do {you:$ like to do?}\n{what}" +
            "{{ foo: bar }}";

    var result = str.format({
            name: 'FormatJs',
            like: 'build',
            you: 'you'
        });

output

    Hello my name is FormatJs,
    I like to build.
    What do you like to do?
    {{ foo: bar }}