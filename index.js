const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	const myUrl = 'http://motherfuckingwebsite.com/'; //change with your own url

	const viewports = [
						2560, 	// large 27" cinema displays
						1920, 	// large desktop
						1600, 	// desktop
						1280, 	// laptop
						1024, 	// tablet-landscape
						768, 	// tablet-portrait
						480, 	// smartphone-landscape
						320 	// smartphone-portrait
						]; 		// change / amend as necessary 

	await page.goto(myUrl);

	for(let i=0; i < viewports.length; i++) {
		let vw = viewports[i];

		await page.setViewport({
			width: vw,
			height: 1000 // this is minimum height
		});

		await page.screenshot({
			path: `screenshots/screen-${vw}.png`,
			fullPage: true
		});
	}

	browser.close();
})();