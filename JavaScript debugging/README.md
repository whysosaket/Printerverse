# FIXED THE CRASHING BUG

# Link To Replit
1. My Fork -> https://replit.com/@SaketAryan/OutrageousBug/
2. Link To Testing -> https://outrageousbug.saketaryan.repl.co/

# Fixes
-> from src/App.svelte
-> from Line Number 29:
-> Removed " $: " as it starts a new thread at intervals which causes the program to run the, <br> 
window.addEventListener('click', ... <br>
to run multiple times, which in turn on click crashes the page