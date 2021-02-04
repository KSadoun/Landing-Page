<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- bootstrap -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js" integrity="sha384-LtrjvnR4Twt/qOuYxE721u19sVFLVSA4hf/rRt6PrZTmiPltdZcI7q7PXQBYTKyf" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">


    <!-- chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

    

    <title>Landing Page</title>


</head>
<body>

        <!-- Side menu and all -->

        <div class="side-buttons">
            <button class="btn btn-transparent" id="arrow-up"><i class="fa fa-arrow-up fa-2x text-primary my-1"></i></button>
            <button class="bg-primary rounded-circle p-3 btn btn-primary" id="side-button">
                <i class="fa fa-bars"></i>
            </button>
            <button class="btn btn-transparent" id="arrow-down"><i class="fa fa-arrow-down fa-2x text-primary my-1"></i></button>
        </div>

 
            <div id="side-content" style="list-style-type: none;">
                <div class="d-flex justify-content-between">
                    <span></span>
                    <button class="btn btn-transparent text-white ml-auto" id="close"><i class="fa fa-times fa-2x"></i></button>
                </div>
                <a href="#cover"><p class="p-3 mb-0 text-white">1. Cover Photo</p></a>
                <a href="#subject"><p class="p-3 mb-0 text-white">2. Subject Property</p></a>
                <a href="#property"><p class="p-3 mb-0 text-white">3. Property Information</p></a>
                <a href="#listing"><p class="p-3 mb-0 text-white">4. Listing Location</p></a>
                <a href="#side"><p class="p-3 mb-0 text-white">5. Side By Side Comparison</p></a>
                <a href="#status"><p class="p-3 mb-0 text-white">6. Status Comparison</p></a>
                <a href="#listingA"><p class="p-3 mb-0 text-white">7. Listing Average</p></a>
                <a href="#priceD"><p class="p-3 mb-0 text-white">8. Price & Days on Market</p></a>
                <a href="#priceS"><p class="p-3 mb-0 text-white">9. Price & Size</p></a>
                <a href="#pricing"><p class="p-3 mb-0 text-white">10. Pricing Analysis</p></a>
                <a href="#testimonials"><p class="p-3 mb-0 text-white">11. Testimonials</p></a>
                <a href="#about"><p class="p-3 mb-0 text-white">12. About Me</p></a>
                <a href="#thank"><p class="p-3 mb-0 text-white">13. Thank You</p></a>
            </div>


    <!-- Side menu and all -->
    

    <!-- loader -->

    <div id="loader" class="container-fluid p-5 text-center">

        <div style="position: relative; top: 35%; transform: translateY(-35%);">
            <div>
                <img src="logo.png" height="100px" width="150px" alt="">
                <h3><strong>Our Brokerage is your Brokerage</strong></h3>
            </div>

            <br><br><br>

            <div id="loader-content text-center">
                
                <div id="loader-1" >
                    <h3>Preparing Your Presentation</h3><br>
                    <div class="load-wrapp">
                        <div class="load-2">
                        
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>

                        </div>
                    </div>
                </div>

                <div id="loader-2" style="display: none">

                    <span></span></span>
                    <p>Your Presentation Is Ready</p>
                    <!-- <h3>Your Presentation Is Ready</h3><br> -->

                    <div class="hero">
                        <span class="mouse">
                            <span class="mouse__wheel"></span>
                        </span>
                    </div>

                </div>
                
            </div>
                
        </div>
    </div>





    <!-- contact section -->
    <section data-number="3" data-text = "Subject Property" class="" id="cover" style="height: 100%; width: 100%;">
        <img src="contact.jpg" alt="" class="image-responsive position-absolute" height="100%" width="100%">
        
        <div class="contact-details container-fluid px-5 py-3 text-white">
            <div class="row justify-content-center align-items-center">
                
                <div class="col">
                    <h3><strong>Isaqquah Seller</strong></h3>
                    <h3><strong>24606 SE Old Black Nugget Rd,</strong></h3>
                    <h3><strong>Isaqquah, WA 98029</strong></h3>
                </div>

                <div class="col ml-5">
                    <div class="d-flex">
                        <img src="person.jpg" alt="" class="border" height="175px" width="175px">
                        <div class="ml-4">
                            
                            <h3 class="mb-3">Victor Williams</h3>
                            
                            <div class="d-flex my-2 align-items-center">
                                <i class="fa fa-phone"></i>
                                <h5 class="ml-3">02 232 841 12</h5>
                            </div>
                            <div class="d-flex my-2 align-items-center">
                                <i class="fa fa-envelope"></i>
                                <h5 class="ml-3">victorwilliams@demosite.com</h5>
                            </div>
                            <div class="d-flex my-2 align-items-center">
                                <i class="fa fa-globe"></i>
                                <h5 class="ml-3">www.demosite.com</h5>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    
    </section>
    <!-- contact section -->



    <!-- weird header -->
    <div class="container-fluid header shadow nave">
        <div class="row justify-content-between align-items-ceter px-5 py-3 no-gutters">
            <div class="col text-left justify-content-center align-items-center">
                <h5 id="subject">Subject Porperty</h5>
                <p class="pb-0"><span id="number"></span>/14</p>
            </div>
            <div class="col text-center justify-content-center align-items-center">
                <img src="logo.png" height="75px" width="75px">
            </div>
            <div class="col text-right justify-content-end d-flex align-items-center">
                <img src="person.jpg" height="75px" width="75px" class="border">
                <p class="ml-3 mb-0">Victor Williams</p>
            </div>
        </div>
    </div>
    <!-- weird header -->

    <!-- subject prpoerty -->
    <section data-number="3" data-text = "Subject Property" class="position-relative" id="subject" style="height: 100%; width: 100%;">

        <img src="garden.jpg" alt="" class=" position-absolute" height="100%" width="100%">


        
        <div class="container-fluid px-5 text-white position-absolute" style="bottom: 0">
            <div class="row justify-content-center align-items-end mx-0 px-0">
                
                <div class="col-7 bg-blue p-4" style="max-height:300px">
                    <h3>Agence Remarks</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam dolore nostrum vitae omnis necessitatibus illo quos aut rem, doloremque, odio sequi ipsam sint! Distinctio itaque accusantium voluptates repudiandae totam!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic laborum voluptatum modi sed ut rerum est magnam eligendi aut quos minima esse odit voluptatibus assumenda alias quia, explicabo vel nostrum?</p>
                </div>

                <div class="col-4 bg-blue p-4 offset-1">
                    <h3>24606 SE Old Black Nugget Rd, Isaqquah, WA 98029</h3>
                
                    <div class="row">
                        <div class="col-6 mt-5 text-center">
                            <i class="fa fa-bed fa-3x"></i>
                            <h4>Bed</h4>
                            <h4>5</h4>
                        </div>

                        <div class="col-6 mt-5 text-center">
                            <i class="fa fa-bath fa-3x"></i>
                            <h4>Bath</h4>
                            <h4>5</h4>
                        </div>
                        
                        <div class="col-6 mt-5 text-center">
                            <i class="fa fa-pencil fa-3x"></i>
                            <h4>Sq Ft</h4>
                            <h4>3,574</h4>
                        </div>
                        
                        <div class="col-6 mt-5 text-center">
                            <i class="fa fa-square-o fa-3x"></i>
                            <h4>Lot Size</h4>
                            <h4>0.58 Acres</h4>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    
    </section>
    <!-- subject prpoerty -->

    


    <!-- Property Information -->
    <section data-number="4" data-text = "Property Information" class="position-relative" id="property">

        

        <div class="container-fluid p-5">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-5 col-12 text-center">
                    <img src="pi1.jpg" alt="" height="300px" width="450px" class="shadow">
                    <img src="pi2.jpg" alt="" height="300px" width="450px" class="shadow mt-n5 ml-n4">
                </div>

                <div class="col-lg-7 col-12 justify-content-center">
                    <div class="border px-3 py-1">
                        <p class="mb-0"><strong>Property Type</strong></p>
                        <p class="mb-0">Single Family</p>
                    </div>
                    <div class="border px-3 py-1">
                        <p class="mb-0"><strong>Year Built</strong></p>
                        <p class="mb-0">1992</p>
                    </div>
                    <div class="border px-3 py-1">
                        <p class="mb-0"><strong>Country</strong></p>
                        <p class="mb-0">King Country</p>
                    </div>
                    <div class="border px-3 py-1">
                        <p class="mb-0"><strong>Community</strong></p>
                        <p class="mb-0">Isaqquah</p>
                    </div>
                    <div class="border px-3 py-1">
                        <p class="mb-0"><strong>Senior Community</strong></p>
                        <p class="mb-0">No</p>
                    </div>
                    <div class="border px-3 py-1">
                        <p class="mb-0"><strong>Subdivision</strong></p>
                        <p class="mb-0">Cantergrove</p>
                    </div>
                    <div class="border px-3 py-1">
                        <p class="mb-0"><strong>MLS Area</strong></p>
                        <p class="mb-0">540</p>
                    </div>
                    <div class="border px-3 py-1">
                        <p class="mb-0"><strong>School District</strong></p>
                        <p class="mb-0">Iss</p>
                    </div>
                    <div class="border px-3 py-1">
                        <p class="mb-0"><strong>Elementary School</strong></p>
                        <p class="mb-0">Grand Ridge Elem</p>
                    </div>
                    <div class="border px-3 py-1">
                        <p class="mb-0"><strong>Middle School</strong></p>
                        <p class="mb-0">Ppacific Cascade Mid</p>
                    </div>
                    <div class="border px-3 py-1">
                        <p class="mb-0"><strong>High School</strong></p>
                        <p class="mb-0">Issaquah High</p>
                    </div>
                    <div class="border px-3 py-1">
                        <p class="mb-0"><strong>Tax Amount</strong></p>
                        <p class="mb-0">$33,427</p>
                    </div>
                </div>
            </div>
        </div>
    
    </section>
    <!-- Property Information -->

    


    <!-- Using Location -->
    <section data-number="5" data-text = "Listing Location" class="position-relative pt-5" id="listing">

        


        <div class="container-fluid my-2 align-items-center">
            
            <div class="row ">     
                

                <div class="col-12 col-lg-6 ">
                    <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=des%20moines+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                </div>

                <div class="col col-12 col-lg-6">
                    <div class="row ">
                        
                        
                        <div class="col-6 border  px-0">
                            <div class="position-relative">
                                <img src="ll1.jpg" height="200" width="100%" class="position-relative">
                                <div class=" w-100 px-3 py-2 d-flex justify-content-between" style="bottom: 0; position: absolute; background-color: rgba(0, 0, 0, 0.5);">
                                    <p class="mb-0 text-white"><strong>$995,000</strong></p>
                                    <p class="mb-0 text-white"><strong>#2</strong></p>
                                </div>
                                <div class="position-absolute" style="top: 20px; right: 25px;">
                                    <i class="fa fa-star fa-2x text-white"></i>
                                </div>
                            </div>
                            
                            <div class="px-3">
                                <p class="my-2">229 229 229 229</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum error, consequuntur re</p>
                            </div>
                        </div>

                        <div class="col-6 border  px-0">
                            <div class="position-relative">
                                <img src="ll2.jpg" height="200" width="100%" class="position-relative">
                                <div class=" w-100 px-3 py-2 d-flex justify-content-between" style="bottom: 0; position: absolute; background-color: rgba(0, 0, 0, 0.5);">
                                    <p class="mb-0 text-white"><strong>$995,000</strong></p>
                                    <p class="mb-0 text-white"><strong>#2</strong></p>
                                </div>
                                <div class="position-absolute" style="top: 20px; right: 25px;">
                                    <i class="fa fa-check-circle fa-2x text-white"></i>
                                </div>
                            </div>
                            
                            <div class="px-3">
                                <p class="my-2">229 229 229 229</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum error, consequuntur re</p>
                            </div>
                        </div>

                        <div class="col-6 border  px-0">
                            <div class="position-relative">
                                <img src="ll3.jpg" height="200" width="100%" class="position-relative">
                                <div class=" w-100 px-3 py-2 d-flex justify-content-between" style="bottom: 0; position: absolute; background-color: rgba(0, 0, 0, 0.5);">
                                    <p class="mb-0 text-white"><strong>$995,000</strong></p>
                                    <p class="mb-0 text-white"><strong>#2</strong></p>
                                </div>
                                <div class="position-absolute" style="top: 20px; right: 25px;">
                                    <i class="fa fa-check-circle fa-2x text-white"></i>
                                </div>
                            </div>
                            
                            <div class="px-3">
                                <p class="my-2">229 229 229 229</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum error, consequuntur re</p>
                            </div>
                        </div>

                        <div class="col-6 border  px-0">
                            <div class="position-relative">
                                <img src="ll4.jpg" height="200" width="100%" class="position-relative">
                                <div class=" w-100 px-3 py-2 d-flex justify-content-between" style="bottom: 0; position: absolute; background-color: rgba(0, 0, 0, 0.5);">
                                    <p class="mb-0 text-white"><strong>$995,000</strong></p>
                                    <p class="mb-0 text-white"><strong>#2</strong></p>
                                </div>
                                <div class="position-absolute" style="top: 20px; right: 25px;">
                                    <i class="fa fa-check-circle fa-2x text-white"></i>
                                </div>
                            </div>
                            
                            <div class="px-3">
                                <p class="my-2">229 229 229 229</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum error, consequuntur re</p>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
       
        </div>
        
    
    </section>
    <!-- Using Location -->

    


    <!-- Side By Side Comparison -->
    <section data-number="6" data-text = "Side By Side Comparison" class="position-relative" id="side">

        

        <div class="container-fluid p-5">
            <div class="row">
                
                <div class="col-12 col-md-3 border px-0">
                    <div class="position-relative">
                        <img src="ll1.jpg" height="200" width="100%" class="position-relative">
                        <div class=" w-100 px-3 py-2 d-flex justify-content-between" style="bottom: 0; position: absolute; background-color: rgba(0, 0, 0, 0.5);">
                            <p class="mb-0 text-white"><strong>$995,000</strong></p>
                            <p class="mb-0 text-white"><strong>#2</strong></p>
                        </div>
                        <div class="position-absolute" style="top: 20px; right: 25px;">
                            <i class="fa fa-star fa-2x text-white"></i>
                        </div>
                    </div>
                    
                    <div class="px-3">
                        <p class="my-2">229 229 229 229</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum error, consequuntur re</p>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>MLS #</strong></p>
                            <p class="mb-1">13485910</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>PROPERTY TYPE</strong></p>
                            <p class="mb-1">Single-Family</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>BEDROOMS</strong></p>
                            <p class="mb-1">5</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>BATHROOM DETAILS</strong></p>
                            <p class="mb-1">Full Bath 2, Three Quarter Bath 2, Half Bath 2</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>SOFT</strong></p>
                            <p class="mb-1">6,850</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>LOT SOFT</strong></p>
                            <p class="mb-1">205,203</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>LOT DIMENSION</strong></p>
                            <p class="mb-1">-</p>
                        </div>


                    </div>
                    
                    

                </div>

                <div class="col-12 col-md-3 border px-0">
                    <div class="position-relative">
                        <img src="ll2.jpg" height="200" width="100%" class="position-relative">
                        <div class=" w-100 px-3 py-2 d-flex justify-content-between" style="bottom: 0; position: absolute; background-color: rgba(0, 0, 0, 0.5);">
                            <p class="mb-0 text-white"><strong>$995,000</strong></p>
                            <p class="mb-0 text-white"><strong>#2</strong></p>
                        </div>
                        <div class="position-absolute" style="top: 20px; right: 25px;">
                            <i class="fa fa-star fa-2x text-white"></i>
                        </div>
                    </div>
                    
                    <div class="px-3">
                        <p class="my-2">229 229 229 229</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum error, consequuntur re</p>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>MLS #</strong></p>
                            <p class="mb-1">13485910</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>PROPERTY TYPE</strong></p>
                            <p class="mb-1">Single-Family</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>BEDROOMS</strong></p>
                            <p class="mb-1">5</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>BATHROOM DETAILS</strong></p>
                            <p class="mb-1">Full Bath 2, Three Quarter Bath 2, Half Bath 2</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>SOFT</strong></p>
                            <p class="mb-1">6,850</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>LOT SOFT</strong></p>
                            <p class="mb-1">205,203</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>LOT DIMENSION</strong></p>
                            <p class="mb-1">-</p>
                        </div>


                    </div>
                    
                    

                </div>


                <div class="col-12 col-md-3 border px-0">
                    <div class="position-relative">
                        <img src="ll3.jpg" height="200" width="100%" class="position-relative">
                        <div class=" w-100 px-3 py-2 d-flex justify-content-between" style="bottom: 0; position: absolute; background-color: rgba(0, 0, 0, 0.5);">
                            <p class="mb-0 text-white"><strong>$995,000</strong></p>
                            <p class="mb-0 text-white"><strong>#2</strong></p>
                        </div>
                        <div class="position-absolute" style="top: 20px; right: 25px;">
                            <i class="fa fa-star fa-2x text-white"></i>
                        </div>
                    </div>
                    
                    <div class="px-3">
                        <p class="my-2">229 229 229 229</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum error, consequuntur re</p>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>MLS #</strong></p>
                            <p class="mb-1">13485910</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>PROPERTY TYPE</strong></p>
                            <p class="mb-1">Single-Family</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>BEDROOMS</strong></p>
                            <p class="mb-1">5</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>BATHROOM DETAILS</strong></p>
                            <p class="mb-1">Full Bath 2, Three Quarter Bath 2, Half Bath 2</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>SOFT</strong></p>
                            <p class="mb-1">6,850</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>LOT SOFT</strong></p>
                            <p class="mb-1">205,203</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>LOT DIMENSION</strong></p>
                            <p class="mb-1">-</p>
                        </div>


                    </div>
                    
                    

                </div>


                <div class="col-12 col-md-3 border px-0">
                    <div class="position-relative">
                        <img src="ll4.jpg" height="200" width="100%" class="position-relative">
                        <div class=" w-100 px-3 py-2 d-flex justify-content-between" style="bottom: 0; position: absolute; background-color: rgba(0, 0, 0, 0.5);">
                            <p class="mb-0 text-white"><strong>$995,000</strong></p>
                            <p class="mb-0 text-white"><strong>#2</strong></p>
                        </div>
                        <div class="position-absolute" style="top: 20px; right: 25px;">
                            <i class="fa fa-star fa-2x text-white"></i>
                        </div>
                    </div>
                    
                    <div class="px-3">
                        <p class="my-2">229 229 229 229</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum error, consequuntur re</p>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>MLS #</strong></p>
                            <p class="mb-1">13485910</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>PROPERTY TYPE</strong></p>
                            <p class="mb-1">Single-Family</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>BEDROOMS</strong></p>
                            <p class="mb-1">5</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>BATHROOM DETAILS</strong></p>
                            <p class="mb-1">Full Bath 2, Three Quarter Bath 2, Half Bath 2</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>SOFT</strong></p>
                            <p class="mb-1">6,850</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>LOT SOFT</strong></p>
                            <p class="mb-1">205,203</p>
                        </div>

                        <div class='border-bottom'>
                            <p class="mb-1"><strong>LOT DIMENSION</strong></p>
                            <p class="mb-1">-</p>
                        </div>


                    </div>
                    
                    

                </div>

            </div>
        </div>
    
    </section>
    <!-- Side By Side Comparison -->

    



    <!-- Status Comparison -->
    <section data-number="7" data-text = "Status Comparison" class="position-relative py-5" id="status">

       

        <div id="accordion">
            <!-- first accordion -->
            <div class=" ">
              <div class="" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link bg-primary text-white w-100" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    
                    <div class="">
                        <div class="d-flex p-3 text-left">
                            <div class="col-3">ACTIVE</div>
                            <div class="col">BED</div>
                            <div class="col">BATH</div>
                            <div class="col">SQFT</div>
                            <div class="col">$/SQFT</div>
                            <div class="col">LOT SQFT</div>
                            <div class="col">$/LOT SQFT</div>
                            <div class="col">LIST PRICE</div>
                        </div>
                    </div>
                  
                  </button>
                </h5>
              </div>
          
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body py-0">
                    <div class="border">
                        <div class="d-flex text-left">
                            <div class="col-3 d-flex ml-0 mr-0 px-0 py-0 my-0">
                                <img src="pi1.jpg" height="100px" width="50%">
                                <p class="mb-0 ml-3">Lorem ipsum dolor sit amet consectetur a volupt</p>
                            </div>
                            <div class="col">5</div>
                            <div class="col">6</div>
                            <div class="col">$6,580</div>
                            <div class="col">$425</div>
                            <div class="col">404,237</div>
                            <div class="col">$14</div>
                            <div class="col">$2,742</div>
                        </div>
                    </div>
                </div>
              </div>

              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body py-0">
                    <div class="border">
                        <div class="d-flex text-left">
                            <div class="col-3 d-flex ml-0 mr-0 px-0 py-0 my-0">
                                <img src="pi1.jpg" height="100px" width="50%">
                                <p class="mb-0 ml-3">Lorem ipsum dolor sit amet consectetur a volupt</p>
                            </div>
                            <div class="col">5</div>
                            <div class="col">6</div>
                            <div class="col">$6,580</div>
                            <div class="col">$425</div>
                            <div class="col">404,237</div>
                            <div class="col">$14</div>
                            <div class="col">$2,742</div>
                        </div>
                    </div>
                </div>
              </div>


              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body py-0">
                    <div class="border">
                        <div class="d-flex text-left">
                            <div class="col-3 d-flex ml-0 mr-0 px-0 py-0 my-0">
                                <img src="pi1.jpg" height="100px" width="50%">
                                <p class="mb-0 ml-3">Lorem ipsum dolor sit amet consectetur a volupt</p>
                            </div>
                            <div class="col">5</div>
                            <div class="col">6</div>
                            <div class="col">$6,580</div>
                            <div class="col">$425</div>
                            <div class="col">404,237</div>
                            <div class="col">$14</div>
                            <div class="col">$2,742</div>
                        </div>
                    </div>
                </div>
              </div>

              <!-- second accordion -->

              <div class=" ">
                <div class="" id="headingTwo">
                  <h5 class="mb-0">
                    <button class="btn btn-link bg-primary text-white w-100" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                      
                      <div class="">
                          <div class="d-flex p-3 text-left">
                              <div class="col-3">PENDING</div>
                              <div class="col">BED</div>
                              <div class="col">BATH</div>
                              <div class="col">SQFT</div>
                              <div class="col">$/SQFT</div>
                              <div class="col">LOT SQFT</div>
                              <div class="col">$/LOT SQFT</div>
                              <div class="col">LIST PRICE</div>
                          </div>
                      </div>
                    
                    </button>
                  </h5>
                </div>
            
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body py-0">
                      <div class="border">
                          <div class="d-flex text-left">
                              <div class="col-3 d-flex ml-0 mr-0 px-0 py-0 my-0">
                                  <img src="pi1.jpg" height="100px" width="50%">
                                  <p class="mb-0 ml-3">Lorem ipsum dolor sit amet consectetur a volupt</p>
                              </div>
                              <div class="col">5</div>
                              <div class="col">6</div>
                              <div class="col">$6,580</div>
                              <div class="col">$425</div>
                              <div class="col">404,237</div>
                              <div class="col">$14</div>
                              <div class="col">$2,742</div>
                          </div>
                      </div>
                  </div>
                </div>
  
  
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body py-0">
                      <div class="border">
                          <div class="d-flex text-left">
                              <div class="col-3 d-flex ml-0 mr-0 px-0 py-0 my-0">
                                  <img src="pi1.jpg" height="100px" width="50%">
                                  <p class="mb-0 ml-3">Lorem ipsum dolor sit amet consectetur a volupt</p>
                              </div>
                              <div class="col">5</div>
                              <div class="col">6</div>
                              <div class="col">$6,580</div>
                              <div class="col">$425</div>
                              <div class="col">404,237</div>
                              <div class="col">$14</div>
                              <div class="col">$2,742</div>
                          </div>
                      </div>
                  </div>
                </div>
  
  
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body py-0">
                      <div class="border">
                          <div class="d-flex text-left">
                              <div class="col-3 d-flex ml-0 mr-0 px-0 py-0 my-0">
                                  <img src="pi1.jpg" height="100px" width="50%">
                                  <p class="mb-0 ml-3">Lorem ipsum dolor sit amet consectetur a volupt</p>
                              </div>
                              <div class="col">5</div>
                              <div class="col">6</div>
                              <div class="col">$6,580</div>
                              <div class="col">$425</div>
                              <div class="col">404,237</div>
                              <div class="col">$14</div>
                              <div class="col">$2,742</div>
                          </div>
                      </div>
                  </div>
                </div>

                <div class=" ">
                    <div class="" id="headingThree">
                      <h5 class="mb-0">
                        <button class="btn btn-link bg-primary text-white w-100" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                          
                            <!-- third accordion -->

                          <div class="">
                              <div class="d-flex p-3 text-left">
                                  <div class="col-3">SOLD</div>
                                  <div class="col">BED</div>
                                  <div class="col">BATH</div>
                                  <div class="col">SQFT</div>
                                  <div class="col">$/SQFT</div>
                                  <div class="col">LOT SQFT</div>
                                  <div class="col">$/LOT SQFT</div>
                                  <div class="col">LIST PRICE</div>
                              </div>
                          </div>
                        
                        </button>
                      </h5>
                    </div>
                
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                      <div class="card-body py-0">
                          <div class="border">
                              <div class="d-flex text-left">
                                  <div class="col-3 d-flex ml-0 mr-0 px-0 py-0 my-0">
                                      <img src="pi1.jpg" height="100px" width="50%">
                                      <p class="mb-0 ml-3">Lorem ipsum dolor sit amet consectetur a volupt</p>
                                  </div>
                                  <div class="col">5</div>
                                  <div class="col">6</div>
                                  <div class="col">$6,580</div>
                                  <div class="col">$425</div>
                                  <div class="col">404,237</div>
                                  <div class="col">$14</div>
                                  <div class="col">$2,742</div>
                              </div>
                          </div>
                      </div>
                    </div>
      
      
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                      <div class="card-body py-0">
                          <div class="border">
                              <div class="d-flex text-left">
                                  <div class="col-3 d-flex ml-0 mr-0 px-0 py-0 my-0">
                                      <img src="pi1.jpg" height="100px" width="50%">
                                      <p class="mb-0 ml-3">Lorem ipsum dolor sit amet consectetur a volupt</p>
                                  </div>
                                  <div class="col">5</div>
                                  <div class="col">6</div>
                                  <div class="col">$6,580</div>
                                  <div class="col">$425</div>
                                  <div class="col">404,237</div>
                                  <div class="col">$14</div>
                                  <div class="col">$2,742</div>
                              </div>
                          </div>
                      </div>
                    </div>
      
      
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                      <div class="card-body py-0">
                          <div class="border">
                              <div class="d-flex text-left">
                                  <div class="col-3 d-flex ml-0 mr-0 px-0 py-0 my-0">
                                      <img src="pi1.jpg" height="100px" width="50%">
                                      <p class="mb-0 ml-3">Lorem ipsum dolor sit amet consectetur a volupt</p>
                                  </div>
                                  <div class="col">5</div>
                                  <div class="col">6</div>
                                  <div class="col">$6,580</div>
                                  <div class="col">$425</div>
                                  <div class="col">404,237</div>
                                  <div class="col">$14</div>
                                  <div class="col">$2,742</div>
                              </div>
                          </div>
                      </div>
                    </div>


        <div class=" ">
              <div class="" id="headingFour">
                <h5 class="mb-0">
                  <button class="btn btn-link bg-primary text-white w-100" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                    
                <!-- fourth accordion -->
                    <div class="">
                        <div class="d-flex p-3 text-left">
                            <div class="col-3">OTHERS</div>
                            <div class="col">BED</div>
                            <div class="col">BATH</div>
                            <div class="col">SQFT</div>
                            <div class="col">$/SQFT</div>
                            <div class="col">LOT SQFT</div>
                            <div class="col">$/LOT SQFT</div>
                            <div class="col">LIST PRICE</div>
                        </div>
                    </div>
                  
                  </button>
                </h5>
              </div>
          
              <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                <div class="card-body py-0">
                    <div class="border">
                        <div class="d-flex text-left">
                            <div class="col-3 d-flex ml-0 mr-0 px-0 py-0 my-0">
                                <img src="pi1.jpg" height="100px" width="50%">
                                <p class="mb-0 ml-3">Lorem ipsum dolor sit amet consectetur a volupt</p>
                            </div>
                            <div class="col">5</div>
                            <div class="col">6</div>
                            <div class="col">$6,580</div>
                            <div class="col">$425</div>
                            <div class="col">404,237</div>
                            <div class="col">$14</div>
                            <div class="col">$2,742</div>
                        </div>
                    </div>
                </div>
              </div>


              <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                <div class="card-body py-0">
                    <div class="border">
                        <div class="d-flex text-left">
                            <div class="col-3 d-flex ml-0 mr-0 px-0 py-0 my-0">
                                <img src="pi1.jpg" height="100px" width="50%">
                                <p class="mb-0 ml-3">Lorem ipsum dolor sit amet consectetur a volupt</p>
                            </div>
                            <div class="col">5</div>
                            <div class="col">6</div>
                            <div class="col">$6,580</div>
                            <div class="col">$425</div>
                            <div class="col">404,237</div>
                            <div class="col">$14</div>
                            <div class="col">$2,742</div>
                        </div>
                    </div>
                </div>
              </div>


              <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                <div class="card-body py-0">
                    <div class="border">
                        <div class="d-flex text-left">
                            <div class="col-3 d-flex ml-0 mr-0 px-0 py-0 my-0">
                                <img src="pi1.jpg" height="100px" width="50%">
                                <p class="mb-0 ml-3">Lorem ipsum dolor sit amet consectetur a volupt</p>
                            </div>
                            <div class="col">5</div>
                            <div class="col">6</div>
                            <div class="col">$6,580</div>
                            <div class="col">$425</div>
                            <div class="col">404,237</div>
                            <div class="col">$14</div>
                            <div class="col">$2,742</div>
                        </div>
                    </div>
                </div>
              </div>



        </div>


    </section>
    <!-- Status Comparison -->


    


    <!-- Listing Average -->
    <section data-number="8" data-text = "Listing Average" class="position-relative" style="height: 100%; width: 100%" id="listingA">
        
         

        <div class="container position-relative" style="top: 40%; transform: translateY(-40%);">
            <div class="row">

                <div class="col-12 col-lg-6 mr-5">
                    <h3>Pricing</h3><br>
                    
                    <div class="row">
                        <div class="col-1">
                            <p class="mb-0">Low</p>
                        </div>
                        <div class="col-6">
                            <div class="p-2 rounded" style="background-color:rgba(0, 128, 255, 0.6)"></div>
                        </div>
                        <div class="col-2">
                            <p class="mb-0">$1,950,000</p>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <div class="col-1">
                            <p class="mb-0">Avg</p>
                        </div>
                        <div class="col-8">
                            <div class="p-2 rounded" style="background-color:rgba(0, 128, 255, 0.7)"></div>
                        </div>
                        <div class="col-2">
                            <p class="mb-0">$2,350,000</p>
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <div class="col-1">
                            <p class="mb-0">Med</p>
                        </div>
                        <div class="col-7">
                            <div class="p-2 rounded" style="background-color:rgba(0, 128, 255, 0.8)"></div>
                        </div>
                        <div class="col-2">
                            <p class="mb-0">$2,150,000</p>
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <div class="col-1">
                            <p class="mb-0">High</p>
                        </div>
                        <div class="col-9">
                            <div class="p-2 rounded" style="background-color:rgba(0, 128, 255, 0.9)"></div>
                        </div>
                        <div class="col-2">
                            <p class="mb-0">$3,150,000</p>
                        </div>
                    </div>

                </div>

                <div class="col-12 col-lg-4 p-4 pb-5 text-white  text-center" style="background-color: rgba(0, 128, 255, 0.9);">
                    <h3 class="text-center">Home Averages</h3>
                    <br><br>
                    <div class="d-flex justify-content-between">
                        <div class="col">
                            <p class="mb-0">SQFT</p>
                            <h4 class="mb-0">5,020</h4>
                        </div>
                        <div class="col">
                            <p class="mb-0">LOT SQFT</p>
                            <h4 class="mb-0">74527</h4>
                        </div>
                    </div>
