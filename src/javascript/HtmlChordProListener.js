const antlr4 = require('antlr4/index');
const ChordProLexer = require('./.antlr/ChordProLexer');
const ChordProParser = require('./.antlr/ChordProParser');
var ChordProListener = require('./.antlr/ChordProListener').ChordProListener;

HtmlChordProListener = function(res) {
    this.Res = res;    
    ChordProListener.call(this);
	return this;
};

HtmlChordProListener.prototype = Object.create(ChordProListener.prototype);
HtmlChordProListener.prototype.constructor = HtmlChordProListener;

// Enter a parse tree produced by ChordProParser#chordpro.
HtmlChordProListener.prototype.enterChordpro = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#chordpro.
HtmlChordProListener.prototype.exitChordpro = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#line.
HtmlChordProListener.prototype.enterLine = function(ctx) {
    this.Res.write('->');

};

// Exit a parse tree produced by ChordProParser#line.
HtmlChordProListener.prototype.exitLine = function(ctx) {
    this.Res.write('<BR>');
};


// Enter a parse tree produced by ChordProParser#directive.
ChordProListener.prototype.enterDirective = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#directive.
ChordProListener.prototype.exitDirective = function(ctx) {
    this.Res.write('DIRECTIVE->');
};


// Enter a parse tree produced by ChordProParser#custom.
ChordProListener.prototype.enterCustom = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#custom.
ChordProListener.prototype.exitCustom = function(ctx) {
    this.Res.write('CUSTOM->');
};


// Enter a parse tree produced by ChordProParser#title.
ChordProListener.prototype.enterTitle = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#title.
ChordProListener.prototype.exitTitle = function(ctx) {
    this.Res.write('TITLE->');
};


// Enter a parse tree produced by ChordProParser#subtitle.
ChordProListener.prototype.enterSubtitle = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#subtitle.
ChordProListener.prototype.exitSubtitle = function(ctx) {
    this.Res.write('SUBTITLE->');
};


// Enter a parse tree produced by ChordProParser#sot.
ChordProListener.prototype.enterSot = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#sot.
ChordProListener.prototype.exitSot = function(ctx) {
    this.Res.write('START OF TAB->');
};


// Enter a parse tree produced by ChordProParser#eot.
ChordProListener.prototype.enterEot = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#eot.
ChordProListener.prototype.exitEot = function(ctx) {
    this.Res.write('END OF TAB->');
};


