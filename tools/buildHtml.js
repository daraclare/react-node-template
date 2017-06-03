import fs from 'fs';
import cheerio from 'cheerio';

/* eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if(err) {
    return console.error(err);
  }

  const $ = cheerio.load(markup);

  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', function(err) {
    if(err) {
      return console.error(err);
    }
    console.info('index html written to dist folder');
  });
});
