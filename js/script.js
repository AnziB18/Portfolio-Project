const berndAge = document.getElementById('bernd_age');

const berndBirth = 18-01-1977;
const berndBirthDate = new Date(berndBirth);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
    const now = new Date();
    const difference = Math.floor((now.getTime() - berndBirthDate.getTime())/1000);
    berndAge.innerHTML = intlNumberFormatter.format(difference);
},1000
);



