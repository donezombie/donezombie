const alias = document.getElementById('title').children[0];
const quotes = document.getElementById('top').children[1].children[0];
const authorQuotes = document.getElementById('top').children[1].children[1];
const skillWrapper = document.getElementById('left').children[1];
const projectWrapper = document.getElementById('right').children[1];
const summary = document.getElementById('bottom-summary').children[0];
const listContact = document.getElementById('list-contact');
// data var import from data.js


quotes.innerHTML = data.quotes;
authorQuotes.innerHTML = data.authorQuotes
alias.innerHTML = data.alias;
summary.innerHTML = data.summary;

const mySkill = data.mySkill;
const myProject = data.myProject;
const contact = data.contact;

const clickToVisit = (e) => {
  const url = e.getAttribute('url');
  window.open(url);
}

contact.forEach(el => {
  let HTML = `
    <img src="${el.icon}" style="width: 40px" url="${el.url}" onclick="clickToVisit(this)" />
  `;
  listContact.insertAdjacentHTML('beforeend', HTML);
})

mySkill.forEach(el => {
  let HTML = `
  <div class="item wow bounceInLeft">
    <img src=${el.src} alt="logo" />
    <div class="tip">
      ${el.name}
    </div>
  </div>`
  skillWrapper.insertAdjacentHTML('beforeend', HTML);
});

myProject.forEach(el => {
  let HTML = `
    <div url="${el.url}" class="project wow bounceInRight" onclick="clickToVisit(this)" >
      <div class="project-content">
        <img src="${el.src}" />
      </div>
      <div class="project-title">
        <div style=" flex: 100%; color: #c4b998"><p>${el.name}</p></div>
        <div><p>Click to visit page >>> </p></div>
        <div class="project-icon">
          <img style="object-fit: cover; width: 100%" src="static/icon_h4.png" />
        </div>
      </div>
    </div>
  `;
  projectWrapper.insertAdjacentHTML('beforeend', HTML);
});

document.getElementById('avatar').addEventListener('click', () => {
  window.open('https://fb.com/donezombiee');
})
