import { utimes } from "fs";
import url from "url";

const urlString = "https://www.gooogle.com/search?q=hello+world"; //demo url

//URL OBJECT
const urlObj = new URL(urlString);
console.log(urlObj);
/*
Returns an object with

URL {
  href: 'https://www.gooogle.com/search?q=hello+world',
  origin: 'https://www.gooogle.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'www.gooogle.com',
  hostname: 'www.gooogle.com',
  port: '',
  pathname: '/search',
  search: '?q=hello+world',
  searchParams: URLSearchParams { 'q' => 'hello world' },
  hash: ''
}
*/

//format() -  Takes the object and convert to a string
console.log(url.format(urlObj));

//import.meta.url - gives ypu the file path
console.log(import.meta.url);

//fileURL - Converts file url to path
console.log(url.fileURLToPath(import.meta.url));
