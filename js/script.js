// Creo la struttura dati (array di oggetti)
const ourTeam = [
    // ordine chiavi: nome, ruolo, foto
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
]

// Stampo in console il mio array di oggetti, con le varie informazioni
console.log(ourTeam)

// Variabile per recuperare l'elemento dal DOM
const member = document.getElementById('member-list')

// Utilizzo un ciclo FOR per stampare i membri del team a schermo
for (let i = 0; i < ourTeam.length; i++) {
    member.innerHTML += `${ourTeam[i].name}, ${ourTeam[i].role} ${ourTeam[i].photo}<br><br>`
}