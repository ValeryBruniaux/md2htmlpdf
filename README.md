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

```
% The Wonderful title  
% My Name  
% 20/04/2018  
```

This block supports multilines :

```
% The Wonderful title  
  You can have a multilines title like this  
% My Name  
  And my friend  
  And another one  
% 20/04/2018
```

**After a blank line** you can write your document using markdown syntax. Look example files in examples directory.

## Pandoc Markdown extensions

You can edit your text using the [standard Markdown syntax](http://commonmark.org/help/).
But Pandoc includes a lot of extensions that are very useful like [GFM - GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown). So you can easily write : code blocks, task lists, tables, [emojis](https://www.webpagefx.com/tools/emoji-cheat-sheet/) :smiley:, strikethrough...

The example file [proportionnalite.md](https://raw.githubusercontent.com/ValeryBruniaux/md2htmlpdf/master/examples/proportionnalite.md) shows you how to use them.

## Tips

### Blank line

Insert blank lines in Markdown is not always easy. You can insert a blank line between Line 1 and Line 2 like this :

```
Line 1

\

Line 2
```

### Mathematical expressions

Use the [standard Latex syntax](https://en.wikibooks.org/wiki/LaTeX/Mathematics) : $math expression here$ or $$math$$ if you want a center block formula

### Images floating

- Image float to left and text fill the right : ```![](theImage.png){.floatleft}```
- Image float to right and text fill the left : ```![](theImage.png){.floatright}```
- Image is a block in the center : ```![](theImage.png){.center}```

If you want a caption for this image you need to wrap the content in a span like this :

- Image float to left with caption under and text fill the right :

```
[![](theImage.png)  <= insert 2 blank spaces at the end of line to break the flow!!!
The caption !]{.floatleft}
```

- Image float to right with caption under and text fill the left :

```
[![](theImage.png)  <= insert 2 blank spaces at the end of line to break the flow!!!
The caption !]{.floatright}
```
- Image is a block in the center with caption under : ```![The caption](theImage.png)```

### Multiple columns

Insert your columns in a block :

```
::: cols

:::
```

#### 2 columns

```
::: cols

::: col12
First column
:::

::: col22
Second column
:::

:::
```

#### 3 columns

```
::: cols

::: col13
First column
:::

::: col23
Second column
:::

::: col33
Third column
:::

:::
```

### Warning block

```
::: warning  
You can add a warning block by using this syntax.  
:::
```

### Your own style :+1: !

One Pandoc Markdown extension is very powerful. You can assign a **class name** to a piece of text and **decorate** it as you want in the **CSS file**.

If you write in your Markdown file :
bla bla bla **[your important text here]{.inlinewarning}** bla bla bla.

***your important text here*** becomes a span with the class name **inlinewarning**, so you can style this piece of text in the CSS file.

In CSS file :
```css
.inlinewarning {
background-color: yellow;
text-decoration: underline;
}
```

### Force page breaks (before or after)

You can use the previous tip to force page breaks. At the end of the default CSS file you can find the **@media print** section.

In this section you can set values for **widows** and **orphans** and choose if you want to avoid a page break after the titles.

But you can also use the classes **.pagebreakbefore** and **.pagebreakafter** in your Markdown file to force a page break everywhere you want. Just add {.pagebreakbefore} after a title, like this :

```
# Wonderful title{.pagebreakbefore}
```

You can also assign these 2 classes to any piece of text using the previous tip.

# Fonts examples

You can find fonts used in the examples in the [Fonts directory](https://github.com/ValeryBruniaux/md2htmlpdf/tree/master/fonts).
