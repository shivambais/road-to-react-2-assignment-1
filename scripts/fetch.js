let searchFun= async (url)=>{
    
    // let query= document.querySelector("#query").value;

    // let url= `https://api.unsplash.com/search/photos/?query=${query}&per_page=20&client_id=5z9p4Ky25UYCO4DrHAT8jEYWS_NrUcaL_mRmuwOvx_8`

    let res= await fetch(url);

    let data= await res.json();

    // appendFun(data.results);

    // console.log(data.results)
    return data.results;
}


let appendFun= (data,container) => {
    container.innerHTML= null;
    data.forEach(({urls:{small}, alt_description})=>{
        let box= document.createElement("div");
        box.setAttribute("class","smallBox");

        let image= document.createElement("img");
        image.src= small;
        image.setAttribute("class","imageClass");

        let title= document.createElement("p");
        title.innerText= alt_description

        box.append(image,title);
        container.append(box)
    })
}

export {searchFun,appendFun}