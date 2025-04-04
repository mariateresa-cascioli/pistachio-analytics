// Serve per modificare randomicamente i valori dell'oggetto che arrivano dal form
export function convertFactors(factors) {
    const ranges = {
        1: [0.25, 0.60],
        2: [0.60, 0.85],
        3: [0.85, 1.0],
        4: [0.25, 0.60]
    };

    let convertedFactors = {};

    for (let key in factors) {
        let range = ranges[factors[key]];
        if (!range) {
            convertedFactors[key] = 0; // Imposta un valore di default o gestisci l'errore
            continue;
        }

        let [min, max] = range;
        convertedFactors[key] = Math.random() * (max - min) + min;
    }

    return convertedFactors;
}

export function getValues(obj) {
    const mappedValues = Object.keys(obj).reduce((acc, key) => {
        acc[key] = obj[key].value;
        return acc;
    }, {});
    return mappedValues
}

export function calculateMonthlyProduction(fattoriAmbientali, fattoriProduttivi) {
    // Pesi dei fattori ambientali (influenza sulla produzione)
    const pesiAmbientali = {
        "temperatura": 0.30,
        "precipitazioni": 0.25,
        "irraggiamento": 0.20,
        "suolo": 0.15,
        "umidita": 0.05,
        "vento": 0.05,
    };

    // Pesi dei fattori produttivi (influenza sulla produzione)
    const pesiProduttivi = {
        "densita": 0.20,
        "eta": 0.15,
        "irrigazione": 0.20,
        "fertilizzazione": 0.20,
        "potatura": 0.15,
        "controllo_parassiti": 0.10
    };

    const produzioneMassima = 3000; // kg/ha annui

    // Distribuzione mensile della produzione (percentuali basate sul ciclo produttivo)
    const distribuzioneMensile = {
        "Gennaio": 0.02, "Febbraio": 0.02, "Marzo": 0.05, "Aprile": 0.10,
        "Maggio": 0.12, "Giugno": 0.15, "Luglio": 0.18, "Agosto": 0.15,
        "Settembre": 0.12, "Ottobre": 0.06, "Novembre": 0.02, "Dicembre": 0.01
    };

    // Calcolo della correzione basata sui fattori ambientali
    let correzioneAmbientale = Object.keys(pesiAmbientali).reduce((somma, fattore) => {
        return somma + (pesiAmbientali[fattore] * (fattoriAmbientali[fattore] || 0));
    }, 0);

    // Calcolo della correzione basata sui fattori produttivi
    let correzioneProduttiva = Object.keys(pesiProduttivi).reduce((somma, fattore) => {
        return somma + (pesiProduttivi[fattore] * (fattoriProduttivi[fattore] || 0));
    }, 0);

    // Produzione annua stimata
    let produzioneAnnuaStimata = produzioneMassima * correzioneAmbientale * correzioneProduttiva;

    // Calcolo della produzione mensile
    let produzioneMensile = {};
    for (let mese in distribuzioneMensile) {
        produzioneMensile[mese] = produzioneAnnuaStimata * distribuzioneMensile[mese];
    }

    return produzioneMensile;
}

// Serve per fare la somma di tutti gli elementi di un oggetto
// usato per ottenere quanto si è prodotto complessivamente in un anno 
// es: sumValues(calcolaProduzioneMensile(fattoriAmbientaliEsempio, fattoriProduttiviEsempio));
export function sumValues(obj) {
    return Object.values(obj).reduce((sum, value) => sum + value, 0);
}

//Creo gli oggetti con i valori di riferimento per il grafico
// produzioneMensileTop
// produzioneMensileMiddle
// produzioneMensileBottom

// Input per ottenere i migliori risultati possibili
const fattoriAmbientaliTop = {
    "temperatura": 1,
    "precipitazioni": 1,
    "irraggiamento": 1,
    "suolo": 1,
    "umidita": 1,
    "vento": 1
};

// Input per ottenere i migliori risultati possibili
const fattoriProduttiviTop = {
    "densita": 1,
    "eta": 1,
    "irrigazione": 1,
    "fertilizzazione": 1,
    "potatura": 1,
    "controllo_parassiti": 1
};

