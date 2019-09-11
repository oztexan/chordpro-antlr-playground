antlr -Xexact-output-dir -o src/javascript/.antlr -Dlanguage=JavaScript src/grammar/chordpro/ChordProLexer.g4
antlr -Xexact-output-dir -o src/javascript/.antlr -Dlanguage=JavaScript src/grammar/chordpro/ChordPro.g4
antlr -Xexact-output-dir -o build/java src/grammar/chordpro/ChordProLexer.g4
antlr -Xexact-output-dir -o build/java src/grammar/chordpro/ChordPro.g4
cd build/java
javac ChordPro*.java
