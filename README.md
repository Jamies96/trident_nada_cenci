## Organizzazione progetto - Trident

All'interno della cartella `/src` sono presenti le cartelle `/views` e `/components`.

All'interno di `/views` sono presenti le seguenti cartelle con i relativi file `.tsx`:

`/Home` in cui è sono presenti i bottoni che rimandano a diverse pagine tramite meccanismo `routing` presente nel file `App.tsx`

`/Converter`in cui viene richiamato il componente `EurUsdConverter` che definisce 4 funzioni:
- `eurToUsd` permette la conversione da euro a dollari con l'attuale valuta (1.07)
- `addTen` permette di aggiungere 10 al valore digitato nel campo di input
- `addHundred` permette di aggiungere 100 al valore digitato nel campo d'input
- `reset` azzera il valore presente nel campo d'input

`/Weather`in cui viene richiamato il componente `FormWeather` che definisce una funzione
`getWeather`in cui si fa una chiamata all'API OpenWeather.org tramite `fetch` in cui vengono
passati url, parametri di query e la chiave individuale.
La funzione mostra all'utente un esito di errore se il campo d'input non è compilato o se non è stata digitata una città esistente.
La funzione mostra il tempo metereologico attuale e mostra l'ìcona corrispondente se la città
digitata esiste. 

`/Sign up` presenta un form di registrazione fittizio
