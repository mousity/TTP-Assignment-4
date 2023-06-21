// Array of predefined poster objects
const posters = [
    {
      image: 'https://i0.wp.com/roomescapeartist.com/wp-content/uploads/2020/06/raven-puzzle.jpg?fit=800%2C401&ssl=1',
      title: 'Who Are You?',
      quote: 'Don\'t wait to find out!',
    },
    {
      image: 'https://lifewithdogsandcats.com/wp-content/uploads/Elsa-Clair-side-stairs-3.jpg',
      title: 'Too Fast! Too Fast!',
      quote: 'Always take it one step at a time for best results',
    },
    {
      image: 'https://s.yimg.com/os/creatr-uploaded-images/2022-06/7d5a0940-f190-11ec-bef5-515e7d153f2a',
      title: 'Reward Yourself!',
      quote: 'It\'s okay to take a break once in a while!',
    },
  ];

  const button = document.getElementById('submit');
  const images = document.getElementById('poster-image');
  const titles = document.getElementById('poster-title');
  const quotes = document.getElementById('poster-quote');

  console.log(images);
  console.log(posters[0].image);

  function randomize(posters, images, titles, quotes) {
    console.log(images);
    let num = (Math.random() * posters.length);
    console.log(posters);
    images.setAttribute("src", posters[num].image);
    titles.textContent = posters[num].title;
    quotes.textContent= posters[num].quote;
  }

  button.addEventListener("click", randomize(posters, images, titles, quotes));