function change() {
    // let hello = document.getElementById("function");
    // let pranaam = hello.childNodes[0];
    // pranaam = pranaam.data;
    document.getElementById("function").innerHTML = "RAM RAM"
    // console.log(pranaam)
}

function home() {
    let call_order = document.getElementById("order");
    buy_order = call_order.attributes[1];
    laptop = buy_order.nodeValue;
    // console.log(laptop);
    buy_order.nodeValue = "display:none"

    let call = document.getElementById("call_buy_laptop");
    buy = call.attributes[1];
    laptop = buy.nodeValue;
    // console.log(laptop);

    buy.nodeValue = "display:none"

    let hello1 = document.getElementById("dilivery");
    let pranaam1 = hello1.attributes[1];
    let RAM1 = pranaam1.nodeValue;
    // console.log(RAM);

    pranaam1.nodeValue = "display:none";

    let hello = document.getElementById("call_home");
    let pranaam = hello.attributes[1];
    let RAM = pranaam.nodeValue;
    // console.log(RAM);

    pranaam.nodeValue = "display:block";




}

function buy_now() {
    let call_order = document.getElementById("order");
    buy_order = call_order.attributes[1];
    laptop = buy_order.nodeValue;
    // console.log(laptop);
    buy_order.nodeValue = "display:none"

    let hello = document.getElementById("call_home");
    let pranaam = hello.attributes[1];
    let RAM = pranaam.nodeValue;
    // console.log(RAM);

    pranaam.nodeValue = "display:none";

    let hello1 = document.getElementById("dilivery");
    let pranaam1 = hello1.attributes[1];
    let RAM1 = pranaam1.nodeValue;
    // console.log(RAM);

    pranaam1.nodeValue = "display:none";

    let call = document.getElementById("call_buy_laptop");
    buy = call.attributes[1];
    laptop = buy.nodeValue;
    // console.log(laptop);

    buy.nodeValue = "display:block"
}

function buy_now1() {

    let call = document.getElementById("image");
    buy = call.attributes[0];
    laptop = buy.nodeValue;
    // console.log(laptop);

    buy.nodeValue = "https://rukminim1.flixcart.com/image/312/312/kuwzssw0/computer/x/l/a/redmibook-15-pro-thin-and-light-laptop-redmi-original-imag7xhnakyazyma.jpeg?q=70";

    document.getElementById("laptop_details").innerHTML = "RedmiBook Pro Core i5 11th Gen - (8 GB/512 GB SSD/Windows 10 Home) Thin and Light"
    document.getElementById("price").innerHTML = "Price: &#x20B9; 42,990 "
}

