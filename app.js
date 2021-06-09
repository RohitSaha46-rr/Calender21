let api_key='367c2d044de21f34d48ed5d5acb492965b82d241';
let dte=document.getElementById('dte');
let name_holiday=document.getElementById('name_holiday');
let desc_holiday=document.getElementById('desc_holiday');
let table=document.getElementById('table');
let country=document.getElementById('country');
let main_content=document.getElementById('main_content');
let footer=document.querySelector('.footer');
const fun=()=>{
   
 
async function calender(){
    try{
    const data=await fetch('https://calendarific.com/api/v2/holidays?&api_key='+api_key+'&country='+country.value+'&year=2021');
    const jsondata = await data.json();
    console.log(jsondata);
    let holiday=jsondata.response.holidays[0].name;
    
    console.log(holiday);
    let array=jsondata.response.holidays;
    let html="";
    array.forEach(element => {
        let name=element.name;
        let description=element.description;
        let iso=element.date.iso;
        
        html+=`
        <table> 
        <td id="dte">${iso}</td>
        <td id="name_holiday">${name}</td>
        <td id="desc_holiday">${description}</td>
        </table>`;
       
    });
    main_content.innerHTML=html;
    footer.innerHTML=`<footer>
    <p>Copyright ©2021 All rights reserved | This template is made with love by Rohit Saha</p>
</footer>`;
    }
    catch (error) {
window.open("error.html");
}
}
calender();
}