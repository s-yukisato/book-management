const axios = require("axios");
require('dotenv').config();

const apiUrl =
  "https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404" +
  "?format=json" +
  "&applicationId=" + process.env.APPLICATION_ID + 
  "&formatVersion=2" +
  "&booksGenreId=001" +
  "&elements=title,author,salesDate,publisherName,itemPrice,reviewAverage,largeImageUrl,isbn";


const fetchBookData = async () => {
  let bookData;
  try {
    bookData = await axios
      .get(encodeURI(apiUrl))
      .then((res) => res.data);
  } catch (err) {
    console.error(err);
  }
  return bookData;
};

const searchResultsBookData = async (req, res) => {
  const params = req.body;
  const {title, author, isbn} = params.values;
  const page = params.currentPage;
  let url = apiUrl
  if (title) url+=`&title=${title}`
  if (author) url+=`&author=${author}`
  if (isbn) url+=`&isbn=${isbn}`
  url+=`&page=${page}`

  await axios.get(encodeURI(url))
    .then(response => res.json(response.data.Items))
    .catch(err => res.status(404).json(err.message))
}

const sendData = async (req, res) => {
  const bookData = await fetchBookData();
  res.status(200).json(bookData.Items);
};

module.exports = {
  searchResultsBookData,
  sendData
}
