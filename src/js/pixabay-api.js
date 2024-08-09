export function getPictures(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '45354989-e1e4081af194e4d3149ed2a9d ',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}?${params}`;
  const images = fetch(url)
    .then(res => res.json())
    .then(data => data.hits)
    .catch(error => console.log(error));

  return images;
}
