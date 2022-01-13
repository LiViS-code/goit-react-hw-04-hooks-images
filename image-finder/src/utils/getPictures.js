const getPictures = async (request, page = 1, perPage = 12) => {
  const API_KEY = "24165340-8b0e7a7ee772979b6a936f118";

  const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${request}&page=${page}&per_page=${perPage}&key=${API_KEY}`;

  const response = await fetch(URL);

  if (response.ok) return response.json();
  return Promise.reject(
    new Error(`Search error. No results were found for ${request}.`)
  );
};

export default getPictures;
