

export function infoCommand(terminal) {

  terminal.innerHTML += formatTextWithStyles(`
<br><br>
<strong><underline><italic>Informations</italic></underline></srtong><br>
Version : 1.0.0-b2 Web

<strong>Developpeur : <green>liveweeeb</green>
  `);
  
  scrollToBottom();
}
