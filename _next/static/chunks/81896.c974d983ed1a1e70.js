"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81896],{81896:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var a=[Object.freeze({displayName:"Scheme",fileTypes:["scm","ss","sch","rkt"],name:"scheme",patterns:[{include:"#comment"},{include:"#block-comment"},{include:"#sexp"},{include:"#string"},{include:"#language-functions"},{include:"#quote"},{include:"#illegal"}],repository:{"block-comment":{begin:"\\#\\|",contentName:"comment",end:"\\|\\#",name:"comment",patterns:[{include:"#block-comment",name:"comment"}]},comment:{begin:"(^[ \\t]+)?(?=;)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.scheme"}},end:"(?!\\G)",patterns:[{begin:";",beginCaptures:{0:{name:"punctuation.definition.comment.scheme"}},end:"\\n",name:"comment.line.semicolon.scheme"}]},constants:{patterns:[{match:"#[t|f]",name:"constant.language.boolean.scheme"},{match:"(?<=[\\(\\s])((#e|#i)?[0-9]+(\\.[0-9]+)?|(#x)[0-9a-fA-F]+|(#o)[0-7]+|(#b)[01]+)(?=[\\s;()'\",\\[\\]])",name:"constant.numeric.scheme"}]},illegal:{match:"[()\\[\\]]",name:"invalid.illegal.parenthesis.scheme"},"language-functions":{patterns:[{match:"(?x)\n(?<=(\\s|\\(|\\[))\n( do|or|and|else|quasiquote|begin|if|case|set!|\ncond|let|unquote|define|let\\*|unquote-splicing|delay|\nletrec)\n(?=(\\s|\\())",name:"keyword.control.scheme"},{comment:"\n						These functions run a test, and return a boolean\n						answer.\n					",match:"(?x)\n(?<=(\\s|\\())\n( char-alphabetic|char-lower-case|char-numeric|\nchar-ready|char-upper-case|char-whitespace|\n(?:char|string)(?:-ci)?(?:=|<=?|>=?)|\natom|boolean|bound-identifier=|char|complex|\nidentifier|integer|symbol|free-identifier=|inexact|\neof-object|exact|list|(?:input|output)-port|pair|\nreal|rational|zero|vector|negative|odd|null|string|\neq|equal|eqv|even|number|positive|procedure\n)\n(\\?)\n(?=(\\s|\\())\n",name:"support.function.boolean-test.scheme"},{comment:"\n						These functions change one type into another.\n					",match:"(?x)\n(?<=(\\s|\\())\n( char->integer|exact->inexact|inexact->exact|\ninteger->char|symbol->string|list->vector|\nlist->string|identifier->symbol|vector->list|\nstring->list|string->number|string->symbol|\nnumber->string\n)\n(?=(\\s|\\())\n",name:"support.function.convert-type.scheme"},{comment:"\n						These functions are potentially dangerous because\n						they have side-effects which could affect other\n						parts of the program.\n					",match:"(?x)\n(?<=(\\s|\\())\n( set-(?:car|cdr)|\n(?:vector|string)-(?:fill|set)\n)\n(!)\n(?=(\\s|\\())\n",name:"support.function.with-side-effects.scheme"},{comment:"\n						+, -, *, /, =, >, etc. \n					",match:"(?x)\n(?<=(\\s|\\())\n( >=?|<=?|=|[*/+-])\n(?=(\\s|\\())\n",name:"keyword.operator.arithmetic.scheme"},{match:"(?x)\n(?<=(\\s|\\())\n( append|apply|approximate|\ncall-with-current-continuation|call/cc|catch|\nconstruct-identifier|define-syntax|display|foo|\nfor-each|force|format|cd|gen-counter|gen-loser|\ngenerate-identifier|last-pair|length|let-syntax|\nletrec-syntax|list|list-ref|list-tail|load|log|\nmacro|magnitude|map|map-streams|max|member|memq|\nmemv|min|newline|nil|not|peek-char|rationalize|\nread|read-char|return|reverse|sequence|substring|\nsyntax|syntax-rules|transcript-off|transcript-on|\ntruncate|unwrap-syntax|values-list|write|write-char|\n\n\ncons|c(a|d){1,4}r|\n\n\nabs|acos|angle|asin|assoc|assq|assv|atan|ceiling|\ncos|floor|round|sin|sqrt|tan|\n(?:real|imag)-part|numerator|denominator\n\n\nmodulo|exp|expt|remainder|quotient|lcm|\n\n\ncall-with-(?:input|output)-file|\n(?:close|current)-(?:input|output)-port|\nwith-(?:input|output)-from-file|\nopen-(?:input|output)-file|\n\n\nchar-(?:downcase|upcase|ready)|\n\n\nmake-(?:polar|promise|rectangular|string|vector)\n\n\nstring(?:-(?:append|copy|length|ref))?|\nvector(?:-length|-ref)\n)\n(?=(\\s|\\())\n",name:"support.function.general.scheme"}]},quote:{comment:"\n				We need to be able to quote any kind of item, which creates\n				a tiny bit of complexity in our grammar.  It is hopefully\n				not overwhelming complexity.\n				\n				Note: the first two matches are special cases.  quoted\n				symbols, and quoted empty lists are considered constant.other\n				\n			",patterns:[{captures:{1:{name:"punctuation.section.quoted.symbol.scheme"}},match:"(?x)\n(')\\s*\n([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*)\n",name:"constant.other.symbol.scheme"},{captures:{1:{name:"punctuation.section.quoted.empty-list.scheme"},2:{name:"meta.expression.scheme"},3:{name:"punctuation.section.expression.begin.scheme"},4:{name:"punctuation.section.expression.end.scheme"}},match:"(?x)\n(')\\s*\n((\\()\\s*(\\)))\n",name:"constant.other.empty-list.schem"},{begin:"(')\\s*",beginCaptures:{1:{name:"punctuation.section.quoted.scheme"}},comment:"quoted double-quoted string or s-expression",end:"(?=[\\s()])|(?<=\\n)",name:"string.other.quoted-object.scheme",patterns:[{include:"#quoted"}]}]},"quote-sexp":{begin:"(?<=\\()\\s*(quote)\\s+",beginCaptures:{1:{name:"keyword.control.quote.scheme"}},comment:"\n				Something quoted with (quote \xabthing\xbb).  In this case \xabthing\xbb\n				will not be evaluated, so we are considering it a string.\n			",contentName:"string.other.quote.scheme",end:"(?=[\\s)])|(?<=\\n)",patterns:[{include:"#quoted"}]},quoted:{patterns:[{include:"#string"},{begin:"(\\()",beginCaptures:{1:{name:"punctuation.section.expression.begin.scheme"}},end:"(\\))",endCaptures:{1:{name:"punctuation.section.expression.end.scheme"}},name:"meta.expression.scheme",patterns:[{include:"#quoted"}]},{include:"#quote"},{include:"#illegal"}]},sexp:{begin:"(\\()",beginCaptures:{1:{name:"punctuation.section.expression.begin.scheme"}},end:"(\\))(\\n)?",endCaptures:{1:{name:"punctuation.section.expression.end.scheme"},2:{name:"meta.after-expression.scheme"}},name:"meta.expression.scheme",patterns:[{include:"#comment"},{begin:"(?x)\n(?<=\\()\n(define)\\s+\n(\\()\n([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*)\n((\\s+\n([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*|[._])\n)*\n)\\s*\n(\\))\n",captures:{1:{name:"keyword.control.scheme"},2:{name:"punctuation.definition.function.scheme"},3:{name:"entity.name.function.scheme"},4:{name:"variable.parameter.function.scheme"},7:{name:"punctuation.definition.function.scheme"}},end:"(?=\\))",name:"meta.declaration.procedure.scheme",patterns:[{include:"#comment"},{include:"#sexp"},{include:"#illegal"}]},{begin:"(?x)\n(?<=\\()\n(lambda)\\s+\n(\\()\n((?:\n([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*|[._])\n\\s+\n)*(?:\n([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*|[._])\n)?)\n(\\))\n",captures:{1:{name:"keyword.control.scheme"},2:{name:"punctuation.definition.variable.scheme"},3:{name:"variable.parameter.scheme"},6:{name:"punctuation.definition.variable.scheme"}},comment:"\n						Not sure this one is quite correct.  That \\s* is\n						particularly troubling\n					",end:"(?=\\))",name:"meta.declaration.procedure.scheme",patterns:[{include:"#comment"},{include:"#sexp"},{include:"#illegal"}]},{begin:"(?<=\\()(define)\\s([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*)\\s*.*?",captures:{1:{name:"keyword.control.scheme"},2:{name:"variable.other.scheme"}},end:"(?=\\))",name:"meta.declaration.variable.scheme",patterns:[{include:"#comment"},{include:"#sexp"},{include:"#illegal"}]},{include:"#quote-sexp"},{include:"#quote"},{include:"#language-functions"},{include:"#string"},{include:"#constants"},{match:"(?<=[\\(\\s])(#\\\\)(space|newline|tab)(?=[\\s\\)])",name:"constant.character.named.scheme"},{match:"(?<=[\\(\\s])(#\\\\)x[0-9A-F]{2,4}(?=[\\s\\)])",name:"constant.character.hex-literal.scheme"},{match:"(?<=[\\(\\s])(#\\\\).(?=[\\s\\)])",name:"constant.character.escape.scheme"},{comment:"\n						the . in (a . b) which conses together two elements\n						a and b. (a b c) == (a . (b . (c . nil)))\n					",match:"(?<=[ ()])\\.(?=[ ()])",name:"punctuation.separator.cons.scheme"},{include:"#sexp"},{include:"#illegal"}]},string:{begin:'(")',beginCaptures:{1:{name:"punctuation.definition.string.begin.scheme"}},end:'(")',endCaptures:{1:{name:"punctuation.definition.string.end.scheme"}},name:"string.quoted.double.scheme",patterns:[{match:"\\\\.",name:"constant.character.escape.scheme"}]}},scopeName:"source.scheme"})]}}]);