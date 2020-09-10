

const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com"
];

//setting up for loop, i starts at beginning
// i is less than the length of addresses
//i will go up the list once each time
for(let i = 0; i < addresses.length; i++){
    //create var link, create anchor tag
    const link = document.createElement('a');
    //set link to href and addresses for i loop
    link.setAttribute('href', addresses[i]);
    //for the lnik content put the link its self
    link.textContent = addresses[i];
    //new var pagelink is selector the js link container
    const pageLink = document.querySelector('.js-link-container')
    //and append the pagelink and linnk togteht
    pageLink.appendChild(link)
}