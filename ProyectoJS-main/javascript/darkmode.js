const darkModeButton = document.getElementById ('dark'); 

darkModeButton.addEventListener ('click', () => {
    document.body.classList.toggle ('dark');
    darkModeButton.classList.toggle ('active');
})
