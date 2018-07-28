RubyAnn
--------
*(see also the original jQuery version
 [jquery.rubyann](https://github.com/PandaWood/jquery.rubyann))*

**rubyann** is a small library to allow you to write
[ruby annotations](https://en.wikipedia.org/wiki/Ruby_character)
using a simplified syntax. Basically, to avoid having to write the fairly
tedious XML required for ruby annotations - which is often used for
[furigana](https://en.wikipedia.org/wiki/Furigana).

For most users, this will simply mean - **a convenient way of being able to
output furigana into the Japanese text of their web page.**

#### Example

It works by using this syntax - in this case, to show what kanji goes with what hiragana:

```
{日,に}{本,ほん}{語,ご}
```

Note the use of braces to match up the Kanji with the Hiragana character.

RubyAnn will parse this and replace the HTML with something that looks like this:

![RubyAnn result](demo/nihongo-furigana-example.png)

This is done by using RubyAnn in javascript like this:
```
  let annotate = new RubyAnn()
  annotate.html('.furigana-text')
```

You can also pass in your own delimiters (instead of curly braces)
incase there's a conflict eg `new RubyAnn('[]')` - you just have to
pass 2 characters as a string, for start/end.

Another use, is to just get the raw XML - without affecting the DOM -
and use it however you need
```
  let annotate = new RubyAnn()
  annotate.text('{鳥,とり}')   // returns '<ruby><rb>鳥</rb><rp>(</rp><rt>とり</rt><rp>)</rp></ruby>'
```

## Build
#### Requirements

If you want to clone and build RubyAnn yourself you'll need:

[NodeJS](http://www.nodejs.org)

#### Run
`npm install` or `yarn` - installs the (NPM) dependencies ([yarn](https://yarnpkg.com/) is highly recommended)

`npm run release` transpiles all source and minifies the main plugin source to 'dist' directory

`npm run test` transpiles and runs the test suite
