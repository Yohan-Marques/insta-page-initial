let time = 2000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll(".secund img")
    max = images.length

    function nextImage(){

        images[currentImageIndex]
        .classList.remove("selected")

        currentImageIndex++ 

        if(currentImageIndex >= max)

            currentImageIndex = 0

        images[currentImageIndex]
        .classList.add("selected")
    }

    function start(){
        setInterval(() => {
            nextImage()
        }, time)
    }   
    window.addEventListener("load", start)


    const btn = document.querySelector("#send");

    btn.addEventListener("click", function(e){

        e.preventDefault();       

        const name = document.querySelector("#name");

        const passWord = document.querySelector("#password");

        const value = name.value

        const value1 = passWord.value

        console.log(value)
        console.log(value1)
    })