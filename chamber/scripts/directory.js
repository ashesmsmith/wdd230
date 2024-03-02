const mmbrURL = 'https://ashesmsmith.github.io/wdd230/chamber/data/members.json';
const directoryMain = document.querySelector('.directory-page');

async function getMmbrInfo() {
    const response = await fetch(mmbrURL);
    const data = await response.json();
    //console.log(data) // Testing

    displayMmbrInfo(data.members);
}

const displayMmbrInfo = (members) => {
    members.forEach((member) => {
        var mmbr = document.createElement('section');
        mmbr.setAttribute('class', 'mmbr-info');

        var mmbrImage = document.createElement('img');
        mmbrImage.setAttribute('src', member.image);
        mmbrImage.setAttribute('alt', `${member.company} logo`);
        mmbrImage.setAttribute('width', member.imgwidth);
        mmbrImage.setAttribute('height', member.imgheight);

        var mmbrLevel = document.createElement('p');
        mmbrLevel.setAttribute('class', `${member.mmbrlevel}`);
        mmbrLevel.innerHTML = `${member.mmbrlevel} Member`;

        var mmbrName = document.createElement('h2');
        mmbrName.innerHTML = `${member.company}`;

        var mmbrDetails = document.createElement('p');
        mmbrDetails.innerHTML = `${member.details}`;

        var mmbrAddress = document.createElement('p');
        mmbrAddress.innerHTML = `Loacation: ${member.address}`;

        var mmbrPhone = document.createElement('p');
        mmbrPhone.innerHTML = `Phone: ${member.phone}`;

        var mmbrSite = document.createElement('a');
        mmbrSite.setAttribute('href', `${member.url}`);
        mmbrSite.innerHTML = `${member.url}`;                

        mmbr.appendChild(mmbrImage);
        mmbr.appendChild(mmbrLevel);
        mmbr.appendChild(mmbrName);
        mmbr.appendChild(mmbrDetails);
        mmbr.appendChild(mmbrAddress);
        mmbr.appendChild(mmbrPhone);
        mmbr.appendChild(mmbrSite);

        directoryMain.appendChild(mmbr);
    })
}

getMmbrInfo();