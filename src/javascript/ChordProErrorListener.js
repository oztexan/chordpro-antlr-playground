const antlr4 = require('antlr4/index');
const ErrorListener = require('antlr4/error/index');
const ChordProLexer = require('./.antlr/ChordProLexer');
const ChordProParser = require('./.antlr/ChordProParser');
const ChordProListener = require('./.antlr/ChordProListener').ChordProListener;

ChordProErrorListener = function(res) {
    this.Res = res;
    this.symbol = '';
    ErrorListener.ErrorListener.call(this);
	return this;
};

ChordProErrorListener.prototype = Object.create(ErrorListener.ErrorListener.prototype);
ChordProErrorListener.prototype.constructor = ChordProErrorListener;

ChordProErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {              
    this.Res.write(msg);
    
    if(offendingSymbol == null)
        this.symbol = recognizer.getTokenErrorDisplay(offendingSymbol);
    else
        this.symbol = offendingSymbol.text;
};

exports.ChordProErrorListener = ChordProErrorListener;