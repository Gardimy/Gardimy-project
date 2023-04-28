const contactInfos = [
  {
    presenterpicture: './images/Gardimy.PNG',
    name: 'Gardimy Charles, ',
    title: 'Electronic engineer, Full stack web devloper',
    presenterinfo: 'Gardimy Charles (born 5 August 1995) is a Haitien electronic engineer and Actually ,learning Full stack web development at Microverse. He was Working at INUKA University as a computer lab engineer.',
  },
  {
    presenterpicture: './images/Jennifer.PNG',
    name: 'Jennifer Jolly',
    title: 'Consumer Technology Journalis',
    presenterinfo: 'Jennifer Jolly (born February 22, 1971) is an American consumer technology journalist and TV broadcaster. She is a Wired Well columnist for The New York Times, tech-life columnist and host of Tech Now for USA Today, and a digital lifestyle contributor for The Today Show.',
  },
  {
    presenterpicture: './images/Tina.PNG',
    name: 'Christina Desir',
    title: 'Electronic engineer,  UX designer',
    presenterinfo: 'Christina Desir : born in Haïti, (June 1996) graduate in engineering electronic , worked as a computer lab instructor , currently works as saleswoman in a small electronic store. Director of operations in a hair products company (Chrissy kreyol).',
  },
  {
    presenterpicture: './images/Yu.PNG',
    name: 'Yijun Yu ',
    title: 'Professor of Software Engineering , Faculty of Science, Technology, Engineering & Mathematics',
    presenterinfo: 'Dr. Yijun Yu ,professor at the Open University in the UK, and his research focuses on developing intelligent systems that can learn from and adapt to the behavior of individuals and households. His work includes developing personalized smart home systems that can adjust to the needs and preferences of individual users.',
  },
  {
    presenterpicture: './images/Ricardo.PNG',
    name: 'Saint Louis Ricardo',
    title: 'Electronic engineer',
    presenterinfo: 'Saint Louis Louis Ricardo (born 13 October 1992) is a Haitian student and computer lab administrator. Between 2021 and 2023. He works as a engineer(Play TV).',
  },
  {
    presenterpicture: './images/Lee.PNG',
    name: 'Jieun Lee',
    title: 'Assistant professor at the University of Kansas',
    presenterinfo: 'She is an assistant professor at the University of Kansas, and her research focuses on developing smart home technologies that can support mental health and well-being. Her work includes developing systems that can detect and respond to stress and other mental health issues. ',
  },
];

const presenter6 = document.getElementById('presenter-container');
contactInfos.forEach((conference) => {
  const allpresenter = document.createElement('article');
  allpresenter.innerHTML = (`
    <div class="presenter10">
        <img class = "presenter-img" src="${conference.presenterpicture}" alt="Presente-img">
        <div class="presenter-title">
            <h3> ${conference.name}</h2>
            <p><i>${conference.title}</i></p>
            <div class="second-line"></div>
            <p class="description">${conference.presenterinfo}</p>
        </div>
  </div>
    `);
  presenter6.appendChild(allpresenter);
});
