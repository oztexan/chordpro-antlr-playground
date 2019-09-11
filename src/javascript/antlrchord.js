const http = require('http');
const antlr4 = require('antlr4');
const ChordProLexer = require('./.antlr/ChordProLexer');
const ChordProParser = require('./.antlr/ChordProParser');
const HtmlChordProListener = require('./HtmlChordProListener').HtmlChordProListener;
const ChordProErrorListener = require('./ChordProErrorListener').ChordProErrorListener;

http.createServer((req, res) => {
   
   res.writeHead(200, {
       'Content-Type': 'text/html',        
   });

   res.write('<html><head><meta charset="UTF-8"/></head><body>');
   
   var input = `{title: Swing Low Sweet Chariot}
{title : Swing Low Sweet Chariot}
{title: Swing Low Sweet Chariot} 
  {title: Swing Low Sweet Chariot}

{c: CHORUS}
{start_of_tab}
{SOT: Solo}
E|-3-----3-2--------2-----2-0------||
B|---5-------3--------3-------2----||
G|-----4-------4--------2-------2--|| x4
D|---------------------------------||
A|---------------------------------||
E|---------------------------------||
{EOT}
{t: Joe Joe Billy}
{title: Joe Joe Billy}
{title: Swing Low Sweet Chariot}
{st: SCHQWUID}


[C]Smelly[A]Belly[B]

[A]      [B]  [C]

#------------------------------------------------------------------------------+
 Meta-data directives
#------------------------------------------------------------------------------+

# This directive defines the title of the song.
{title: Joe Joe Billy}
{title}
{title: Swing Low Sweet Chariot} 

{t: Swing Low Sweet Chariot}

# This directive defines a subtitle of the song.
`;

   var chars = new antlr4.InputStream(input);
   var lexer = new ChordProLexer.ChordProLexer(chars);
   var tokens  = new antlr4.CommonTokenStream(lexer);
   var parser = new ChordProParser.ChordProParser(tokens);
      
   parser.buildParseTrees = true;   
   var tree = parser.chordpro();
   var cpListener = new HtmlChordProListener(res);
   antlr4.tree.ParseTreeWalker.DEFAULT.walk(cpListener, tree);
   
   res.write('</body></html>');
   res.end();

}).listen(1337);