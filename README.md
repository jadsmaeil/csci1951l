# CSCI1951L Course Website

This is the course website for CSCI1951L: Blockchains and Cryptocurrencies at Brown University.

## Getting Started

First, install NPM dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Editing Site Data

Many commonly updated data sources are abstracted out into JSON filed within the `/data` directory:

- `assignments.json` contains the content of the assignments table.
    - `name` is a string that represents the display name of the assignment.
    - `out` is a string that represents the release date of the assignment.
    - `in` is a string that represents the due date of the assignment.
    - `link` is an optional string that represents the handout link to the assignment. If left blank, the assignment is
      greyed out and unclickable.

- `lectures.json` contains the content of the lectures table.
    - `topic` is a string that represents the display name of the lecture.
    - `date` is a string that represents the date of the lecture.
    - `slidesLink` is an optional string that defines the URL of the lecture slides. If blank, a dash is displayed.
    - `recordingLink` is an optional string that defines the URL of the recording. If blank, a dash is displayed.

- `course_staff.json` contains the content of the course staff grid.
    - `name` the name of the staff member.
    - `image` a link to a headshot.
    - `position` Professor, HTA, UTA, UTA-STA
    - `pronouns` a string reprsenting staff member's preferred pronouns.
    - `csLogin` staff member's CS login.
    - `desc` a short biography.

## Deployment

The easiest way to deploy this site is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
.
