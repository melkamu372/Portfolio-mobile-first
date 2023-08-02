const projectDatas = [
  {
    id: 0,
    title: 'Tonic',
    titleDK: 'Tonic',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    dot: './assets/icons/Counter.svg',
    class: 'work-container',
    para1:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    para2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tech: ['html', 'css', 'javascript'],
    imageMob: './assets/card/Snapshoot-mobile-Portfolio-3.svg',
    imageDesk: './assets/card/Snapshoot-desktop-Portfolio-1.svg',
    live: 'https://melkamu372.github.io/Portfolio-mobile-first/',
    source: 'https://github.com/melkamu372/Portfolio-mobile-first',
  },
  {
    id: 1,
    title: 'Multi-Post Stories',
    titleDK: 'Multi-Post Stories',
    canopy: ['FACEBOOK', 'Full Stack Dev', '2015'],
    dot: './assets/icons/Counter.svg',
    class: 'work-container work-container-reverse',
    para1:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    para2:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends',
    tech: ['html', 'css', 'javascript'],
    imageMob: './assets/card/Snapshoot-mobile-Portfolio-4.svg',
    imageDesk: './assets/card/Snapshoot-desktop-Portfolio-2.svg',
    live: 'https://melkamu372.github.io/Portfolio-mobile-first/',
    source: 'https://github.com/melkamu372/Portfolio-mobile-first',
  },
  {
    id: 2,
    title: 'Tonic',
    titleDk: 'Tonic',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    dot: './assets/icons/Counter.svg',
    class: 'work-container',
    para1:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    para2:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR",
    tech: ['html', 'css', 'javascript'],
    imageMob: './assets/card/Snapshoot-mobile-Portfolio-1.svg',
    imageDesk: './assets/card/Snapshoot-desktop-Portfolio-3.svg',
    live: 'https://melkamu372.github.io/Portfolio-mobile-first/',
    source: 'https://github.com/melkamu372/Portfolio-mobile-first',
  },
  {
    id: 3,
    title: 'Multi-Post Stories',
    canopy: ['Uber Navigation', 'Back End Dev', '2015'],
    dot: './assets/icons/Counter.svg',
    class: 'work-container work-container-reverse',
    para1:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    para2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tech: ['html', 'css', 'javascript', 'ruby'],
    imageMob: './assets/card/Snapshoot-mobile-Portfolio-2.svg',
    imageDesk: './assets/card/Snapshoot-desktop-Portfolio-4.svg',
    live: 'https://melkamu372.github.io/Portfolio-mobile-first/',
    source: 'https://github.com/melkamu372/Portfolio-mobile-first',
  },
];

document.querySelector('.card').innerHTML = projectDatas
  .map(
    (data) => `
    <div class="card-separator"></div>
    <section class="${data.class}" id="portfolio">
        <div class="project-img card-card-section-1">
          <img class='image-mobile' src="${data.imageMob}" alt="work background">
          <img class='image-dektop' src="${data.imageDesk}" alt="work background">
        </div>

      <div class="project-card-container card-section-1">
          <div class="projectone-header">
            <h2>${data.title}</h2>
          </div>
          <div class="project-one-header-desktop">
            <h2>${data.title}</h2>
          </div>

      <div class='project-details-container'>
            <ul class="project-details">
              <li>
                <h4 class="project-headings">${data.canopy[0]}</h4>
              </li>
              <li><img src="${data.dot}" alt="counter"></li>
              <li>
                <p>${data.canopy[1]}</p>
              </li>
              <li><img src="${data.dot}" alt="counter"></li>
              <li>
                <p>${data.canopy[2]}</p>
              </li>
            </ul>

      <ul class="project-details-desktop">
              <li>
                <h4 class="project-headings">${data.canopy[0]}</h4>
              </li>
              <li><img src="${data.dot}" alt="counter"></li>
              <li>
                <p>${data.canopy[1]}</p>
              </li>
              <li><img src="${data.dot}" alt="counter"></li>
              <li>
                <p>${data.canopy[2]}</p>
              </li>
            </ul>
          </div>
          <div class="project-text">
            <p>${data.para1}</p>
          </div>

      <div class="project-text-desktop">
            <p>${data.para1}</p>
          </div> 


      <ul class="project-program-laguages">
            <li class="program-language">
              <p>${data.tech[0]}</p>
            </li>
            <li class="program-language">
              <p>${data.tech[1]}</p>
            </li>

            <li class="program-language-javascript">
              <p>${data.tech[2]}</p>
            </li>
          </ul> 

      <ul class="project-program-laguage-desktop">
            <li class="program-language">
              <p>${data.tech[0]}</p>
            </li>
            <li class="program-language">
              <p>${data.tech[1]}</p>
            </li>

            <li class="program-language-javascript">
              <p>${data.tech[0]}</p>
            </li>
          </ul>
      
          <button type="submit" class="call-to-action" id="${data.id}">See Project</button>

        </div>

      </section>
      <div class="card-separator"></div>

    `,
  )
  .join('');

const displayPopup = (data) => {
  const popupSection = document.querySelector('#popups');
  popupSection.innerHTML = `
     <div class="modal-container">
            <div class="modal-head">
              <h1>${data.title}</h1>
              <button class="close">&times; </button>
            </div>
  
            <ul class="modal-dec">
              <li>${data.canopy[0]}</li>
              <li>
                <img class="modal-dot" src="./assets/icons/Counter.svg" alt="dot">
              </li>
              <li>${data.canopy[1]}</li>
              <li>
                <img class="modal-dot" src="./assets/icons/Counter.svg" alt="dot">
              </li>
              <li>${data.canopy[2]}</li>
            </ul>
            <div class="modal-img">
              <img class="modal-img-MO" src="${data.imageMob}" alt="project images">
              <img class="modal-img-DK" src="${data.imageDesk}" alt="project images">
            </div>
            <div class="modal-footer">
  
              <div class="modal-text footer-1">${data.para}<p><br>${data.para}</p></div>
              <div class="footer-2">
                <ul class="modal-technology">
                  <li class="tech">
                    <p>${data.tech[0]}</p>
                  </li>
                  <li class="tech">
                    <p>${data.tech[1]}</p>
                  </li>
  
                  <li class="tech javascript">
                    <p>${data.tech[2]}</p>
                  </li>
                </ul>
  
                <div class="modal-button">
                  <a href="${data.live}" class="modal-link">
                    <p>See Live</p> &nbsp;&nbsp;
                    <img src="./assets/icons/live.svg"  alt="icons">
                  </a>
  
                  <a href="${data.source}" class="modal-link">
                    <p>See Source</p>&nbsp;&nbsp;
                    <img src="./assets/icons/source.svg" alt="icons">
                  </a>
                </div>
              </div>
            </div>
          </div>
  
    `;
  popupSection.style.display = 'block';
  popupSection.querySelectorAll('.close').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelector('.popups').style.display = 'none';
    });
  });
};

const projectButtons = document.querySelectorAll('.call-to-action');
projectButtons.forEach((projectButton) => {
  projectButton.addEventListener('click', (e) => {
    const index = parseInt(e.target.id, 10);

    displayPopup(projectDatas[index]);
  });
});