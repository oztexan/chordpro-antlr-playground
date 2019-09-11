lexer grammar ChordProLexer;

/*
 * Lexer Rules
 */

// key/value directives
WS                  : (' ' | '\t')+ -> skip; // skip whitespace
DOPEN               : '{' -> pushMode(DIRECTIVE_MODE);
CHOPEN              : '[' -> pushMode(CHORD_MODE);
COPEN               : '#' -> pushMode(COMMENT_MODE);
NEWLINE				: ('\r'? '\n' | '\r') ;
LTEXT		        : ~[{}\r\n] ;

mode DIRECTIVE_MODE;
WSD                 : (' ' | '\t')+ -> skip; // skip whitespace
fragment US         : '_'; 
fragment A          : [aA]; // match either an 'a' or 'A'
fragment B          : [bB];
fragment C          : [cC];
fragment D          : [dD];
fragment E          : [eE];
fragment F          : [fF];
fragment G          : [gG];
fragment H          : [hH];
fragment I          : [iI];
fragment J          : [jJ];
fragment K          : [kK];
fragment L          : [lL];
fragment M          : [mM];
fragment N          : [nN];
fragment O          : [oO];
fragment P          : [pP];
fragment Q          : [qQ];
fragment R          : [rR];
fragment S          : [sS];
fragment T          : [tT];
fragment U          : [uU];
fragment V          : [vV];
fragment W          : [wW];
fragment X          : [xX];
fragment Y          : [yY];
fragment Z          : [zZ];
fragment DIGIT      : [0-9];
fragment PLUS       : '+';

COMPOSER            : C O M P O S E R;
LYRICIST            : L Y R I C I S T;
COPYRIGHT           : C O P Y R I G H T;
ALBUM               : A L B U M;
YEAR                : Y E A R;
KEY                 : K E Y;
TIME                : T I M E;
TEMPO               : T E M P O;
DURATION            : D U R A T I O N;
CAPO                : C A P O;
META                : M E T A;
HIGHLIGHT           : H I G H L I G H T;
IMAGE               : I M A G E;

CHORUS              : ( C H O R U S);
DEFINE              : ( D E F I N E) -> pushMode(DEFINE_MODE);
CHORDSHOW           : ( C H O R D) -> pushMode(CHORDSHOW_MODE);

TEXTFONT            : ( T E X T F O N T);
TEXTSIZE            : ( T E X T S I Z E);
TEXTCOLOUR          : ( T E X T C O L O U? R);
CHORDCOLOUR         : ( C H O R D C O L O U? R);
TABCOLOUR           : ( T A B C O L O U? R);
TABSIZE             : ( T A B S I Z E);

COLUMNS             : ( C O L U M N S) | (C O L);
SOC                 : ( S T A R T US O F US C H O R U S) | (S O C);
EOC                 : ( E N D US O F US C H O R U S) | (E O C);
SOV                 : ( S T A R T US O F US V E R S E) | (S O V);
EOV                 : ( E N D US O F US V E R S E) | (E O V);
SOT                 : ( S T A R T US O F US T A B ) | (S O T);
EOT                 : ( E N D US O F US T A B ) | (E O T);

SOG                 : ( S T A R T US O F US G R I D) | (S O G);
SOGLCR              : SOG WSD (DIGIT+ PLUS)? DIGIT+ (PLUS DIGIT+)?;
SOGLMBR             : SOG WSD (DIGIT+ PLUS)? DIGIT+ X DIGIT+ (PLUS DIGIT+)?; //  left+measuresxbeats+right ;
EOG                 : ( E N D US O F US G R I D) | (E O G);
NPP                 : ( N E W US P H Y S I C A L US P A G E) | (N P P);

SUBTITLE            : ( S U B T I T L E ) | (S T);
NS                  : ( N E W US S O N G) | (N S);
NP                  : ( N E W US P A G E) | (N P);

COMMENT_ITALIC      : ( C O M M E N T US I T A L I C) | (C I);
COMMENT_BOX         : ( C O M M E N T US B O X WSD* DC DTEXT+) | (C B WSD* DC DTEXT+); //Effort to disambiguate 'cb' short conflict in Chordpro spec
NG                  : ( N O US G R I D) | (N G);

CB                  : ( C O L U M N US B R E A K) | (C B);

ARTIST              : ( A R T I S T) | (A);
COMMENT             : ( C O M M E N T) | (C);
TITLE               : ( T I T L E ) | (T);
GRID                : ( G R I D) | (G);

CUSTOM              : ( X '-' DCUSTOM+);

DVALUE              : (DC DTEXT*);
fragment DC         : ':';
DCLOSE              : '}' -> popMode;
// Hint: https://github.com/antlr/antlr4/issues/2229
// The lexer matches largest, DTEXT+ would grap an entire line so don't use +/* here. 
// Pass a single character token to parser instead, won't match more than other mode rules
DTEXT		        : ~[{}\r\n] ;
DCUSTOM		        : ~[:{}\r\n] ;

mode CHORD_MODE;
WSCH                : (' ' | '\t')+ -> skip; // skip whitespace
//CHORD             : [A-Ga-g]; //Strict
CHORD		        : ~[\]\r\n] ; //Permissive
CHCLOSE             : ']' -> popMode;

mode COMMENT_MODE;
WSC                 : (' ' | '\t')+ -> skip; // skip whitespace
CTEXT		        : ~[\r\n]* NEWLINE -> popMode;

mode DEFINE_MODE;
WSDEFINE            : (' ' | '\t')+ -> skip; // skip whitespace
DEFINETEXT		    : ':' ~[}\r\n]* ; //Permissive
DEFINECLOSE         : '}' -> mode(DEFAULT_MODE);

mode CHORDSHOW_MODE;
WSCHORDSHOW         : (' ' | '\t')+ -> skip; // skip whitespace
CHORDTEXT		    : ':' ~[}\r\n]* ; //Permissive
CHORDCLOSE          : '}' -> mode(DEFAULT_MODE);
