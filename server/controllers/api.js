const axios = require("axios");
require('dotenv').config();

const apiUrl =
  "https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404" +
  "?format=json" +
  "&applicationId=" + process.env.APPLICATION_ID + 
  "&formatVersion=2" +
  "&booksGenreId=000" +
  "&page=1" +
  "&elements=title%2Cauthor%2CsalesDate%2CpublisherName%2CitemPrice%2CreviewAverage%2ClargeImageUrl";


const fetchBookData = async () => {
  let bookData;
  try {
    bookData = await axios.get(apiUrl).then((res) => res.data);
  } catch (err) {
    console.error(err);
  }
  return bookData;
};

const sendBook = async (req, res) => {
  const bookData = await fetchBookData();
  res.status(200).json(bookData.Items);
};

module.exports = sendBook;
