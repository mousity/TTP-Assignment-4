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
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIb7dssf0Fl7Wyz7BLf-WT3EDxZ2WfP1R26pwdYrcDgA&s',
      title: 'Chase the Cheese!',
      quote: 'You can reach it someday!',
    },
    {
      image: 'https://images.wagwalkingweb.com/media/daily_wag/sense_guides/intro/1543129488.45/can-dogs-know-how-to-play-fetch_intro.jpg',
      title: 'Work for it!',
      quote: 'Are you willing to chase it, no matter how far it goes?',
    },
    
    {
      image: 'https://img.apmcdn.org/be77ee224f029a4cc5146a7714429e421f196bf5/normal/e8232d-20141118-blackbearfamily.jpg',
      title: 'Get your feet wet!',
      quote: 'Trying something new is always worth your time',
    },
  ];

  const button = document.getElementById('randomize');
  const images = document.getElementById('poster-image');
  const titles = document.getElementById('poster-title');
  const quotes = document.getElementById('poster-quote');
  let prevNum = 100;

  console.log(images);
  console.log(posters[0].image);

  function randomize(posters, images, titles, quotes) {
    console.log(images);
    let num = (Math.round(Math.random() * (posters.length - 1)));
    while(num == prevNum){
      num = (Math.round(Math.random() * (posters.length - 1)))
    }
    prevNum = num;
    console.log(num);
    images.setAttribute("src", posters[num].image);
    titles.textContent = posters[num].title;
    quotes.textContent= posters[num].quote;
  }

  button.addEventListener("click", function() {randomize(posters, images, titles, quotes)});

  