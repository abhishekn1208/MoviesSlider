let Obj = [
    "https://www.digitaltrends.com/wp-content/uploads/2021/11/ehugq10fuzk1mdoy69wf5pggef5.jpg",
    "https://cdn.abcotvs.com/dip/images/413470_112614-cc-disney-posters-frozen-img.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT67dqjJrcmbs3xEbXiQCsfZUthFZliHvFYQ&s"
    
    ];

    let currentImage = 0;
    const SlideShow = document.getElementById("slideMovies");
    
    SlideShow.src = Obj[currentImage];
   
    // console.log(SlideShow)

    function displayNext(){
        currentImage = (currentImage + 1) % Obj.length;
        SlideShow.src = Obj[currentImage];
    }
    
    setInterval(displayNext,2000)