// Enter a parse tree produced by ChordProParser#soglcr.
ChordProListener.prototype.enterSoglcr = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#soglcr.
ChordProListener.prototype.exitSoglcr = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#soglmbr.
ChordProListener.prototype.enterSoglmbr = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#soglmbr.
ChordProListener.prototype.exitSoglmbr = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#sog.
ChordProListener.prototype.enterSog = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#sog.
ChordProListener.prototype.exitSog = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#eog.
ChordProListener.prototype.enterEog = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#eog.
ChordProListener.prototype.exitEog = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#artist.
ChordProListener.prototype.enterArtist = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#artist.
ChordProListener.prototype.exitArtist = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#composer.
ChordProListener.prototype.enterComposer = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#composer.
ChordProListener.prototype.exitComposer = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#lyricist.
ChordProListener.prototype.enterLyricist = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#lyricist.
ChordProListener.prototype.exitLyricist = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#copyright.
ChordProListener.prototype.enterCopyright = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#copyright.
ChordProListener.prototype.exitCopyright = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#album.
ChordProListener.prototype.enterAlbum = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#album.
ChordProListener.prototype.exitAlbum = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#year.
ChordProListener.prototype.enterYear = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#year.
ChordProListener.prototype.exitYear = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#key.
ChordProListener.prototype.enterKey = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#key.
ChordProListener.prototype.exitKey = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#time.
ChordProListener.prototype.enterTime = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#time.
ChordProListener.prototype.exitTime = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#tempo.
ChordProListener.prototype.enterTempo = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#tempo.
ChordProListener.prototype.exitTempo = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#duration.
ChordProListener.prototype.enterDuration = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#duration.
ChordProListener.prototype.exitDuration = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#capo.
ChordProListener.prototype.enterCapo = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#capo.
ChordProListener.prototype.exitCapo = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#meta.
ChordProListener.prototype.enterMeta = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#meta.
ChordProListener.prototype.exitMeta = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#columns.
ChordProListener.prototype.enterColumns = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#columns.
ChordProListener.prototype.exitColumns = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#comment.
ChordProListener.prototype.enterComment = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#comment.
ChordProListener.prototype.exitComment = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#comment_italic.
ChordProListener.prototype.enterComment_italic = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#comment_italic.
ChordProListener.prototype.exitComment_italic = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#comment_box.
ChordProListener.prototype.enterComment_box = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#comment_box.
ChordProListener.prototype.exitComment_box = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#highlight.
ChordProListener.prototype.enterHighlight = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#highlight.
ChordProListener.prototype.exitHighlight = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#image.
ChordProListener.prototype.enterImage = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#image.
ChordProListener.prototype.exitImage = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#soc.
ChordProListener.prototype.enterSoc = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#soc.
ChordProListener.prototype.exitSoc = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#eoc.
ChordProListener.prototype.enterEoc = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#eoc.
ChordProListener.prototype.exitEoc = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#sov.
ChordProListener.prototype.enterSov = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#sov.
ChordProListener.prototype.exitSov = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#eov.
ChordProListener.prototype.enterEov = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#eov.
ChordProListener.prototype.exitEov = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#chorus.
ChordProListener.prototype.enterChorus = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#chorus.
ChordProListener.prototype.exitChorus = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#textfont.
ChordProListener.prototype.enterTextfont = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#textfont.
ChordProListener.prototype.exitTextfont = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#textsize.
ChordProListener.prototype.enterTextsize = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#textsize.
ChordProListener.prototype.exitTextsize = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#textcolour.
ChordProListener.prototype.enterTextcolour = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#textcolour.
ChordProListener.prototype.exitTextcolour = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#chordcolour.
ChordProListener.prototype.enterChordcolour = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#chordcolour.
ChordProListener.prototype.exitChordcolour = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#tabcolour.
ChordProListener.prototype.enterTabcolour = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#tabcolour.
ChordProListener.prototype.exitTabcolour = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#tabsize.
ChordProListener.prototype.enterTabsize = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#tabsize.
ChordProListener.prototype.exitTabsize = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#ns.
ChordProListener.prototype.enterNs = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#ns.
ChordProListener.prototype.exitNs = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#np.
ChordProListener.prototype.enterNp = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#np.
ChordProListener.prototype.exitNp = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#npp.
ChordProListener.prototype.enterNpp = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#npp.
ChordProListener.prototype.exitNpp = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#cb.
ChordProListener.prototype.enterCb = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#cb.
ChordProListener.prototype.exitCb = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#grid.
ChordProListener.prototype.enterGrid = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#grid.
ChordProListener.prototype.exitGrid = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#ng.
ChordProListener.prototype.enterNg = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#ng.
ChordProListener.prototype.exitNg = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#define.
ChordProListener.prototype.enterDefine = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#define.
ChordProListener.prototype.exitDefine = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#chordshow.
ChordProListener.prototype.enterChordshow = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#chordshow.
ChordProListener.prototype.exitChordshow = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#nonstandard.
ChordProListener.prototype.enterNonstandard = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#nonstandard.
ChordProListener.prototype.exitNonstandard = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#commentline.
ChordProListener.prototype.enterCommentline = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#commentline.
ChordProListener.prototype.exitCommentline = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#chord.
ChordProListener.prototype.enterChord = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#chord.
ChordProListener.prototype.exitChord = function(ctx) {
};


// Enter a parse tree produced by ChordProParser#lyricline.
ChordProListener.prototype.enterLyricline = function(ctx) {
};

// Exit a parse tree produced by ChordProParser#lyricline.
ChordProListener.prototype.exitLyricline = function(ctx) {
};


exports.HtmlChordProListener = HtmlChordProListener;

