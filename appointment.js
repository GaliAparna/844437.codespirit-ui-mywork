const APPOINTMENTS_KEY="appointments";

getAppointmentFromLocalStorage=()=>{
    let appointments=[];

    if(localStorage.getItem(APPOINTMENTS_KEY)){
        appointments=JSON.parse(localStorage.getItem(APPOINTMENTS_KEY));
    }
    return appointments;
}

addAppointmentFormsubmit=()=>{
    let appointments=getAppointmentFromLocalStorage();

    let firstName=document.querySelector("#fnm");
    let lastName=document.querySelector("#lnm");
    let personAge=document.querySelector("#age");
    let personEmail=document.querySelector("#ema");
    let personPhone=document.querySelector("#phone");
    let personAddress=document.querySelector("#myText");
    let personCity=document.querySelector("#city");
    let personState=document.querySelector("#state");
    let personCountry=document.querySelector("#country");
    let pinCode=document.querySelector("#pin");
    let trainerPref=document.querySelector("#chkmale");
    let trainerPref=document.querySelector("#chkfemale");
    let trainerPref=document.querySelector("#chkothers");
    let physio=document.querySelector("#yes");
    let physio=document.querySelector("#no");
    let appointment=document.querySelector("#1");
    let suitablePackage=document.querySelector("#onetime");
    let quoteInr=document.querySelector("#inr");
    let quotePaise=document.querySelector("#paise");

    let appointment={
        fName:firstName.value,
        lName:lastName.value,
        age:parseInt(personAge.value),
        email:personEmail.value,
        phone:parseInt(personPhone.value),
        streetAddress:personAddress.value,
        city:personCity.value,
        state:personState.value,
        country:personCountry.value,
        pinval:parseInt(pinCode.value),
        trainerPreference:trainerPref.value,
        therapist:physio.value,
        appointmentslot:appointment.value,
        package:suitablePackage.value,
        inr:quoteInr.value,
        paise:quotePaise.value
    };

    appointments.push(appointment);
    localStorage.setItem(APPOINTMENTS_KEY,JSON.stringify(appointments));
}

loadAppointments=()=>{
    let appointments=getAppointmentFromLocalStorage();

    let tableBody=document.querySelector("#prdData");

    for(appointment of appointments){
        let prdRow=createAppointmentRow(appointment);
        tableBody.append(prdRow);
    }
}

createAppointmentRow=(appointment)=>{

    let snoCol=document.createElement("td");
    snoCol.textContent=appointment.sno;

    let nameCol=document.createElement("td");
    nameCol.textContent=appointment.fName;

    let addressCol=document.createElement("td");
    addressCol.textContent=appointment.Address;

    let cityCol=document.createElement("td");
    cityCol.textContent=appointment.city;

    let packageCol=document.createEelement("td");
    packageCol.textContent=appointment.package;

    let trainerPrefCol=document.createElement("td");
    trainerPrefCol.textContent=appointment.trainerPreference;

    let phoneCol=document.createElement("td");
    phoneCol.textContent=appointment.phone;

    let prdRow=document.createElement("tr");
    prdRow.append(sno);
    prdRow.append(nameCol);
    prdRow.append(addressCol);
    prdRow.append(cityCol);
    prdRow.append(packageCol);
    prdRow.append(trainerPrefCol);
    prdRow.append(phoneCol);

    return prdRow;

}