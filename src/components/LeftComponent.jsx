import React, { useState } from "react";
import styles from "../css/CentralComponent.module.scss"
import classNames from "classnames";

export const LeftComponent = ({ title }) => {

    return (
        <React.Fragment>
            <div className={styles.description_title}>{title === 'Harvest' ? 'Proiezione Mensile della Resa di Pistacchio' : title === 'Resources' ? "Analisi dell'Uso delle Risorse nella Coltivazione del Pistacchio" : 'Performance Finanziaria e Proiezioni di Guadagno nella Coltivazione del Pistacchio'}</div>
            <div className={classNames(styles.description_container)}>
                <div className={classNames(styles.description)}>
                    {title === 'Harvest' ? <React.Fragment>
Pistacia vera, ossia il Pistacchio, è un arbusto, un piccolo albero a foglia caduca, della famiglia delle Anacardiaceae. Un albero adulto raggiunge fino a 6 metri di altezza con un diametro complessivo della chioma della pianta di 5 metri.<br/>
Si coltivano varietà di pistacchio raggruppate in bianche, rosse e gialle, in relazione al colore del pericarpo (mallo). La varietà più diffusa in Italia è la  Bianca, comunemente chiamata "Napoletana" o "Nostrale", di cui il seme di colore verde ne rappresenta il fattore commerciale di pregio.<br/>
La pianta di pistacchio si adatta ai viti tipi di suolo e di clima, infatti anche se è una specie adattata ai climi temperati e secchi è in grado di resistere anche a temperature come 40-45° fino i -30° in inverno. In oltre si difende bene dalla siccità e gelate tardive primaverili ricacciando nuove gemme.<br/>
Il pistacchio fruttifica in un ciclo biennale che assieme alle variazioni climatiche causa grandi variazioni nelle rese e nei prezzi. Producendo frutti tutti gli anni, la produzione è soggetta ad anni di carica e di scarica. Tipicamente si cerca di far riposare la pianta durante gli anni di scarica in modo da avere un raccolto più abbondante negli anni di carica.<br/>
<br/>
Per motivi di comodità prendiamo in esame un ipotetico anno di "carica" dove impostando i vari fattori argonomici che influenzano la produzione ne analizziamo la resa per ogni mese dell'anno.<br/>
Ogni mese dell'anno è stato associato a un "valore" di produzione, mentre ogni fattore agronomico contribuisce con un peso diverso alla resa del pistacchio.<br/>
I valori di questi fattori sono stati applicati a un modello di previsione dell'"efficienza" di produzione per ciascun mese. Combinando i fattori secondo pesi specifici, si ottiene una proiezione realistica della produzione mensile di pistacchi.<br/>

                    </React.Fragment>
                        :
                        (title === 'Resources' ?
                            <React.Fragment>
                                Nella gestione delle coltivazioni di pistacchi, è fondamentale monitorare l'uso delle risorse impiegate nella produzione, poiché esse influenzano direttamente sia la resa che l'efficienza agricola.<br />
                                In particolare, l'irrigazione e la fertilizzazione sono i principali fattori da tenere sotto controllo, in quanto sono essenziali per ottimizzare la crescita delle piante e garantire una produzione sostenibile ed elevata.<br />
                                <br />
                                Nel grafico 'Produzione Annua' viene confrontata la resa ideale in condizioni ottimali di coltivazione, calcolata come 3000 kg/ha (colore Rosso Mattone), e la produzione annua stimata, ottenuta tenendo conto dei vari fattori agronomici selezionati (colore Verde). Il grafico evidenzia come la produzione annua vari in base ai fattori agronomici, come la densità di impianto, l'irrigazione, la fertilizzazione e altre variabili che influenzano direttamente la resa del pistacchio.<br />
                                I grafici a ciambella, invece, mostrano un confronto visivo tra la produzione massima ottimale e i valori stimati, normalizzati come percentuali. Questo approccio permette di visualizzare in modo intuitivo e immediato come l'uso delle risorse influisca sulla resa complessiva della coltivazione del pistacchio.</React.Fragment>
                            :
                            <React.Fragment>
                                Il prezzo del pistacchio è determinato da diversi fattori come la domanda di mercato, la qualità del prodotto e le condizioni climatiche che ne influenzano la produzione. Anche i costi legati all'irrigazione, alla fertilizzazione e alla gestione delle risorse naturali usati per la sua produzione incidono sul prezzo di vendita. Trovare un equilibrio tra i costi di produzione ed il prezzo di vendita del pistacchio è la sfida alla quale i produttori sono chiamati ad affrontare tutti gli anni. <br/>
                                L'analisi dei costi di produzione, insieme alla valutazione del prezzo di mercato del pistacchio è cruciale per comprendere la performance finanziaria complessiva della colivazione. in questo contesto i grafici che seguono forniscono una panoramica dell'efficienza produttiva mettendo in evidenza come variabili come il costo dell'acqua, della fertilizzazione e del prezzo di vendita influenzano i risultati economici.<br/>
                                <br/>
                                Gli slider presenti nel modello offrono la possibilità di impostare dei valori compresi in dei range per fattori come "Numero Ettari", "Costo Acqua/Litro", "Costo Fertilizazione/kg", "Prezzo Vendita Pistacchio/kg". Attraverso la regolazione di questi slider è possibile simulare diversi scenari economici ed ottenere una visione su come i cambiamenti in ciascuno di questi fattori influenzi la performance finanziari complessiva della coltivazione del pistacchio.<br/>
                                Il primo grafico, "Efficienza Calcolata", mostra il rapporto tra la produzione ottimale di pistacchi (3000 kg/ha) e la produzione stimata in base ai fattori agronomici selezionati. Viene rappresentato come una percentuale, offrendo una visione immediata dell'efficienza della coltivazione rispetto al massimo potenziale teorico.<br/>
                                Il secondo grafico, "Margini di Miglioramento", mostra il confronto tra il guadagno teorico ottenuto dalla produzione ottimale e quella stimata, evidenziando anche i costi associati all'irrigazione e alla fertilizzazione. Questo grafico permette di visualizzare come variabili come il prezzo dell’acqua, il costo della fertilizzazione e il prezzo di vendita influenzano i margini di profitto, offrendo una panoramica chiara delle opportunità di miglioramento economico.<br/>
                            </React.Fragment>
                        )}
                </div>
            </div>
        </React.Fragment>

    );
};
