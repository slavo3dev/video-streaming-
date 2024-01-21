# Video-strreaming App

## Table of contents
* [General info](#General-info)
* [Technologies](#Technologies)
* [Setup](#Setup)
* [Usage](#Usage)
* [Contact](#Contact)

## General Info
Video-strreaming App
Video-streaming App is a Next.js project bootstrapped with create-next-app,that allows users to explore video content from creators.
## Technologies
This project is build with:
-Nextjs
-React
-Tailwind
## Setup
Getting Started:
1. Register and get a free API Key at https://magic.link/
2. Clone the repo:
   git clone https://github.com/Prototype-Next-LLC/video-streaming.git
3. Install all dependencies for a project:
   yarn install
4. Enter your API in lib/magic-client.js:
   new Magic(YOUR_API_KEY!);

Run the development server:

yarn run dev

Open http://localhost:3000 with your browser to see the result.
## Usage
After finishing Setup you will be taken to the login page. 
After you Register, you will be directed to Main Page where you can see the cretors content.

In order to use external images in app, configuration is required. We use domain in next.config.json to provide list of
allowed hostnames for external images. Learn more: https://nextjs.org/docs/api-reference/next/legacy/image#domains .

The YouTube Data API uses a quota system,and projects that enable the YouTube Data API
 have a default quota allocation of 10,000 units per day. Using search Method in API costs 100units per request.
#### Contact:

Email: nikola@prototypenext.com
Website: https://prototypenext.com

Project Link: https://github.com/Prototype-Next-LLC/video-streaming.git
