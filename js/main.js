
// SearchButton----------------------------------------------------------
const SearchBtn = ()=>{
    const inputField = document.getElementById("inputField");
    const inputFieldText = inputField.value;
    const details = document.getElementById("details")
    details.classList.add("d-none")
    const phoneDetails = document.getElementById("phoneDetails");
    phoneDetails.innerHTML = ""
    const toggleSpinner = document.getElementById("spinner")
    toggleSpinner.classList.remove("d-none")
    const totaldetails = document.getElementById("totaldetails")
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputFieldText}`
    fetch(url)
    .then(res =>res.json())
    .then(data =>{toggleSpinner.classList.add("d-none"),totaldetails.classList.remove("d-none"), PhoneList(data.data)})
    inputField.value = ""
}

// buttonCall---------------------------------------------------------------------
const PhoneList =(phones)=>{

  const seemore = document.getElementById("seemore");
  const forTweenty = phones.slice(0,20);
    if(forTweenty.length == 0 ){
        const details = document.getElementById("details")
        details.classList.add("d-none")
        seemore.classList.add("d-none")
        const notfound = document.getElementById("notfound");
        notfound.classList.remove("d-none")
        const cards = document.getElementById("cards");
        cards.innerHTML = ""
    }
    else{
      if(phones.length>20){
        
        seemore.classList.remove("d-none")
        document.getElementById("Seemores").addEventListener("click",function(){
        const notfound = document.getElementById("notfound");
        notfound.classList.add("d-none")
        const cards = document.getElementById("cards");
        cards.innerHTML = ""
        phones.forEach(phone =>{
        const card = document.createElement("col")
        card.innerHTML = `
        <div class="card p-3 rounded">
                    <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
                    <div class="card-body mx-auto">
                      <h5 class="card-title">Name:${phone.phone_name}</h5>
                      <h6 class="card-title">Brand:- ${phone.brand}</h6>
                      <a href="#details" class="btn btn-primary mt-4 " onclick="moreDetails('${phone.slug}')">More Details</a>
                    </div>
                  </div>
        `
        cards.appendChild(card)
    })
    seemore.classList.add("d-none")    
          
        })
      }
      if(phones.length<20){
        const seemore = document.getElementById("seemore");
        seemore.classList.add("d-none")
      }

        const notfound = document.getElementById("notfound");
        notfound.classList.add("d-none")
        const cards = document.getElementById("cards");
        cards.innerHTML = ""
        forTweenty.forEach(phone =>{
        const card = document.createElement("col")
       
        card.innerHTML = `
        <div class="card p-3 rounded">
                    <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
                    <div class="card-body mx-auto">
                      <h5 class="card-title">Name:${phone.phone_name}</h5>
                      <h6 class="card-title">Brand:- ${phone.brand}</h6>
                      <a href="#details" class="btn btn-primary mt-4 " onclick="moreDetails('${phone.slug}')">More Details</a>
                    </div>
                  </div>
        `
        cards.appendChild(card)
    })
    }
}


// spinner----------------
const toggleSpinner = (submited)=>{
  const spinner = document.getElementById("spinner")
  spinner.style.display= submited
}



// detailsField-----------------------------------------------------------------------------------

const moreDetails = (details)=>{
  if(details == "apple_iphone_13_mini-11104"){
    alert("This phone is Stock Out! please choose another Phone")
  }
    else{
      const url = `https://openapi.programming-hero.com/api/phone/${details}`
    fetch(url)
    .then(res => res.json())
    .then(data =>onePhoneDetails(data.data))
    }
}

