## HTML DOCUMENTATION

- ### HTML

  HTML stands for Hyper Text Markup Language, and it basically
  describes the structure of a web page, how the page is going to
  look, details inside the page , it’s appearance. It is not a
  programming language, rather it is a markup language, as there is no
  logical coding required. The word hypertext means linking one web
  page with another webpage. Html has many tags such as \<p\>,
  \<h1\>,\<div\> and many more by which one can define a structure of
  their webpage. Html is not a case sensitive language so the tags
  \<H1\> & \<h1\> works in a similar way.  
  Let us discuss a HTML tag: \<p\> This is Deepansh Agrawal’s
  documentation on HTML. \</p\> So the output will be:

  This is Deepansh Agrawal’s documentation on HTML.

  Every tag contains an opening and a closing part. Some of the tags
  do not require both opening and closing tags such as \</br\> which
  can be used to break a new line.

- ### EXTENSION (.html / .html)

  The extension of html files is ".html" or ".htm". Since older
  versions of Windows only used three letters for an extension, this
  is why .htm but the newer browser accepts .html-based versions also.
  So, broadly speaking, the extension tells the browser that the file
  is an html file.

- ### STRUTURE OF HTML

  We can understand HTML’s web page structure using a tree data
  structure. Every tree has a root node, then it has 2 child nodes
  i.e. Left child node and right child node. Then each child of the
  root also has 2 child nodes and this structure continues. So in the
  case of HTML we can describe html as a root node and it has 2 child
  nodes which are the head and the body section. Then the head section
  also has child nodes such as title, links, scrips and many more.
  Similarly the body section also has child nodes such as script,
  image,p, div, ect. The structure of the webpage defines the flow of
  tags in which the web page will appear.  
  Below is a visual representation of html as a tree data structure.
  <p align="center">
  <img  src="images/html tree structure.png" width="50%" height="50%" alt="HTML TREE STRUCTURE">
  </p>

- ### COMPILER, INTERPRETER & HTMLPARSER

  A compiler takes the entire program in one go. It generates an
  intermediate machine code. It is best suited for the production
  environment. The compiler used by programming languages such as
  C,C++, java, etc. It generates errors on compile time only.  
  Whereas an interpreter takes a single line of code at a time. It
  never produces an intermediate machine code. It is best suited for a
  software development environment. It is used by languages such as
  python, perl, ruby, etc.  
  Parser or we can use HTMLParser for html. Parsing means analyzing
  and converting a program into an internal format that a runtime
  environment can actually run. Initially when we open a html file in
  a browser, it converts the stream of characters into tokens and this
  process is called tokenization. Then after tokenization, nodes are
  created from the tokens. These nodes are then converted into a DOM
  i.e. document object model as a tree structure.

- ### DEVELOPER TOOLS

  So, basically developer tools are the modern tools provided by the
  web browser which are being used by the developer to test, debug,
  view source code of their website. The main task of developer tools
  can be that a person can open the developer tools and scroll to a
  particular section of a web page and there they can test, debug or
  change their design.  
  Similarly dev tools are being used to understand the structure of a
  web page or how the elements are being aligned over one another. We
  can use developer tools in almost all browsers. In google chrome we
  can enter developer tools section either by right click -\> inspect,
  or by the shortcut key : Ctrl + Shift + I.  
  As developer tools we can also view the source code of any webpage
  by right click -\> view source. In this way if we are not a
  developer of that webpage, then we can see the source code as how
  the developer has designed the page.

- ### HTML TAGS / ELEMENTS

  So there are many many tags in html which have separate roles or
  work to do. For example an tag will let you add an image to your
  webpage or an tag which is an anchor tag allows you to add links to
  your webpage. Let us take a tag and understand it’s syntax: \<p\>
  This is a paragraph tag. \</p\> There are 3 main parts:  
  The opening tag: In case of an opening tag it consists of the tag
  within the angle brackets and tells the browser that the particular
  rag is being started. In the above case \<p\> is the opening tag.  
  The closing tag: In case of a closing tag,it tells the browser that
  the following tag is now being closed and it is also between angle
  braces. In the above example \</p\> acts as a closing paragraph
  tag.  
  The content: The content refers to the data which you are writing
  between the opening and closing tags. In the above example “This is
  a paragraph tag.” is the content.

- ### \<h\> ELEMENT

  The heading element refers to the heading of a paragraph or text
  written in big/bold letters. Heading is used to highlight important
  topics. Search engines use headings for indexing and structuring the
  content of a web page. There are 6 types of heading section elements
  from The heading element refers to the heading of a paragraph or
  text written in big/bold letters. Heading is used to highlight
  important topics. Search engines use headings for indexing and
  structuring the content of a web page. There are 6 types of heading
  section elements from \<h1\> to \<h6\>, as \<h1\> being the largest
  and boldest and moving towards \<h6\> smallest. Ex:

  ## This is a type of h2 heading.

