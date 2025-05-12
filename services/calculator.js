function calculatePrice(event){
    event.preventDefault();

    const str = document.querySelector("#siteType").value ;
    let totalPrice = 0;

    //בדיקה של סוג האתר ומתן מחיר
    if (str === "Business"){
        totalPrice = 1000;
    }
    else if (str === "Online store"){
        totalPrice = 2000;
    }
    else if (str === "Blog"){
        totalPrice = 1500;
    }

    //חישוב הוספת מחיר על עמודים
    let pages = parseInt(document.querySelector("#pages").value);
    if(isNaN(pages) || pages <= 1)
    {
      pages = 0;
    }
    else{
      pages = (pages - 1) * 200;
    }
    totalPrice += pages;
    
    //חישוב הוספת מחיר על העיצוב 
    const design = document.querySelector('input[name="group"]:checked').value;
    let designPrice;
    if(design === "yes"){
        designPrice = 1000;
    } else{
        designPrice = 0;
    }
    totalPrice += designPrice;


    //הוספת פרטי הפרויקט שנבחר על ידי המשתמש
    const dataDiv = document.querySelector(".data");
    const dataParagraphs = dataDiv.querySelectorAll('p');
    const values = [
        '<i class="fa fa-globe"></i> Site type: ' + str ,
        '<i class="fa fa-file-alt"></i> Number of pages: ' + document.querySelector("#pages").value ,
        '<i class="fa fa-palette"></i> Personal design: ' + design ,
        '<i class="fa-solid fa-dollar-sign"></i>Total price: ' + totalPrice + '₪'
    ];
    
    for (let i = 0; i < values.length; i++)
    {
        dataParagraphs[i].innerHTML = values[i];
    }

    dataDiv.style.display = 'flex';
}

function removeData(){
    const dataDiv = document.querySelector(".data");
    if (dataDiv.style.display === 'flex'){
        dataDiv.style.display = 'none';
    }
}