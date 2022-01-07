const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-menu');
const scrollLinks = document.querySelectorAll('.nav-item');
const closeBtn = document.getElementById('close-btn');

navToggle.addEventListener('click', () => {
  navLinks.classList.add('show-links');
  closeBtn.classList.remove('hidden');
});

function removeActive() {
  scrollLinks.forEach((link) => {
    link.classList.remove('active');
  });
}

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    navLinks.classList.remove('show-links');
    removeActive();
    e.target.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('show-links');
  closeBtn.classList.add('hidden');
});

const options = {
  root: null,
  threshold: 0,
  rootMargin: '-150px',
};

const data = [{
  img: './images/Graclyn-Meadows.jpg',
  name: 'Graclyn-Meadows',
  known: 'Realtor and Junior Partner.',
  info: 'Graclyn is a passionate and insightful leader with a proven track record of enabling clients to buy their dream homes.',
},
{
  img: './images/Grisella-Weich.jpg',
  name: 'Grisella-Weich',
  known: 'Realtor',
  info: 'Grisella grew up helping with her family\'s real estate business. Over the years, she got to learn the details of buying, selling, investing, and property management.',
},
{
  img: './images/James-Thompson.jpg',
  name: 'James Thompson',
  known: 'Chief Realtor and Partner',
  info: 'James earned his real estate license as a sophomore in college and joined Keller Williams Realty with Team Rich Richardson as a summer intern while pursuing a degree in Management.  ',
},
{
  img: './images/Jars-landoh.jpg',
  name: 'Jars-Landoh',
  known: 'President',
  info: 'Jars attended Georgia Tech where he was a President\'s Scholar and graduated Highest Honors with a degree in Chemical Engineering. He joined the KW Peachtree Road office in Brookhaven in May of 2008 after five years in the real estate industry. Thanks to his sales growth, he started The Jars-Landoh Group at the beginning of 2013.',
},
{
  img: './images/Jessica-Darsey.jpg',
  name: 'Jessica Darsey',
  known: 'Realtor',
  info: 'Jessica is an Atlanta native and Edgewood resident. Her local knowledge and love for this city drives her passion for connecting people with homes and properties all throughout the Atlanta area. She joined The Jars-Landoh Group after working with the team on her own home buying and selling journey.',
},
{
  img: './images/Josh-Burke.jpg',
  name: 'Josh-Burke',
  known: 'Realtor',
  info: 'Born and raised in Georgia, Josh is a true southerner at heart. When it comes to a city with both southern charm and adventure, Atlanta is on the mind! He calls Atlanta home because there is never a dull moment.',
},
{
  img: './images/Kevin-Pyke.JPG',
  name: 'Kevin Pyke',
  known: 'Realtor',
  info: 'Kevin comes to Atlanta from the Mountains of Northeast Georgia. Throughout his early life, Kevin worked in the country club service industry. What he loved most about that work was building and sustaining firm client relationships.',
},
{
  img: './images/Melony-Atkison.JPG',
  name: 'Melony Atkison',
  known: 'Listing Specialist and Partner',
  info: 'As the Lead Listing Specialist and Partner of The Jars-Landoh Group, Melony dedicates herself to providing an unmatched client experience. Named one of REALTOR Magazine’s “30 Under 30” and a “Top Luxury Listing Agent” by The Atlantan, Melony has garnered a reputation for being the best in the business.',
},
{
  img: './images/Menson-King.jpg',
  name: 'Menson-King',
  known: 'Realtor',
  info: 'As a lifetime resident of metro Atlanta, Menson King has grown just as dynamically as our beloved city. The son of a developer and a real estate agent, Menson learned about real estate at a young age, and he largely credits that background to becoming one of Atlanta’s up-and-coming agents today.',
},
{
  img: './images/Ricka-Stevens.jpg',
  name: 'Ricka Stevens',
  known: 'Realtor',
  info: 'Ricka grew up with a dad in the Air Force and lived in Arizona, Texas, and Japan before her family settled in the Atlanta area in 2000. She graduated from Georgia Southern University with a bachelor’s degree in Business Administration.',
},
{
  img: './images/Stephanie-Phillips.jpeg',
  name: 'Stephanie Phillips',
  known: 'Realtor',
  info: 'Stephanie is an Atlanta Realtor with an unmatched passion for helping her clients. After earning her major in English and minor in Spanish, Courtney worked on the administrative side of real estate before becoming licensed herself.',
},
{
  img: './images/Mickia-Crowley.JPG',
  name: 'Mickia Crowley',
  known: 'Realtor',
  info: 'Mickia fell in love with Atlanta, it\'s vibrant multicultural communities, beautiful green spaces, and entrepreneurial spirit. She knew this would be her forever home.',
},
{
  img: './images/Georgia-Tawley.jpg',
  name: 'Georgia-Tawley',
  known: 'Realtor',
  info: 'A born and raised Atlanta native, Georgia got her start in real estate in 2016. Having worked as an assistant, a listing coordinator, and a buyer\'s agent, she knows all the ins and outs of the real estate world.',
},
];