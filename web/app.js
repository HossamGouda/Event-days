const key='32d88d3356904a969ee9c7c6f8e6b8f6';

let btn = document.getElementById('generate');

btn.addEventListener('click', getHolidyas);

async function getHolidyas() {
    let country = document.getElementById('country').value
    let year=document.getElementById('year').value;
    let month = document.getElementById('month').value;
    let day=document.getElementById('day').value;
    const url = `https://holidays.abstractapi.com/v1/?api_key=${key}&country=${country}&year=${year}&month=${month}&day=${day}`;
    const response= await fetch(url);
    let data=await response.json();
    console.log(data)
}
