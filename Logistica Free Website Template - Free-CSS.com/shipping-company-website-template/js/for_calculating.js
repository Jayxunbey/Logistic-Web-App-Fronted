
//////////////////////////////////////////////////////  select from searching data


function placing_value_to_address(inpCatg,regId){

    const elements = document.querySelectorAll('.address-item');

    elements.forEach(e => {

        if (e.getAttribute('onclick') === `placing_value_to_address('${inpCatg}','${regId}')`){
            console.info(e);
            writeRegionToPlaceHolder(inpCatg,e);
            hideSearchResultBody(inpCatg);
            return;
        };

        

        

        
    });



    var formReqData = localStorage.getItem('formReqData');


    if (formReqData === null)
    {
        formReqData = {};
    }

    formReqData.from = regId;
    
    localStorage.setItem("formReqData",formReqData);




}


function writeRegionToPlaceHolder(inpCatg,el){
    const inputE = document.getElementById(`address_${inpCatg}_0`);
    inputE.value = el.textContent;
}










/////////////////////////////////////////////////////////////////// searching data
 
 function inputHandleAddressChange(inpCatg){   
    
   showLoadingAnimation(inpCatg);

   var inp_element = document.getElementById(`address_${inpCatg}_0`);


   var inp_element_data = inp_element.value;

   searchDataFromServer(inpCatg, inp_element_data);

   

}

  function searchDataFromServer(inpCatg, inp_element_data){

    console.info(inp_element_data);

    const url = new URL('http://localhost:8081/api/region/search');
    url.searchParams.append('region', inp_element_data);
    
          fetch(url,
                { 
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json' 
                }
            })
        .then(response => {
            if (!response.ok) {
                throw new Error('Hatolik kuzatildi. 200 qaytmadi');
            }

            return response.json();
        })
        .then(dataa => {

            showSearchedData(inpCatg,dataa);
            
        })
        .catch(error => {

            console.error('Xatolik:', error);
          
        });
}

function showSearchedData(inpCatg,data){

    if (data.length === 0) {
        console.log("result empty.");
        showNoResultBody(inpCatg);
        return;
    } 

    writeDataToResultBody(inpCatg, data);
    
    hideLoadingAnimation(inpCatg);

    showSearchedResultTableBody(inpCatg);
    

    console.info(inpCatg);
    console.info(data);
}

function showSearchedResultTableBody(inpCatg){

    const searchResultBody = document.getElementById(`search-results-for-${inpCatg}`);
    searchResultBody.style.display = "block";

}

function writeDataToResultBody(inpCatg, data){

    let divRes = document.createElement('div');

    console.info(data);

    data.forEach(elm => {

        let liRegion = document.createElement('li');

        let attOnClickValue = `placing_value_to_address('${inpCatg}','${elm.id}')`;

        liRegion.classList.add('address-item','text-center');
        liRegion.setAttribute('onclick',attOnClickValue);

        liRegion.textContent = elm.nameEn;


        divRes.appendChild(liRegion);

    });

    const resultTableBody = document.getElementById(`search-results-for-${inpCatg}`);

    resultTableBody.appendChild(divRes);

}

function hideLoadingAnimation(inpCatg){
    const loadingAnimation = document.getElementById(`search-animation-region-for-${inpCatg}`);

    loadingAnimation.style.display = "none";

}

function showLoadingAnimation(inpCatg){

    hideNoResultBody(inpCatg);
    hideSearchResultBody(inpCatg);
    clearSearchResults(inpCatg);

    const loadingAnimation = document.getElementById(`search-animation-region-for-${inpCatg}`);

    loadingAnimation.style.display = "block";



}

function showNoResultBody(inpCatg){
    hideLoadingAnimation(inpCatg);
    const noSearchResultBody = document.getElementById(`no-search-results-for-${inpCatg}`);
    noSearchResultBody.style.display = "block";

}

function hideNoResultBody(inpCatg){
    const noSearchResultBody = document.getElementById(`no-search-results-for-${inpCatg}`);
    noSearchResultBody.style.display = "none";

}


function hideSearchResultBody(inpCatg){
    const searchResultBody = document.getElementById(`search-results-for-${inpCatg}`);
    searchResultBody.style.display = "none";
}

function clearSearchResults(inpCatg){
    const searchResultBody = document.getElementById(`search-results-for-${inpCatg}`);
    searchResultBody.textContent = '';
}