const onePhoneDetails = (phonesDetails)=>{
    // console.log(phonesDetails.others);
    const otherss = phonesDetails.others;
    console.log(otherss);
    const details = document.getElementById("details")
    details.classList.remove("d-none")
    const phoneDetails = document.getElementById("phoneDetails");
    const div = document.createElement("div");
    phoneDetails.innerHTML = ""
    for(const phone in phonesDetails){
        if(phonesDetails.releaseDate == ""){
            div.innerHTML = `
            <div class="card mb-3 mx-auto" style="max-width: 820px;border-image: linear-gradient(245deg, #ed239f, #1d44e3 100%);border-image-slice:1; border-top-left-radius:84px">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img style="margin-top: 60%", src="${phonesDetails.image}" class="img-fluid w-75 mx-auto d-block rounded-start" alt="...">
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title pt-4"><span class="fs-3">Name:</span> ${phonesDetails.name}</h5>
                              <h5 class="card-title">releaseDate:  No releaseDate Found </h5>
                              <h5 class="card-title text-center mt-4 py-2 bg-primary text-white rounded">MainFeatures</h5>
                              <p class="card-text"><span class = "fw-bold">ChipSet:</span> ${phonesDetails.mainFeatures.chipSet}</p>
                              <p class="card-text"><span class = "fw-bold">DisplaySize:</span> ${phonesDetails.mainFeatures.displaySize}</p>
                              <p class="card-text"><span class = "fw-bold">memory:</span> ${phonesDetails.mainFeatures.memory}</p>
                              <p class="card-text"><span class = "fw-bold">Sensors:</span> ${phonesDetails.mainFeatures.sensors}</p>
                              <h5 class="card-title text-center mt-4 py-2 bg-primary text-white rounded">Other's</h5>
                              <p class="card-text"><span class = "fw-bold">Wlan:</span> ${otherss.WLAN}</p>
                              <p class="card-text"><span class = "fw-bold">Bluetooth:</span> ${otherss.Bluetooth}</p>
                              <p class="card-text"><span class = "fw-bold">GPS:</span> ${otherss.GPS}</p>
                              <p class="card-text"><span class = "fw-bold">NFC:</span> ${otherss.NFC}</p>
                              <p class="card-text"><span class = "fw-bold">Radio:</span> ${otherss.Radio}</p>
                              <p class="card-text"><span class = "fw-bold">USB:</span> ${otherss.USB}</p>
                              
                              
                            </div>
                          </div>
                        </div>
                      </div>
    `
    phoneDetails.appendChild(div)
        }
    
    else{
        div.innerHTML = `
    <div class="card mb-3 mx-auto " style="max-width: 800px; border-image: linear-gradient(245deg, #ed239f, #1d44e3 100%);border-image-slice:1; border-top-left-radius:84px">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img style="margin-top: 60%;" src="${phonesDetails.image}" class="img-fluid w-75 mx-auto d-block rounded-start" alt="...">
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title pt-4"><span class="fs-3">Name:</span> ${phonesDetails.name}</h5>
                              <h5 class="card-title">releaseDate:  ${phonesDetails.releaseDate} </h5>
                              <h5 class="card-title text-center mt-4 py-2 bg-primary text-white rounded">MainFeatures</h5>
                              <p class="card-text"><span class = "fw-bold">ChipSet:</span> ${phonesDetails.mainFeatures.chipSet}</p>
                              <p class="card-text"><span class = "fw-bold">DisplaySize:</span> ${phonesDetails.mainFeatures.displaySize}</p>
                              <p class="card-text"><span class = "fw-bold">memory:</span> ${phonesDetails.mainFeatures.memory}</p>
                              <p class="card-text"><span class = "fw-bold">Sensors:</span> ${phonesDetails.mainFeatures.sensors}</p>
                              <h5 class="card-title text-center mt-4 py-2 bg-primary text-white rounded">Other's</h5>
                              <p class="card-text"><span class = "fw-bold">Wlan:</span> ${otherss.WLAN}</p>
                              <p class="card-text"><span class = "fw-bold">Bluetooth:</span> ${otherss.Bluetooth}</p>
                              <p class="card-text"><span class = "fw-bold">GPS:</span> ${otherss.GPS}</p>
                              <p class="card-text"><span class = "fw-bold">NFC:</span> ${otherss.NFC}</p>
                              <p class="card-text"><span class = "fw-bold">Radio:</span> ${otherss.Radio}</p>
                              <p class="card-text"><span class = "fw-bold">USB:</span> ${otherss.USB}</p>
                              
                              
                            </div>
                          </div>
                        </div>
                      </div>
    `
    phoneDetails.appendChild(div)
    }
    }
}