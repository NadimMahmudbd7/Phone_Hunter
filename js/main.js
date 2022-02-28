
// SearchButton----------------------------------------------------------

const SearchBtn = ()=>{
    const inputField = document.getElementById("inputField");
    const inputFieldText = inputField.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputFieldText}`
    fetch(url)
    .then(res =>res.json())
    .then(data => PhoneList(data.data))
}
const keyup = document.getElementById("search")


const PhoneList =(phones)=>{
    if(phones.length == 0 ){
        const notfound = document.getElementById("notfound");
        notfound.classList.remove("d-none")
    }
    else{
        const notfound = document.getElementById("notfound");
        notfound.classList.add("d-none")
        const cards = document.getElementById("cards");
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
    }
}



// detailsField-----------------------------------------------------------------------------------

const moreDetails = (details)=>{
    const url = `https://openapi.programming-hero.com/api/phone/${details}`
    fetch(url)
    .then(res => res.json())
    .then(data =>onePhoneDetails(data.data))
}


const onePhoneDetails = (phonesDetails)=>{
    // console.log(phonesDetails.others);
    const otherss = phonesDetails.others;
    const result = Object.keys(otherss)
    for(const results of result){
       const othersFinal=(results,otherss[results]);
   
    const details = document.getElementById("details")
    details.classList.remove("d-none")
    const phoneDetails = document.getElementById("phoneDetails");
    const div = document.createElement("div");
    phoneDetails.innerHTML = ""
    for(const phone in phonesDetails){
        if(phonesDetails.releaseDate == ""){
            div.innerHTML = `
            <div class="card mb-3 mx-auto" style="max-width: 540px; border-top-left-radius:84px">
            <div class="row g-0">
              <div class="col-md-4">
                <img style="margin-top: 60%;" src="${phonesDetails.image}" class="img-fluid mx-auto d-block rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"><span class="fs-3">Name:</span> ${phonesDetails.name}</h5>
                  <h5 class="card-title">releaseDate:  No releaseDate Found </h5>
                  <h5 class="card-title text-center mt-4 py-2 bg-primary text-white rounded">MainFeatures</h5>
                  <p class="card-text"><span class = "fw-bold">ChipSet:</span> ${phonesDetails.mainFeatures.chipSet}</p>
                  <p class="card-text"><span class = "fw-bold">DisplaySize:</span> ${phonesDetails.mainFeatures.displaySize}</p>
                  <p class="card-text"><span class = "fw-bold">memory:</span> ${phonesDetails.mainFeatures.memory}</p>
                  <p class="card-text"><span class = "fw-bold">Sensors:</span> ${phonesDetails.mainFeatures.sensors}</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
    `
    phoneDetails.appendChild(div)
        }
    
    else{
        div.innerHTML = `
    <div class="card mb-3 mx-auto" style="max-width: 540px; border-top-left-radius:84px">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img style="margin-top: 60%;" src="${phonesDetails.image}" class="img-fluid mx-auto d-block rounded-start" alt="...">
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title"><span class="fs-3">Name:</span> ${phonesDetails.name}</h5>
                              <h5 class="card-title">releaseDate:  ${phonesDetails.releaseDate} </h5>
                              <h5 class="card-title text-center mt-4 py-2 bg-primary text-white rounded">MainFeatures</h5>
                              <p class="card-text"><span class = "fw-bold">ChipSet:</span> ${phonesDetails.mainFeatures.chipSet}</p>
                              <p class="card-text"><span class = "fw-bold">DisplaySize:</span> ${phonesDetails.mainFeatures.displaySize}</p>
                              <p class="card-text"><span class = "fw-bold">memory:</span> ${phonesDetails.mainFeatures.memory}</p>
                              <p class="card-text"><span class = "fw-bold">Sensors:</span> ${phonesDetails.mainFeatures.sensors}</p>
                              <h5 class="card-title text-center mt-4 py-2 bg-primary text-white rounded">Other's</h5>
                                <p class="card-text"><span class = "fw-bold"></span> ${otherss[results]}</p>
                            </div>
                          </div>
                        </div>
                      </div>
    `
    phoneDetails.appendChild(div)
    }
    }
}
}