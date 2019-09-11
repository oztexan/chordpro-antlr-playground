grammar ChordPro;
options { tokenVocab=ChordProLexer; }

chordpro            : line+ EOF;

line                : ((directive | lyricline) NEWLINE)
                    | commentline | define | chordshow | nonstandard;

directive           : DOPEN
                    ( custom 
                    | title 
                    | subtitle 
                    | sot 
                    | eot 
                    | ns 
                    | artist           
                    | composer        
                    | lyricist        
                    | copyright       
                    | album           
                    | year            
                    | key             
                    | time            
                    | tempo           
                    | duration        
                    | capo            
                    | meta            
                    | comment         
                    | comment_italic  
                    | comment_box     
                    | highlight       
                    | image           
                    | soc             
                    | eoc             
                    | sov             
                    | eov  
                    | sog
                    | soglcr
                    | soglmbr
                    | eog           
                    | chorus          
                    | lyricline 
                    | commentline
                    | textfont            
                    | textsize            
                    | textcolour          
                    | chordcolour         
                    | tabcolour           
                    | tabsize             
                    | np                  
                    | npp                 
                    | cb                  
                    | grid                   
                    | ng                  
                    | columns) DCLOSE ;

 
custom              : CUSTOM DVALUE ;
title               : TITLE DVALUE ;
subtitle            : SUBTITLE DVALUE ;
sot                 : SOT DVALUE? ;
eot                 : EOT ;
soglcr              : SOGLCR;
soglmbr             : SOGLMBR;
sog                 : SOG DVALUE? ;
eog                 : EOG ;
 
artist              : ARTIST DVALUE ;
composer            : COMPOSER DVALUE ;
lyricist            : LYRICIST DVALUE ;
copyright           : COPYRIGHT DVALUE ;
album               : ALBUM DVALUE ;
year                : YEAR DVALUE ;
key                 : KEY DVALUE ;
time                : TIME DVALUE ;
tempo               : TEMPO DVALUE ;
duration            : DURATION DVALUE ;
capo                : CAPO DVALUE ;
meta                : META DVALUE ;
columns             : COLUMNS DVALUE ;
comment             : COMMENT DVALUE ;
comment_italic      : COMMENT_ITALIC DVALUE ;
comment_box         : COMMENT_BOX ; //Handle 'cb' abbreviation share in chordpro spec
highlight           : HIGHLIGHT DVALUE ;
image               : IMAGE DVALUE ;
 
soc                 : SOC DVALUE? ;
eoc                 : EOC ;
sov                 : SOV DVALUE? ;
eov                 : EOV ;
chorus              : CHORUS DVALUE? ;
textfont            : TEXTFONT DVALUE? ;
textsize            : TEXTSIZE DVALUE? ;
textcolour          : TEXTCOLOUR DVALUE? ;
chordcolour         : CHORDCOLOUR DVALUE? ;
tabcolour           : TABCOLOUR DVALUE? ;
tabsize             : TABSIZE DVALUE? ;
 
ns                  : NS ;
np                  : NP ;
npp                 : NPP ;
cb                  : CB ;
grid                : GRID ;
ng                  : NG ;
 
define              : DOPEN DEFINE DEFINETEXT DEFINECLOSE NEWLINE;
chordshow           : DOPEN CHORDSHOW CHORDTEXT CHORDCLOSE NEWLINE;
nonstandard         : DOPEN DTEXT+ DCLOSE;

commentline         : COPEN CTEXT;
chord               : CHOPEN CHORD+ CHCLOSE;
lyricline           : (chord | LTEXT)*;    //Cannot contain DOPEN or DCLOSE