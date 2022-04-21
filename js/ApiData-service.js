export async function fetchText(apiUrl) {
    let response = await fetch(apiUrl);
    if (response.status === 200) {
        // handle data
        let data = await response.text();
        let arrayData = JSON.parse(data);
        let cartona = ``;
        for (var i = 0; i < arrayData.length; i++) {
            cartona += `<div class="col-md-4">
            <div class="item mb-3 position-relative">
                <img src="` + arrayData[i].url + `" class="w-100 imagesClass "> 
                <div class="zoomIcon position-absolute d-flex align-items-center justify-content-center">
                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </div> 
                </div>  
                </div > `
        }
        document.getElementById("demo").innerHTML = cartona;
    }
    let layer = document.getElementById("layer");
    let bgImage = document.getElementById("bgImage");
    let index = 0;
    let item = Array.from(document.getElementsByClassName("imagesClass"));
    // to open the carousel modal by clicking on an image 
    for (var i = 0; i < item.length; i++) {
        item[i].addEventListener("click", function(eventInfo) {
            layer.style.display = "flex";
            bgImage.style.backgroundImage = `
            url(${eventInfo.target.getAttribute("src") })
            `;
        })
    }

    // Right arrow function
    let rightArrowBtn = document.getElementById("rightArrowBtn");
    rightArrowBtn.addEventListener("click", rightArrowFunc);

    function rightArrowFunc() {
        if (index == item.length - 1) {
            index = 0;
        } else {
            index++;
        }
        bgImage.style.backgroundImage = `
            url(${item[index].getAttribute("src") })
            `;
    }

    // Left arrow function
    let leftArrowBtn = document.getElementById("leftArrowBtn");
    leftArrowBtn.addEventListener("click", leftArrowFunc);

    function leftArrowFunc() {
        if (index == 0) {
            index = item.length - 1;
        } else {
            index--;
        }
        bgImage.style.backgroundImage = `
            url(${item[index].getAttribute("src") })
            `;
    }

    // To close the image windows
    let closeBtn = document.getElementById("closeBtn");
    closeBtn.addEventListener("click", hidenLayerFun);

    function hidenLayerFun() {
        layer.style.display = "none";
    }
}
