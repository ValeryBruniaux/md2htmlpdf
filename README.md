# What is md2htmlpdf ?
**md2thmlpdf** can **convert markdown files to HTML and PDF** with predefined styles.

# What to do with md2htmlpdf ?

The purpose is to replace Latex to **produce standard documents** like lessons, articles, etc.
Latex is a good tool but styling with CSS is easier and more flexible than old Latex syntax.

**With md2htmlpdf, you edit your style in CSS file, edit contents with markdown and you can generate beautiful documents in HTML and PDF.**

HTML and PDF files look pretty the same, so you can **put the HTML file on the web** or **print the PDF file** for your students.

# What do I need to install ?

**md2htmlpdf** uses 2 external tools :

 - [pandoc](https://pandoc.org/)
 - [wkhtmltopdf](https://wkhtmltopdf.org/) ⚠️ if you want footers in PDF you need the QT-patched version in Arch Linux !

You can install theese tools with your favorite distribution.

If you want to use equations, you need **internet access** to reach the transform application [codecogs](http://latex.codecogs.com/svg.latex)

# How to use md2htmlpdf ?

**md2htmlpdf** requires 1 or 3 arguments.

- **Usage with 1 argument** : md2htmlpdf markdownFile.md

	**Example** : *md2htmlpdf examples/proportionnalite.md*

- **Usage with 3 arguments** : md2htmlpdf templateFile.template cssFile.css markdownFile.md
	1) Template file to apply
	1) Css file to apply
	1) Markdown file to convert

	**Example** : *md2htmlpdf templates/lesson.template css/lesson.css examples/proportionnalite.md*

# Syntax for markdown file ?

## Header and Pandoc Title Block

All [pandoc extensions](https://pandoc.org/MANUAL.html#pandocs-markdown) for markdown are usable (equation, emoji, tables, ...)

At the beginning of markdown file put a [Pandoc Title Block](https://pandoc.org/MANUAL.html#metadata-blocks) to describe your document like this :

% The Wonderful title  
% My Name  
% 20/04/2018  

This block supports multilines :

% The Wonderful title  
  You can have a multilines title like this  
% My Name  
  And my friend  
  And another one  
% 20/04/2018

After a blank line you can write your document using markdown syntax. Look example files in examples directory.

## Pandoc Markdown extensions

You can edit your text using the [standard Markdown syntax](http://commonmark.org/help/).
But Pandoc includes a lot of extensions that are very useful like [GFM - GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown). So you can write easily : code blocks, tasks lists, tables, [emojis](https://www.webpagefx.com/tools/emoji-cheat-sheet/) :smiley:, strikethrough...

The example file proportionnalite.md show you how to use them.

## Tips

### Warning block
::: warning
You can add a warning block by using this syntax.
:::

# Fonts examples

You can find Fonts used in the examples in the Fonts directory.