- ### ANCHOR \<a\> ELEMENT

  The anchor element is used to either create a hyperlink of other
  websites or create a hyperlink to mail or phone. It also has both
  opening and closing tags so the content between the \<a\> & \</a\>
  can be displayed as a link and whenever a cursor points towards the
  links the user can redirect to the particular link or mail or phone.
  The anchor tag generally contains a href attribute in which we
  provide the link where we want to redirect the user if they click on
  it. The new link can open in the same tab or new tab/window
  depending upon the value of the target attribute.  
  Ex: [Click here to visit the documentation on \<a\>
  element.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

- ### IMAGE \<img\> ELEMENT

  The image element is used to embed the images in your web pages to
  make your webpage more interactive to users. The image element does
  not have a closing tag, instead the best practice suggests to use a
  “/” in the \<img\> tag. Image element has the following set of
  attributes such as src which takes either the url of the image (in
  case if the image is being taken from the internet) or the relative
  path (in case if the image is stored locally in your computer).
  Image element also have an attribute alt which is very useful in
  cases if a browser cannot load the image or the image is corrupted
  for some reasons then the text written in the alt attribute will be
  displayed instead of the image so the user gets the idea of what the
  image was all about. Html supports each type of image formats such
  as jpeg, png, svg, webp, etc.
  Ex: \<img src="images/myimage1.jpg" width="10%" height="10%" alt="HTML TREE STRUCTURE"\>

<p align="center">
    <img  src="images/myimage1.jpg" width="10%" height="10%" alt="HTML TREE STRUCTURE">
    </p>

- ### TABLE \<table\> ELEMENT

  The \<table\> element is used to display data in a two-dimensional
  tabular way where the table contains rows and columns. Each cell in
  a row contains a data. A table is also used to quickly see
  relationships between 2 columns. There are many sub-elements in a
  \<table\> element such as \<thead\>, \<th\>, \<tbody\> , \<tb\>,
  \<td\>, etc. Below is an example of HTML Table.

  ```
  <table style="border-spacing: 10px;">
                      <thead>
                          <tr>
                              <td>NAME</td>
                              <td>Age</td>
                              <td>GENDER</td>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>Deepansh</td>
                              <td>22</td>
                              <td>Male</td>
                          </tr>
                          <tr>
                              <td>Aashu</td>
                              <td>20</td>
                              <td>Male</td>
                          </tr>
                          <tr>
                              <td>Mahima</td>
                              <td>21</td>
                              <td>Female</td>
                          </tr>
                      </tbody>
                  </table>
  ```

  | NAME     | Age | GENDER |
  | -------- | --- | ------ |
  | Deepansh | 22  | Male   |
  | Aashu    | 20  | Male   |
  | Mahima   | 21  | Female |

- ### BOLD \<b\> & STRONG \<strong\> ELEMENT

  The html element \<b\> was used to make the content bold-face or you
  may say to bring the reader’s immediate attention to the bolded
  text. However the best practices suggest that we should use
  \<strong\> element instead of \<b\> element to bold the text. We can
  also use the font-weight attribute to increase the boldness of the
  text. Below is an example of both \<b\> and \<strong\> elements.  
  **This is \<b\> element.**  
  **This is \<strong\> element.**

- ### EMPHASIS \<em\> ITALIC \<i\> ELEMENT

  The \<i\> tag displays the text in italic. Like the \<b\> tag, the
  \<i\> tag is also used for presentation purposes. It represents some
  part of a text in an alternate voice or mood or something that
  indicates a different quality of text. The \<em\> tag specifies the
  stress emphasis of its contents. It can be used for changing the
  meaning of a sentence. The text within this tag is also displayed in
  italic.  
  For Example:  
  _This is \<i\> element._  
  _This is \<em\> element._

- ### SPAN \<span\> ELEMENT

  \<span\> element is a simple container tag which is used to contain
  elements on which we can apply a similar type of styling or
  javascript by giving the span an id or class. Span itself don't have
  any kind of properties and it have very similar features as of
  \<div\> unlike \<span\> is an inline display type of element.

  For ex:

  ```
   <span>
                              <h5>This is Span Heading.</h5>
                              <p>Lorem ipsum dolor sit amet.</p>
                          </span>
  ```

  ##### This is Span Heading.

  Lorem ipsum dolor sit amet.
