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
    let dayEvent=data[0].name;
    let type=data[0].type;
    console.log(dayEvent)
    console.log(type)
}

async function saveData() {
    await fetch('/saveData',{
        method:'Post',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name:data[0].name,
            type:data[0].type
        })
    })   
}


async function getData(){
    await fetch("/getData");
    let final = await response.json()
    const results = async () => {
        const x = await final;
    };
    results();
}

async function udpateUx() {
    const request = await fetch('/getData');
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('content').innerHTML = allData.feelings;
    } catch (error) {
        console.log("error", error);
    }
}


