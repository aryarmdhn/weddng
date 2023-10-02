// scroll reveal/

const sr = ScrollReveal({
    origin: 'right',
    distance: '60px',
    durattion: 3500,
    delay: 400, 
})


sr.reveal('text', {delay: 600, origin: 'bottom', interval: 100})
sr.reveal('container', {origin: 'bottom'})