function buy_now2() {

    let call = document.getElementById("image");
    buy = call.attributes[0];
    laptop = buy.nodeValue;
    // console.log(laptop);

    buy.nodeValue = "https://rukminim1.flixcart.com/image/832/832/krxtrww0/computer/e/l/c/redmibook-15-e-learning-edition-thin-and-light-laptop-redmi-original-imag5m8jkjbaybeu.jpeg?q=70";

    document.getElementById("laptop_details").innerHTML = "RedmiBook 15 Core i3 11th Gen - (8 GB/256 GB SSD/Windows 10 Home) Thin and Light Laptop (15.6 inch, Charcoal Gray, 1.8 kg, With MS Office)"
    document.getElementById("price").innerHTML = "Price: &#x20B9; 30,999"
}
function buy_now3() {

    let call = document.getElementById("image");
    buy = call.attributes[0];
    laptop = buy.nodeValue;
    // console.log(laptop);

    buy.nodeValue = "https://rukminim1.flixcart.com/image/312/312/kl2mljk0/computer/h/h/r/na-thin-and-light-laptop-mi-original-imagy9zzhzwbgqha.jpeg?q=70";

    document.getElementById("laptop_details").innerHTML = "Mi Notebook Horizon Edition 14 Core i7 10th Gen - (8 GB/512 GB SSD/Windows 10 Home/2 GB Graphics) Ultra thin"
    document.getElementById("price").innerHTML = "Price: &#x20B9; 59,990"
}
function buy_now4() {

    let call = document.getElementById("image");
    buy = call.attributes[0];
    laptop = buy.nodeValue;
    // console.log(laptop);

    buy.nodeValue = "https://rukminim1.flixcart.com/image/832/832/koixwnk0/computer/9/p/x/na-thin-and-light-laptop-mi-original-imag2ygskfu3zew5.jpeg?q=70";

    document.getElementById("laptop_details").innerHTML = "Mi Notebook 14 Core i5 10th Gen - (8 GB/256 GB SSD/Windows 10 Home) JYU4298IN Thin and Light Laptop (14 inch, Silver, 1.50 kg)"
    document.getElementById("price").innerHTML = " Price:&#x20B9; 44,999"
}
function buy_now5() {

    let call = document.getElementById("image");
    buy = call.attributes[0];
    laptop = buy.nodeValue;
    // console.log(laptop);

    buy.nodeValue = "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/7/67U22PA-1_T1656564043.png";

    document.getElementById("laptop_details").innerHTML = "12th Generation Intel® Core™ i5 processor Windows 11 Home 39.6 cm (15.6) diagonal,FHD (1920 x 1080) Intel® Iris® Xᵉ Graphics 8 GB DDR4-3200"
    document.getElementById("price").innerHTML = "Price: &#x20B9; 67,999 "
}
function buy_now6() {

    let call = document.getElementById("image");
    buy = call.attributes[0];
    laptop = buy.nodeValue;
    // console.log(laptop);

    buy.nodeValue = "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/5/0/50M63PA-1_T1656563298.png";

    document.getElementById("laptop_details").innerHTML = "AMD Ryzen™ 5 5500U processor Windows 11 Home 39.6 cm (15.6) diagonal, FHD (1920 x 1080) AMD Radeon™ Graphics 8 GB DDR4-3200 MHz RAM"
    document.getElementById("price").innerHTML = "Price: &#x20B9; 50,999"
}
function buy_now7() {

    let call = document.getElementById("image");
    buy = call.attributes[0];
    laptop = buy.nodeValue;
    // console.log(laptop);

    buy.nodeValue = "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/5/8/589X6PA-1_T1656562474.png";

    document.getElementById("laptop_details").innerHTML = "AMD Ryzen™ 5 processor Windows 11 Home 39.62 cm (15.6) diagonal, FHD (1920 x 1080) NVIDIA® GeForce® GTX 1650 ,8 GB DDR4-3200 MHz RAM (1 x 8 GB) 512 GB PCIe® NVMe™ M.2 SSD"
    document.getElementById("price").innerHTML = "Price: &#x20B9; 57,255"
}
function buy_now8() {

    let call = document.getElementById("image");
    buy = call.attributes[0];
    laptop = buy.nodeValue;
    // console.log(laptop);

    buy.nodeValue = "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/Q/6Q158PA-1_T1661850443.png";

    document.getElementById("laptop_details").innerHTML = "12th Generation Intel® Core™ i7 processor Windows 11 Home 35.6cm (14) diagonal, OLED Intel® Iris® Xᵉ Graphics 16 GB DDR4-3200 MHz RAM (onboard), 1 TB PCIe® NVMe™ M.2 SSD"
    document.getElementById("price").innerHTML = " Price:&#x20B9; 93,999"
}


function order() {

    let call = document.getElementById("call_buy_laptop");
    buy = call.attributes[1];
    laptop = buy.nodeValue;
    // console.log(laptop);

    buy.nodeValue = "display:none"

    let hello = document.getElementById("call_home");
    let pranaam = hello.attributes[1];
    let RAM = pranaam.nodeValue;
    // console.log(RAM);

    pranaam.nodeValue = "display:none";

    let hello1 = document.getElementById("dilivery");
    let pranaam1 = hello1.attributes[1];
    let RAM1 = pranaam1.nodeValue;
    // console.log(RAM);

    pranaam1.nodeValue = "display:none";

    let call_order = document.getElementById("order");
    buy_order = call_order.attributes[1];
    laptop = buy.nodeValue;
    // console.log(laptop);
    buy_order.nodeValue = "display:block"
}


function payment_succesful() {
    // alert("HABIBI")
    let call_order = document.getElementById("order");
    buy_order = call_order.attributes[1];
    laptop = buy_order.nodeValue;
    // console.log(laptop);
    buy_order.nodeValue = "display:none"

    let call = document.getElementById("call_buy_laptop");
    buy = call.attributes[1];
    laptop = buy.nodeValue;
    // console.log(laptop);

    buy.nodeValue = "display:none"

    let hello = document.getElementById("call_home");
    let pranaam = hello.attributes[1];
    let RAM = pranaam.nodeValue;
    // console.log(RAM);

    pranaam.nodeValue = "display:none";

    let hello1 = document.getElementById("dilivery");
    let pranaam1 = hello1.attributes[1];
    let RAM1 = pranaam1.nodeValue;
    console.log(RAM1);

    pranaam1.nodeValue = "display:block";

    let mySong = document.getElementById('mySong');
        mySong.play()
}

