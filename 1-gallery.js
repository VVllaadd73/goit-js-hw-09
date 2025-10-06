import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as n}from"./assets/vendor-CgTBfC_f.js";const s=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],c=s.map(({preview:a,original:i,description:p})=>`<li class="gallery-item">
				<a class="gallery-link" href=${i}>
					<img class="gallery-image"
					src=${a}
					alt=${p} 
					width="360"
					height ="200"/>
				</a>
			</li>`).join(""),o=document.querySelector(".gallery");o.insertAdjacentHTML("beforeend",c);const t=new n(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,close:!0,animationSpeed:300,fadeSpeed:300,animationSlide:!0,scaleImageToRatio:!0,className:"custom-lightbox"}),e=document.createElement("style");e.textContent=`
  .gallery-image {
    transition: transform 0.3s ease;
  }
  .gallery-image:hover {
    transform: scale(1.05);
  }
`;document.head.appendChild(e);o.style.cssText=`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 24px;
	justify-content: center;
	list-style: none;
	padding: 24px;
	margin: 0 auto;
	max-width: calc(3 * 360px + 2 * 24px);
	overflow: hidden;
`;t.on("show.simplelightbox",()=>{document.body.classList.add("modal-open"),document.body.style.overflow="hidden"});t.on("close.simplelightbox",()=>{document.body.classList.remove("modal-open"),document.body.style.overflow=""});
//# sourceMappingURL=1-gallery.js.map
