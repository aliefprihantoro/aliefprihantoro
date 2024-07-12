% LaTeX Resume Pandoc Template jb2resume.latex
%
% Copyright (c) 2016-2017, John Bokma
% Based on Jason Blevins' LaTeX CV Template;
%       http://jblevins.org/projects/cv-template/
%
% GitHub: https://github.com/john-bokma/resume-pandoc

\documentclass[10pt,letterpaper]{article}

\usepackage{hyperref}
\usepackage{geometry}
\usepackage{enumitem}
\usepackage{underscore}
\usepackage[parfill]{parskip}
\usepackage{lmodern}
\usepackage[svgnames]{xcolor}
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}

% Your name on the resume
\def\name{}

% The following metadata will show up in the PDF properties
\hypersetup{
  colorlinks = true,
  urlcolor=blue,
  linkcolor=magenta,  
  pdfauthor = {\name},
  pdfkeywords = {},
  pdftitle = {\name: Curriculum Vitae},
  pdfsubject = {Curriculum Vitae},
  pdfpagemode = UseNone
}

\geometry{
  body={6.5in, 9.0in},
  left=1.0in,
  top=1.0in
}

% Fix  for "! Undefined control sequence. <recently read> \tightlist",
% see: https://github.com/osener/markup.rocks/issues/4
% I have this issue with Pandoc 1.17.2
\providecommand{\tightlist}{%
  \setlength{\itemsep}{0pt}\setlength{\parskip}{0pt}}

% Page number is top right, and it is possible to control the rest of
% the header.
\pagestyle{myheadings}
\markright{\name}
\thispagestyle{empty}

% Custom section fonts
\usepackage{sectsty}
\sectionfont{\rmfamily\mdseries\Large}
\subsectionfont{\rmfamily\mdseries\itshape\large}

% Section numbers or not (default)
\setcounter{secnumdepth}{0}

% By putting an empty \item[] at the start of the list, the list
% starts on a new line.
\setlist[itemize]{leftmargin=1em,label={--},before=\item[]}

\setlist[description]{leftmargin=0em, style=sameline}

% Don't use monospace font for URLs
\urlstyle{same}

\begin{document}

% Place name at left
{\huge \name}

\bigskip


::: {align="center"}
`<img width='150px' src="assets/profile.png" />`{=html}
<h1>
Alief Prihantoro
</h1>
<h2 align="center">
Full Stack Dev (expert in front end)
</h2>
:::

Hello, I'm alif. I can build fullstack web apps with: typescript,
tailwind, astrojs, etc. I love sharing information about linux, open
source, neovim, and web. `<br/>`{=html}

## CONTACT

-   CONATACT : +6283_8293_83123
-   EMAIL : alifprihantoro@gmail.com
-   LOCATION : Indonesia, Central Java
-   WEB : https://alifprihantoro.vercel.app

## TECH

-   Languages and Pre-Processors: javascript , node.js , css3 ,
    typescript , sass , html5 , gnubash , markdown , lua
-   Frameworks: react , next.js , tailwindcss , astro , hugo
-   Host: vercel , firebase , netlify , githubpages
-   Devops: githubactions
-   Database: mongodb , mysql , postgresql
-   Build Tools: figma , Neovim , Git , pnpm , yarn

## PROJECT

### WEB

-   web v1 from muryp: [repo](https://github.com/muryp/web)
-   project api to learn from dicoding:
    [repo](https://github.com/alifprihantoro/dicoding-restaurant-app)
-   web to promote serabi v1:
    [repo](https://github.com/alifprihantoro/serabi) \|
    [preview](https://bicor.netlify.com)
-   project learn from freecode camp:
    [repo](https://github.com/alifprihantoro/freecode-camp)
-   old theme muryp: [repo](https://github.com/alifprihantoro/muryp-new)
    \| [preview](https://muryp.netlify.com)
-   project api to learn from dicoding:
    [repo](https://github.com/alifprihantoro/tugas-dicoding-bakend-api-book-app)

### NVIM

-   [muryp-gh.nvim](https://github.com/muryp/muryp-gh.nvim)
-   [muryp-link.nvim](https://github.com/muryp/muryp-link.nvim)
-   [muryp-checklist.nvim](https://github.com/muryp/muryp-checklist.nvim)
-   [muryp-file.nvim](https://github.com/muryp/muryp-file.nvim)

## CERTIVICATE

-   [Front End Development
    Libraries](https://freecodecamp.org/certification/alifmuryp/front-end-development-libraries):
    freeCodeCamp \| Jul 2022
-   [JavaScript Algorithms and Data
    Structures](https://freecodecamp.org/certification/alifmuryp/javascript-algorithms-and-data-structures):
    freeCodeCamp \| Jul 2022
-   [Belajar Dasar Pemrograman
    Web](https://www.dicoding.com/certificates/6RPND1DWRZ2M): Dicoding
    Indonesia \| Jun 2022 - Jun 2025
-   [Belajar Membuat Front-End Web untuk
    Pemula](https://www.dicoding.com/certificates/4EXG5Q5NEXRL):
    Dicoding Indonesia \| Jun 2022 - Jun 2025

\end{document}