// Calcolo della produzione mese per mese
export const produzioneMensileTop = calculateMonthlyProduction(fattoriAmbientaliTop, fattoriProduttiviTop);

export const produzioneMensileMiddle = Object.keys(produzioneMensileTop).reduce((acc, mese) => {
    acc[mese] = produzioneMensileTop[mese] / 2;
    return acc;
}, {});

export const produzioneMensileBottom = Object.keys(produzioneMensileMiddle).reduce((acc, mese) => {
    acc[mese] = produzioneMensileMiddle[mese] / 2;
    return acc;
}, {});
//Fine creazione degli oggetti con i valori di riferimento per il grafico

// METODI PER EFFICIENZA DEL RACCOLTO
export function efficienzaDelRaccolto(produzioneEffettiva, produzioneMassimaTeorica) {
    return (produzioneEffettiva / produzioneMassimaTeorica) * 100;
}
// FINE METODI PER EFFICIENZA DEL RACCOLTO


// Metodi per USO DELLE RISORSE

// Funzione che ci ritorna la quantita effettiva di piante 
// Numero di Ettari x Numero di Piante contenute in un Ettaro
export function calcoloQuantitaPiante(ettari, densitaNonConvertita) {
    let piantePerEttaro = {
        1: 100,
        2: 250,
        3: 175,
        4: 400
    }[densitaNonConvertita] || 0;

    return ettari * piantePerEttaro;
}

// irrigazioneConvertita è un valore compreso tra 0 e 1
// costoAcquaAlLitro è il valore in euro di 1L di acqua
export function calcoloCostoIrrigazione(irrigazioneNonConvertita, costoAcquaAlLitro, quantitaPiante) {
    let litriPerPianta = {
        1: 350,
        2: 675,
        3: 900,
        4: 350
    }[irrigazioneNonConvertita] || 0;

    return quantitaPiante * litriPerPianta * costoAcquaAlLitro;
}

export function costoIrrigazioneNormalizzato(costoIrrigazione, quantitaPiante, costoAcquaAlLitro) {
    // Normalizzazione rispetto valore ottimale 900 litri/pianta
    let maxCostoIrrigazione = 900 * quantitaPiante * costoAcquaAlLitro;

    return costoIrrigazione / maxCostoIrrigazione;
}

// irrigazioneConvertita è un valore compreso tra 0 e 1
// costoAcquaAlLitro è il valore in euro di 1L di acqua
export function calcoloCostoFertilizzazione(fertilizzazioneNonConvertita, costoFertilizzazione, ettari) {
    let fertilizzazionePerEttaro = {
        1: 35,
        2: 75,
        3: 125,
        4: 35
    }[fertilizzazioneNonConvertita] || 0;

    return ettari * fertilizzazionePerEttaro * costoFertilizzazione;
}

export function costoFertilizzazioneNormalizzato(costoFertilizzazioneTotale, ettari, costoFertilizzazione) {
    // Normalizzazione rispetto al valore ottimale di raccolta 125 kg/ha
    let maxCostoFertilizzazione = 125 * ettari * costoFertilizzazione;
    return costoFertilizzazioneTotale / maxCostoFertilizzazione;
}

// Uso delle risorse normalizzato
export function usoDelleRisorse(produzioneEffettiva, costoIrrigazioneNormalizzato, costoFertilizzazioneNormalizzato) {
    let maxProduzione = 3000; // Produzione massima teorica 3000 kg/ha
    let produzioneEffettivaNormalizzata = produzioneEffettiva / maxProduzione;

    let risorseUsate = costoIrrigazioneNormalizzato * costoFertilizzazioneNormalizzato;

    return (produzioneEffettivaNormalizzata * risorseUsate) * 100;
}

export function calcoloCostoVenditaPistacchio(quantitaKGperHA, costoPistacchioKG, ettari) {
    return quantitaKGperHA * costoPistacchioKG * ettari;
}
// fine Metodi per USO DELLE RISORSE

// Metodi per PERFORMANCE FINANZIARIA

// fine metodi per PERFORMANCE FINANZIARIA
