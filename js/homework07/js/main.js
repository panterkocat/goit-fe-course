const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];


function createPostCard({
    imgg = '',
    tittle = '',
    texxt = '',
    linnk = '',
}) {

const root = document.querySelector('.root');
const divv = document.createElement('div');
divv.classList.add('post');

const img = document.createElement('img');
img.classList.add('post__image');
img.setAttribute('src', imgg);
img.setAttribute('alt', 'post image');

const h2 = document.createElement('h2');
h2.classList.add('post__title');
h2.textContent = tittle;

const p = document.createElement('p');
p.classList.add('post__text');
p.textContent = texxt;

const linkBtn = document.createElement('a');
linkBtn.classList.add('button');
linkBtn.setAttribute('href', linnk);
linkBtn.textContent = 'Read more';

root.append(divv);
divv.append(img, h2, p, linkBtn);

return divv;

};

function createCards(arr) {
const arrElms = [];
arr.forEach(item => {
    const element = createPostCard({
        imgg: item.img,
        tittle: item.title,
        texxt: item.text,
        linnk: item.link,
    });
    arrElms.push(element);
});
    const rroot = document.querySelector('.root');
    rroot.append(...arrElms);
};

createCards(posts);


