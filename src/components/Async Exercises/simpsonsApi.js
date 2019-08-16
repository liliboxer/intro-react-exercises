export const getQuotes = (count = 5) => {
  return fetch(`http://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch, do better';
      return res.json();
    });
}
;
