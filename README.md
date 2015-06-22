# OOO
OΟО Is a Turing complete programming language based on Ook! (http://www.dangermouse.net/esoteric/ook.html) designed to act as an example of how to properly abuse Unicode.

# Syntax
- O (U+004F - Latin Capital Letter O)
- Ο (U+039F - Greek Capital Letter Omicron)
- О (U+041E - Cyrillic Capital Letter O)

# Commands
|OΟО|Brainfuck|Description|
|---|---------|-----------|
|OΟ|>|Move the pointer to the right|
|ΟO|<|Move the pointer to the left|
|OO|+|Increment the memory cell under the pointer|
|ОО|-|Decrement the memory cell under the pointer|
|ОO|.|Output the character signified by the cell at the pointer|
|OО|,|Input a character and store it in the cell at the pointer|
|ОΟ|[|Jump past the matching ΟО if the cell under the pointer is 0|
|ΟО|]|Jump back to the matching ОΟ|
|ΟΟ|N/A|Halt program|

# Implementation
I've made a simple demo that pretty much offloads all the work onto the first Brainfuck library that turned up in a search on NPM. 

# Examples
## Hello World
OΟOOOOOOOOOOOOOOOOOOОΟΟOOOOOOOOOOOOOOOOOOΟООΟОΟOОOOΟOOOOOOOOOOOOOOОΟΟOOOOOOOOOOΟООΟОΟOOOОOOOOOOOOOOOOOOOОOОOOOOOOOОOOΟOΟOΟOOOOOOOOOOOOOOOOОΟΟOOOOOOOOOOΟООΟОΟOОOOΟOΟOΟOOOOOOOOOOOOOOOOOOOOОΟΟOOOOOOOOOOOOOOOOOOOOΟООΟОΟOОООООООOΟOΟOΟOΟOОOOOOOOOОOОООООООООООООOОООООООООООООООООOOΟOΟOOОOΟΟ