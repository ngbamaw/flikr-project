# FlickrSearchEngine

## Disclaimer

-   We made the choice to only select the first 20 pictures for a given tag for UX purposes. We could have easily increased that number (limit number in http service)

-   When filling search input and typing enter 2 chips could appear. This is an issue with primeng. Only one tag will be sent to the backend

-   NSFW is enabled by default in Flickr's API even with `safe_search` set to `1`

-   Some pictures can seem unrelated to the search you made but Flickr's API is based on the tags you put. We invite to add as much tags as possible to have a more precise search

## Getting started

```bash
git clone git@github.com:ngbamaw/flikr-project.git # or git clone https://github.com/ngbamaw/flikr-project if you are using HTTPS
cd flickr-project
npm install
npm run start
```

## Test

```bash
npm run test
```

# Authors

-   Landry Monga
-   William Ngbama
