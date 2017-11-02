# Puppeteer Screenshots

Generating screenshots of URL at various device widths, using Puppeteer.

Current widths - 
*2560 	// large 27" cinema displays
*1920 	// large desktop
*1600 	// desktop
*1280 	// laptop
*1024 	// tablet-landscape
*768 	// tablet-portrait
*480 	// smartphone-landscape
*320 	// smartphone-portrait

## Getting Started

### Prerequisites

Uses cool new ES6 functions so at minimum:

```
Node v7.6.+
```

### Installing

Clone this repository into [yourdirectory]

```
cd [yourdirectory]
```

The following command will install Puppeteer, as well automatically install the latest version of Chromium 

```
npm install
```

Update `index.js` with your URL and optionally, remove/add/update device widths.

To generate screenshots, go to command line and run

```
node index.js
```
Screenshots will be generated as PNGs in the screenshots/ folder


## Author

* [Mukesh Kumar](https://github.com/mukeshkumar108)

## License

This project is licensed under the ISC License

## Acknowledgments

* Danny Markov of TutorialZine - https://tutorialzine.com/@danny
* And this article - https://tutorialzine.com/2017/08/automating-google-chrome-with-node-js