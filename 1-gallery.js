import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as e}from"./assets/vendor-CgTBfC_f.js";const p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],s=p.map(({preview:t,original:i,description:o})=>`<li class="gallery-item">
				<a class="gallery-link" href=${i}>
					<img class="gallery-image"
					src=${t}
					alt=${o} 
					width="360"
					height ="200"/>
				</a>
			</li>`).join(""),n=`<ul class="gallery">${s}</ul>`,c=document.querySelector(".container");c.insertAdjacentHTML("beforeend",n);new e(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const a=document.querySelector(".gallery");a.style.cssText=`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 24px;
	justify-content: center;
	list-style: none;
	padding: 24px;
	margin: 0 auto;
	max-width: calc(3 * 360px + 2 * 24px);
`;a.addEventListener("mouseover",t=>{t.target.classList.contains("gallery-image")&&(t.target.style.transform="scale(1.05)",t.target.style.transition="transform 0.3s ease",t.target.style.position="relative")});a.addEventListener("mouseout",t=>{t.target.classList.contains("gallery-image")&&(t.target.style.transform="scale(1)")});
//# sourceMappingURL=1-gallery.js.map
