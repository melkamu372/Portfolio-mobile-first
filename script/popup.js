import projectDatas from './data-object.js';document.querySelector('.card').innerHTML = projectDatas
  .map(
    (data) => `
    <section class="${data.class}" id="portfolio">
        <div class="project-img card-card-section-1">
          <img class='image-mobile' src="${data.imageMob}" alt="work background">
          <img class='image-dektop' src="${data.imageDesk}" alt="work background">
        </div>      <div class="project-card-container card-section-1">
          <div class="projectone-header">
            <h2>${data.title}</h2>
          </div>
          <div class="project-one-header-desktop">
            <h2>${data.title}</h2>
          </div>      <div class='project-details-container'>
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
            </ul>      <ul class="project-details-desktop">
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
          </div>      <div class="project-text-desktop">
            <p>${data.para1}</p>
          </div>      <ul class="project-program-laguages">
            <li class="program-language">
              <p>${data.tech[0]}</p>
            </li>
            <li class="program-language">
              <p>${data.tech[1]}</p>
            </li>            <li class="program-language-javascript">
              <p>${data.tech[2]}</p>
            </li>
          </ul>      <ul class="project-program-laguage-desktop">
            <li class="program-language">
              <p>${data.tech[0]}</p>
            </li>
            <li class="program-language">
              <p>${data.tech[1]}</p>
            </li>            <li class="program-language-javascript">
              <p>${data.tech[0]}</p>
            </li>
          </ul>          <button type="submit" class="call-to-action" id="${data.id}">See Project</button>        </div>      </section>
      <div class="card-separator"></div>    `,
  )
  .join('');