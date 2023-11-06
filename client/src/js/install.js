const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (e) => {
    event.preventDefault();
    deferredPrompt = e;
    butInstall.style.visibility = 'visible';
    butInstall.textContent = 'Install';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult.outcome === 'accepted') {
            console.log('PWA installation accepted');
        }
        deferredPrompt = null;
    }
    butInstall.style.visibility = 'hidden';
}
);

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA installed');
});