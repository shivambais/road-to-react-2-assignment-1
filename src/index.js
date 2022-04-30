//access key:  5z9p4Ky25UYCO4DrHAT8jEYWS_NrUcaL_mRmuwOvx_8
//secret key: 0RH8n4QNpML7IQ1DcuUyiFhJ6biM9V4hb8D4E2j_78o

//url0 : "https://api.unsplash.com/search/photos/?query=${query}/client_id=YOUR_ACCESS_KEY"
//url= `https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=5z9p4Ky25UYCO4DrHAT8jEYWS_NrUcaL_mRmuwOvx_8`


import {navbar} from "../components/navbar.js"

import {searchFun,appendFun} from "../scripts/fetch.js"

import "../styles/index.css"

import "../styles/navbar.css"

document.querySelector("#navbar").innerHTML = navbar();

let query;




let main= async ()=>{
        query= document.querySelector("#query").value;

        let url= `https://api.unsplash.com/search/photos/?query=${query}&per_page=20&client_id=5z9p4Ky25UYCO4DrHAT8jEYWS_NrUcaL_mRmuwOvx_8`

       let res= await searchFun(url);
       let container= document.querySelector("#container");

       appendFun(res,container)

    //    console.log(res)
    
}



async function ctgSearchFun(){

    query= this.id;
    let url= `https://api.unsplash.com/search/photos/?query=${query}&per_page=20&client_id=5z9p4Ky25UYCO4DrHAT8jEYWS_NrUcaL_mRmuwOvx_8`

    let res= await searchFun(url);
    let container= document.querySelector("#container");

    appendFun(res,container)

}

let categories= document.querySelector("#categories").children;
console.log(categories);

for(let el of categories){
    // console.log(this);
    el.addEventListener("click",ctgSearchFun);
}



// let searchFun= async ()=>{
    
//     let query= document.querySelector("#query").value;
//     let id= "container";
//     let url= `https://api.unsplash.com/search/photos/?query=${query}&per_page=20&client_id=5z9p4Ky25UYCO4DrHAT8jEYWS_NrUcaL_mRmuwOvx_8`

//     let res= await fetch(url);

//     let data= await res.json();

//     // appendFun(data.results,id);

//     console.log(data.results)
// }

// let appendFun= (data,container) => {
//     data.forEach(({urls:{small}, alt_description})=>{
//         let box= document.createElement("div");

//         let image= document.createElement("img");
//         image.src= small;

//         let title= document.createElement("p");
//         title.innerText= alt_description

//         box.append(image,title);
//         container.append(box)
//     })
// }

let id;

let debounce= (fun,time)=>{
    if(id){
        clearTimeout(id)
    }
    id= setTimeout(fun,time)
}
debounce(main,500)
document.querySelector("#query").addEventListener("input",()=>{debounce(main,500)});
