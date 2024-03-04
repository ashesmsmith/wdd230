const mmbrURL = 'https://ashesmsmith.github.io/wdd230/chamber/data/members.json';
const directoryMain = document.querySelector('#directory-sections');

async function getMmbrInfo() {
    const response = await fetch(mmbrURL);
    const data = await response.json();

    displayMmbrInfo(data.members);
}

const displayMmbrInfo = (members) => {
    members.forEach((member) => {
        var mmbr = document.createElement('section');
        mmbr.setAttribute('class', 'mmbr-info');

        var mmbrImage = document.createElement('img');
        mmbrImage.setAttribute('src', member.image);
        mmbrImage.setAttribute('alt', `${member.company} logo`);
        mmbrImage.setAttribute('width', '300');
        mmbrImage.setAttribute('height', '100');

        var mmbrLevel = document.createElement('p');
        mmbrLevel.setAttribute('class', 'mmbr-level');
        mmbrLevel.setAttribute('id', `${member.mmbrlevel}`);
        mmbrLevel.innerHTML = `${member.mmbrlevel} Member`;

        var mmbrName = document.createElement('h2');
        mmbrName.innerHTML = `${member.company}`;

        var mmbrDetails = document.createElement('p');
        mmbrDetails.setAttribute('class', 'mmbr-details');
        mmbrDetails.innerHTML = `${member.details}`;

        var mmbrAddress = document.createElement('p');
        mmbrAddress.setAttribute('class', 'mmbr-address');
        mmbrAddress.innerHTML = `${member.address}`;

        var mmbrPhone = document.createElement('p');
        mmbrPhone.setAttribute('class', 'mmbr-phone');
        mmbrPhone.innerHTML = `${member.phone}`;

        var mmbrSite = document.createElement('a');
        mmbrSite.setAttribute('href', `${member.url}`);
        mmbrSite.setAttribute('target', '_blank');
        mmbrSite.innerHTML = `${member.url}`;                

        mmbr.appendChild(mmbrImage);
        mmbr.appendChild(mmbrLevel);
        mmbr.appendChild(mmbrName);
        mmbr.appendChild(mmbrDetails);
        mmbr.appendChild(mmbrPhone);
        mmbr.appendChild(mmbrAddress);
        mmbr.appendChild(mmbrSite);

        directoryMain.appendChild(mmbr);
    })
}

getMmbrInfo();