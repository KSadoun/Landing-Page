function getX(str){
    str = str.toString();
    str = str.replace(/[()]/g,'');
    str = str.split(",");
    return str[0]; 
}


function getY(str){
    str = str.toString();
    str = str.replace(/[()]/g,'');
    str = str.split(",");
    return str[1]; 
}

Chart.defaults.global.tooltips.enabled = false; //disable default tooltip
var ctx = document.getElementById('canvas1').getContext('2d');
var scatterChart = new Chart(ctx, {
type: 'scatter',

data: {
    datasets: [{
        label: 'Active',
        radius: 7,
        hoverRadius: 8,
        backgroundColor: 'green',
        data: [{
            x: 60,
            y: 2.3,
        }, {
            x: 0.7,
            y: 2.0
        }, {
            x: 1.0,
            y: 0.5
        }]
    },
        
    {
        label: 'Sold',
        radius: 7,
        hoverRadius: 8,
        backgroundColor: 'red',
        data: [{
            x: 3.000000,
            y: 2.500000
        }, {
            x: .900000,
            y: .100000
        }, {
            x: 15,
            y: 5
        }]
    },

    {
        label: 'Pending',
        radius: 7,
        hoverRadius: 8,
        backgroundColor: 'orange',
        data: [{
            x: 25,
            y: 5.500000
        }, {
            x: 35,
            y: 1.5
        }, {
            x: 50,
            y: 4
        }]
    },
    
    {
        label: 'Other',
        radius: 7,
        hoverRadius: 8,
        backgroundColor: 'gray',
        data: [{
            x: 32,
            y: 4.300
        }, {
            x: 15,
            y: 1.5
        }, {
            x: 60,
            y: 4
        }]
    },
        
    ]
},
options: {


    scales: {
            yAxes: [{
                display: true,
                ticks: {
                    beginAtZero:true,
                    callback: function(value, index, values) {
                        return "$" + value + 'M';
                    }
                },
                scaleLabel:
                    function(label){return  ' $' + label.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");},
                gridLines: {
                    display: true
                },
            }],
            xAxes: [{
                display: true,
                gridLines: {
                    display: false
                }
            }]
        },


        tooltips: {
            callbacks: {

                labelTextColor: function(tooltipItem, chart) {
                    return 'white';
                }
            },

            custom: function(tooltipModel) {
            // Tooltip Element
            var tooltipEl = document.getElementById('chartjs-tooltip');
            
            // Create element on first render
            if (!tooltipEl) {
                tooltipEl = document.createElement('div');
                tooltipEl.id = 'chartjs-tooltip';
                tooltipEl.innerHTML = `
                
                    <div class='d-flex'>
                        <img src="ll1.jpg" height="50px" width="70px"  />
                        <div class="ml-2">
                            <p class="mb-1">`+ getX(tooltipModel.body[0].lines)  +` Days</p>
                            <p class="mb-1">$`+getY(tooltipModel.body[0].lines)+`M</p>
                        </div>
                    </div>
                
                `;
                document.body.appendChild(tooltipEl);
            }

            tooltipEl.innerHTML = `
                
                <div class='d-flex'>
                    <img src="ll1.jpg" height="50px" width="70px"  />
                    <div class="ml-2">
                        <p class="mb-1">`+ getX(tooltipModel.body[0].lines)  +` Days</p>
                        <p class="mb-1">$`+getY(tooltipModel.body[0].lines)+`M</p>
                    </div>
                </div>
            
            `;

            // Hide if no tooltip
            if (tooltipModel.opacity === 0) {
                tooltipEl.style.opacity = 0;
                return;
            }

            // Set caret Position
            tooltipEl.classList.remove('above', 'below', 'no-transform');
            if (tooltipModel.yAlign) {
                tooltipEl.classList.add(tooltipModel.yAlign);
            } else {
                tooltipEl.classList.add('no-transform');
            }

            function getBody(bodyItem) {
                return bodyItem.lines;
            }

            // `this` will be the overall tooltip
            var position = this._chart.canvas.getBoundingClientRect();

            // Display, position, and set styles for font
            tooltipEl.style.opacity = 1;
            tooltipEl.style.position = 'absolute';
            tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
            tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
            tooltipEl.style.transform = "translate(-45%, -130%)";
            tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
            tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
            tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
            tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
            tooltipEl.style.pointerEvents = 'none';
            tooltipEl.style.backgroundColor = "rgb(0, 128, 255)";
        },


            
        }



}
});


var ctx2 = document.getElementById('canvas2').getContext('2d');
var scatterChart2 = new Chart(ctx2, {
type: 'scatter',

data: {
    datasets: [{
        label: 'Active',
        radius: 7,
        hoverRadius: 8,
        backgroundColor: 'green',
        data: [{
            x: 6000,
            y: 2.3,
        }, {
            x: 0700,
            y: 2.0
        }, {
            x: 100,
            y: 0.5
        }]
    },
        
    {
        label: 'Sold',
        radius: 7,
        hoverRadius: 8,
        backgroundColor: 'red',
        data: [{
            x: 3000.0000,
            y: 2.500000
        }, {
            x: 900.000,
            y: .100000
        }, {
            x: 4500,
            y: 5
        }]
    },

    {
        label: 'Pending',
        radius: 7,
        hoverRadius: 8,
        backgroundColor: 'orange',
        data: [{
            x: 2500,
            y: 5.500000
        }, {
            x: 3500,
            y: 1.5
        }, {
            x: 5000,
            y: 4
        }]
    },
    
    {
        label: 'Other',
        radius: 7,
        hoverRadius: 8,
        backgroundColor: 'gray',
        data: [{
            x: 3200,
            y: 4.300
        }, {
            x: 1500,
            y: 1.5
        }, {
            x: 6000,
            y: 4
        }]
    },
        
    ]
},
options: {


    scales: {
            yAxes: [{
                display: true,
                ticks: {
                    beginAtZero:true,
                    callback: function(value, index, values) {
                        return "$" + value + 'M';
                    }
                },
                scaleLabel:
                    function(label){return  ' $' + label.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");},
                gridLines: {
                    display: true
                },
            }],
            xAxes: [{
                display: true,
                gridLines: {
                    display: false
                }
            }]
        },


        tooltips: {
            callbacks: {

                labelTextColor: function(tooltipItem, chart) {
                    return 'white';
                }
            },

            custom: function(tooltipModel2) {
            // Tooltip Element
            var tooltipEl2 = document.getElementById('chartjs-tooltip2');
            
            // Create element on first render
            if (!tooltipEl2) {
                tooltipEl2 = document.createElement('div');
                tooltipEl2.id = 'chartjs-tooltip2';
                tooltipEl2.innerHTML = `
                
                    <div class='d-flex'>
                        <img src="ll1.jpg" height="50px" width="70px"  />
                        <div class="ml-2">
                            <p class="mb-1">`+ getX(tooltipModel2.body[0].lines)  +` SQ FT</p>
                            <p class="mb-1">$`+getY(tooltipModel2.body[0].lines)+`M</p>
                        </div>
                    </div>
                
                `;
                document.body.appendChild(tooltipEl2);
            }

            tooltipEl2.innerHTML = `
                
                <div class='d-flex'>
                    <img src="ll1.jpg" height="50px" width="70px"  />
                    <div class="ml-2">
                        <p class="mb-1">`+ getX(tooltipModel2.body[0].lines)  +` SQ FT</p>
                        <p class="mb-1">$`+getY(tooltipModel2.body[0].lines)+`M</p>
                    </div>
                </div>
            
            `;

            // Hide if no tooltip
            if (tooltipModel2.opacity === 0) {
                tooltipEl2.style.opacity = 0;
                return;
            }

            // Set caret Position
            tooltipEl2.classList.remove('above', 'below', 'no-transform');
            if (tooltipModel2.yAlign) {
                tooltipEl2.classList.add(tooltipModel2.yAlign);
            } else {
                tooltipEl2.classList.add('no-transform');
            }

            function getBody(bodyItem) {
                return bodyItem.lines;
            }

            // `this` will be the overall tooltip
            var position2 = this._chart.canvas.getBoundingClientRect();

            // Display, position2, and set styles for font
            tooltipEl2.style.opacity = 1;
            tooltipEl2.style.position = 'absolute';
            tooltipEl2.style.left = position2.left + window.pageXOffset + tooltipModel2.caretX + 'px';
            tooltipEl2.style.top = position2.top + window.pageYOffset + tooltipModel2.caretY + 'px';
            tooltipEl2.style.transform = "translate(-45%, -130%)";
            tooltipEl2.style.fontFamily = tooltipModel2._bodyFontFamily;
            tooltipEl2.style.fontSize = tooltipModel2.bodyFontSize + 'px';
            tooltipEl2.style.fontStyle = tooltipModel2._bodyFontStyle;
            tooltipEl2.style.padding = tooltipModel2.yPadding + 'px ' + tooltipModel2.xPadding + 'px';
            tooltipEl2.style.pointerEvents = 'none';
            tooltipEl2.style.backgroundColor = "rgb(0, 128, 255)";
            tooltipEl2.style.color = "white";
        },


            
        }



}
});




// loader script
// window.onload = function(){
        
    $loader = $("#loader")

    $loader.css({"display": "block"});
    $loader.animate({"opacity": 1}, 200, function(){

        $("#loader-1").animate({"opacity": 1}, 750);
        //$("body").css({"overflow": "hidden"})
        setTimeout(changeLoader, 2000);
        
    });


    

    function changeLoader(){
        $(".load-2 *").stop()
        $("#loader-1").css({"display": "none"});
        $("#loader-1").animate({"opacity": 0}, 200, function(){
            $("#loader-2").css({"display": "block"});
            $("#loader-2").animate({"opacity": 1}, 750);
        });
    }


    function isInside (el) {

        // Special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
    
        var elemFromTop = el.offsetTop;
        var currentPosition = window.scrollY;

        var scrolledFromEl = currentPosition - elemFromTop;

        return (scrolledFromEl >= -350 && scrolledFromEl <= 0)
        
    }


    $(window).on('scroll', function () {
        
        //remove the loader
        if($("#loader-2").css('display') !== "none"){
            $("#loader").animate({"top": "-1000px"}, 400, function(){
                $("#loader").css({"display": "none"});
                //$("body").css({"overflow-y": "scroll"})
            });
        }

        //fix header
        if ($(window).scrollTop() >= $(window).height()) {
            $('.nave').addClass('fixed');
        } else {
            $('.nave').removeClass('fixed');
        }



        var allSections = document.querySelectorAll("section");
        allSections.forEach(function(section){
            if(isElementInViewport(section)){
                
                var text = section.dataset.text;
                $("#subject").html(text);

                var number = section.dataset.number;
                $("#number").html(number);

            } 
        });

    })



    var lastScrollTop = 0;

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener("mousewheel", function(){ // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop){
        // downscroll code

        var allSections = document.querySelectorAll("section");
        allSections.forEach(function(section){
            if(isElementInViewport2(section)){
                console.log(section.nextElementSibling)
                //the section in the current page
                //console.log(section.previousSibling)
                var id = section.nextElementSibling.getAttribute('id');
                scrollToElement("#"+id)

            } 
        });

    } else {
        // upscroll code

        var allSections = document.querySelectorAll("section");
        allSections.forEach(function(section){
            if(isElementInViewport2(section)){
                console.log(section.previousElementSibling)
                //the section in the current page
                
                var id = section.previousElementSibling.getAttribute('id');
                scrollToElement("#"+id)

            } 
        });


    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false)


    function isElementInViewport2 (el) {

        // Special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
    
        var elemFromTop = el.offsetTop;
        var currentPosition = window.scrollY;

        var scrolledFromEl = elemFromTop - currentPosition ;

        return (scrolledFromEl >= 0 && scrolledFromEl <= 100)
        
    }


    function isElementInViewport (el) {

        // Special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
    
        var elemFromTop = el.offsetTop;
        var currentPosition = window.scrollY;

        var scrolledFromEl = currentPosition - elemFromTop;

        return (scrolledFromEl >= -15 && scrolledFromEl <= el.offsetHeight)
        
    }

    $(document).on("click", "#arrow-up", function(){
        var allSections = document.querySelectorAll("section");
        allSections.forEach(function(section){
            if(isElementInViewport(section)){
                console.log(section.previousElementSibling)
                //the section in the current page
                //console.log(section.previousSibling)
                section.previousElementSibling.scrollIntoView({ 
                    behavior: 'smooth' 
                });

            } 
        });
    });

    $(document).on("click", "#arrow-down", function(){
        var allSections = document.querySelectorAll("section");
        allSections.forEach(function(section){
            if(isElementInViewport(section)){
                //the section in the current page
                console.log(section.nextElementSibling)
                section.nextElementSibling.scrollIntoView({ 
                    behavior: 'smooth' 
                });

            } 
        });
    });





    // anchor link wala
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });




    // close and open sidebar
    $(document).on("click", "#side-button", function(){
       //alert("hi")
       openSideNav();
    })

    $(document).on("click", "#close", function(){
        //alert("hi")
         closeSideNav();
     })

     $(document).on("click", "#side-content p", function(){
        closeSideNav();
     })


     var allSections = document.querySelectorAll("section, .nave");

     function closeSideNav(){
        $("#side-content").css({"transform": "translateX(100%)"})
        allSections.forEach(function(div){
            div.style.opacity = 1
        })

     }

     function openSideNav(){
        $("#side-content").css({"transform": "translateX(0)"})
        allSections.forEach(function(div){
            div.style.opacity = 0.3
        })
     }

    // #side-content
    // side-button
    // close

    function scrollToElement(myElement, scrollDuration = 1000) {
        const elementExists = document.querySelector(myElement);
        if (elementExists && elementExists.getBoundingClientRect) {
            const rect = elementExists.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY - 200; // a bit of space from top
            var cosParameter = (window.scrollY - elementTop) / 2,
                scrollCount = 0,
                oldTimestamp = performance.now();
            function step(newTimestamp) {
                console.log(scrollCount);
                scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
                if (scrollCount >= Math.PI) {
                    window.scrollTo(0, elementTop);
                    return;
                }
                window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)) + elementTop);
                oldTimestamp = newTimestamp;
                window.requestAnimationFrame(step);
            }
            window.requestAnimationFrame(step);
        }
    }