function calculatePrice(event){
    event.preventDefault();

    const str = document.querySelector("#siteType").value ;
    let price;

    if (str === "businesSite"){
        price = 1000;
    }
    else if (str === "onlineStore"){
        price = 2000;
    }
    else if (str === "blog"){
        price = 1500;
    }
    else{
        price = 0;
    }

    console.log(price);

    let pages = document.querySelector("#pages").value;
    pages *= 200;
    console.log(pages);
    price += pages;
    
    const design = document.querySelector('input[name="group"]:checked').value;
    let designPrice;
    if(design === "yes"){
        designPrice = 1000;
    } else{
        designPrice = 0;
    }
    console.log(designPrice);
    price += designPrice;
    
    console.log("total price: " , price);

}