<br>
                    <div class="d-flex justify-content-between">
                        <div class="col">
                            <p class="mb-0">DAYS ON MARKET</p>
                            <h4 class="mb-0">58</h4>
                        </div>
                        <div class="col align-items-center">
                            <p class="mb-0">$/SQFT</p>
                            <h4 class="mb-0">$501</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- Listing Average -->

    


    <!-- Price & Days on Market -->
    <section data-number="9" data-text = "Price & Days on Market" class="position-relative" id="priceD">
        
        

      <canvas id="canvas1" class="container position-relative py-5 mt-5" >
          
      </canvas>
      
      <!-- <div id="chartjs-tooltip"></div> -->
  </section>
    <!-- Price & Days on Market -->

    


    <!-- Price & Size -->
    <section data-number="10" data-text = "Price & Size" class="position-relative" id="priceS">
        
      

      <canvas id="canvas2" class="container position-relative py-5 mt-5" >
          
      </canvas>
      <!-- <div id="chartjs-tooltip"></div> -->
  </section>
    <!-- Price & Size -->

    



    <!-- Pricing Analysis -->

     <section data-number="11" data-text = "Pricing Analysis" class="position-relative" style="height: 100%; width: 100%;" id="pricing">

        <img src="pi2.jpg" alt="" class=" position-absolute" height="100%" width="100%">

       
        <!-- weird header -->


        
        <div class="container-fluid text-white position-relative" style="top: 40%; transform: translateY(-40%);">
            <div class="row justify-content-center ">
                
                <div class="col-6 position-relative p-4" style="background-color: rgba(0, 128, 255, 0.9); ">
                    <h4 class="text-center"><strong>Approximate Market Value</strong></h4>
                    <br>
                    <div>
                        <h5>Pricing Stats</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore consectetur exercitationem voluptate, voluptatum, id optio dolores </p>
                    </div>
                    <hr style="background-color: white;">

                    <div>
                        <h5>Price Based On Average Sales</h5>
                        <div class="d-flex justify-content-between">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <p><strong>$3,569,600</strong></p>
                        </div>
                    </div>
                    <hr style="background-color: white;">

                    <div>
                        <h5>Price Based On Average Sales</h5>
                        <div class="d-flex justify-content-between">
                            <p class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p class="mb-1"><strong>$3,569,600</strong></p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p class="mb-1"><strong>$3,569,600</strong></p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p class="mb-1"><strong>$3,569,600</strong></p>
                        </div>
                    </div>
                    

                </div>

            </div>
        </div>
    
    </section>

    <!-- Pricing Analysis -->


    


     <!-- Testimonials -->

     <section data-number="12" data-text = "Testimonials" class="position-relative " id="testimonials">
        
       
        <img src="ny.jpg" alt="" class=" position-absolute" height="100%" width="100%">



        
        <div class="container-fluid text-white position-relative py-5" >


            <h3 class="text-center my-5">Customer Success Stories</h3>
            <div id="carouselExampleControls" class="carousel slide mb-5" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    
                    <div class="container">
                        <div class="row">

                            <div class="col">

                                <div class="text-center">
                                    <img class=" rounded-circle border" src="p1.jpg"  alt="" height="125px" width="125px" style="margin-bottom: -50px;position: relative;z-index:2">
                                </div>
                            
                                <div class=" py-5 px-3 mx-3 " style="background-color: rgba(0, 128, 255, 0.8);">

                                    <h1 class="mb-0" style="font-size:60px">“</h1>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime aliquid consequuntur illum eveniet cupiditate deserunt sed sapiente iure quasi rerum pariatur corporis aliquam ad, sunt, quos facilis, dignissimos rem.</p>

                                </div>
                            
                            </div>


                            <div class="col"> 

                                <div class="text-center">
                                    <img class=" rounded-circle border" src="p2.jpg"  alt="" height="125px" width="125px" style="margin-bottom: -50px;position: relative;z-index:2">
                                </div>
                            
                                <div class=" py-5 px-3 mx-3 " style="background-color: rgba(0, 128, 255, 0.8);">

                                    <h1 class="mb-0" style="font-size:60px">“</h1>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime aliquid consequuntur illum eveniet cupiditate deserunt sed sapiente iure quasi rerum pariatur corporis aliquam ad, sunt, quos facilis, dignissimos rem.</p>

                                </div>
                            
                            </div>


                            <div class="col">

                                <div class="text-center">
                                    <img class=" rounded-circle border" src="p3.jpg"  alt="" height="125px" width="125px" style="margin-bottom: -50px;position: relative;z-index:2">
                                </div>
                            
                                <div class=" py-5 px-3 mx-3 " style="background-color: rgba(0, 128, 255, 0.8);">

                                    <h1 class="mb-0" style="font-size:60px">“</h1>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime aliquid consequuntur illum eveniet cupiditate deserunt sed sapiente iure quasi rerum pariatur corporis aliquam ad, sunt, quos facilis, dignissimos rem.</p>

                                </div>
                            
                            </div>
                        </div>
                    </div>


                  </div>
                  <div class="carousel-item">
                    
                    
                    <div class="container">
                        <div class="row">

                            <div class="col">

                                <div class="text-center">
                                    <img class=" rounded-circle border" src="p1.jpg"  alt="" height="125px" width="125px" style="margin-bottom: -50px;position: relative;z-index:2">
                                </div>
                            
                                <div class=" py-5 px-3 mx-3 " style="background-color: rgba(0, 128, 255, 0.8);">

                                    <h1 class="mb-0" style="font-size:60px">“</h1>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime aliquid consequuntur illum eveniet cupiditate deserunt sed sapiente iure quasi rerum pariatur corporis aliquam ad, sunt, quos facilis, dignissimos rem.</p>

                                </div>
                            
                            </div>


                            <div class="col"> 

                                <div class="text-center">
                                    <img class=" rounded-circle border" src="p2.jpg"  alt="" height="125px" width="125px" style="margin-bottom: -50px;position: relative;z-index:2">
                                </div>
                            
                                <div class=" py-5 px-3 mx-3 " style="background-color: rgba(0, 128, 255, 0.8);">

                                    <h1 class="mb-0" style="font-size:60px">“</h1>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime aliquid consequuntur illum eveniet cupiditate deserunt sed sapiente iure quasi rerum pariatur corporis aliquam ad, sunt, quos facilis, dignissimos rem.</p>

                                </div>
                            
                            </div>


                            <div class="col">

                                <div class="text-center">
                                    <img class=" rounded-circle border" src="p3.jpg"  alt="" height="125px" width="125px" style="margin-bottom: -50px;position: relative;z-index:2">
                                </div>
                            
                                <div class=" py-5 px-3 mx-3 " style="background-color: rgba(0, 128, 255, 0.8);">

                                    <h1 class="mb-0" style="font-size:60px">“</h1>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime aliquid consequuntur illum eveniet cupiditate deserunt sed sapiente iure quasi rerum pariatur corporis aliquam ad, sunt, quos facilis, dignissimos rem.</p>

                                </div>
                            
                            </div>
                        </div>
                    </div>


                  </div>
                  <div class="carousel-item">
                    
                    
                    <div class="container">
                        <div class="row">

                            <div class="col">

                                <div class="text-center">
                                    <img class=" rounded-circle border" src="p1.jpg"  alt="" height="125px" width="125px" style="margin-bottom: -50px;position: relative;z-index:2">
                                </div>
                            
                                <div class=" py-5 px-3 mx-3 " style="background-color: rgba(0, 128, 255, 0.8);">

                                    <h1 class="mb-0" style="font-size:60px">“</h1>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime aliquid consequuntur illum eveniet cupiditate deserunt sed sapiente iure quasi rerum pariatur corporis aliquam ad, sunt, quos facilis, dignissimos rem.</p>

                                </div>
                            
                            </div>


                            <div class="col"> 

                                <div class="text-center">
                                    <img class=" rounded-circle border" src="p2.jpg"  alt="" height="125px" width="125px" style="margin-bottom: -50px;position: relative;z-index:2">
                                </div>
                            
                                <div class=" py-5 px-3 mx-3 " style="background-color: rgba(0, 128, 255, 0.8);">

                                    <h1 class="mb-0" style="font-size:60px">“</h1>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime aliquid consequuntur illum eveniet cupiditate deserunt sed sapiente iure quasi rerum pariatur corporis aliquam ad, sunt, quos facilis, dignissimos rem.</p>

                                </div>
                            
                            </div>


                            <div class="col">

                                <div class="text-center">
                                    <img class=" rounded-circle border" src="p3.jpg"  alt="" height="125px" width="125px" style="margin-bottom: -50px;position: relative;z-index:2">
                                </div>
                            
                                <div class=" py-5 px-3 mx-3 " style="background-color: rgba(0, 128, 255, 0.8);">

                                    <h1 class="mb-0" style="font-size:60px">“</h1>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime aliquid consequuntur illum eveniet cupiditate deserunt sed sapiente iure quasi rerum pariatur corporis aliquam ad, sunt, quos facilis, dignissimos rem.</p>

                                </div>
                            
                            </div>
                        </div>
                    </div>

                  </div>
                </div>
                
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>

              </div>
                
            </div>


               
    </section>

    <!-- Testimonials -->


    


    <!-- About Me -->

    <section data-number="13" data-text = "About Me" class="position-relative" id="about">



        
        <div class="container-fluid px-5 position-relative py-5" >
            <div class="row justify-content-center ">
                
                <div class="col">

                    <div style="border: 1px solid royalblue">
                        <img src="person.jpg" height="100%" width="100%" class="mb-3 ml-n3">
                    </div>

                </div>


                <div class="col">

                    <h4>Victor Williams</h4>
                    <br>
                    <h5>Head of Investments</h5>
                    <br>
                    <h5>Background</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut, minus, dicta dolore assumenda eligendi iure quidem id, labore vel accusantium. Placeat a ipsum atque perspiciatis fugit necessitatibus laboriosam consequatur.</p>
                    <br>
                    <h5>Training and Expertise</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum doloribus itaque distinctio porro fuga est. Expedita iusto, harum iste recusandae quam, ex nihil totam quasi temporibus nobis distinctio tempore.</p>

                </div>

            </div>
        </div>
    
    </section>

    <!-- About Me -->

    



     <!-- Thank You -->

     <section data-number="14" data-text = "Thank You" class="position-relative" id="thank">


        
        <div class="container px-3 position-relative py-5" >
            <div class="row justify-content-center ">
                
                <div class="col-lg-6 col-12">

                    <h1 class="text-primary" style="font-size: 60px"><strong>Thank You</strong></h1>
                    <p>Get In Touch</p>
                    <img src="logo.png" height="100px" width="100px">

                </div>


                <div class="col-lg-4 col-12 bg-primary p-5 text-white">

                    <h5>MAILING ADDRESS</h5>
                    <p>24606 SE Old Black Nugget Rd, Issaquah, WA 98028</p>
                    <br>
                    <h5>EMAIL ADDRESS</h5>
                    <p>victorwilliams@realestate.com</p>
                    <br>
                    <h5>PHONE NUMBER</h5>
                    <p>0798 898 389</p>
                    <br>

                </div>

            </div>
        </div>
    
    </section>

    <!-- Thank You -->



    <!-- custom JS -->
    <script src="script.js"></script>

</body>
</html>


