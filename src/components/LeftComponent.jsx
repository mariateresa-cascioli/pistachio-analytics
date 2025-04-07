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
                        La produzione del pistacchio segue un ciclo annuale. Dopo la fioritura primaverile, i frutti si sviluppano e vengono raccolti generalmente verso fine estate o inizio autunno. Tipicamente il picco della raccolta è concentrato nei mesi di agosto e settembre.<br />
                        Il grafico mostra l'efficienza stimata della produzione mensile, espressa in chilogrammi, per un ettaro sulla base dei fattori agronomici selezionati.<br />
                        Per ottenere i dati mostrati nel grafico, sono stati presi in considerazione diversi fattori agronomici che influenzano la produzione del pistacchio.<br />
                        Ogni mese dell'anno è stato associato a un "valore" di produzione, mentre ogni fattore agronomico contribuisce con un peso diverso alla resa del pistacchio.<br />
                        I valori di questi fattori sono stati applicati a un modello di previsione dell'"efficienza" di produzione per ciascun mese. Combinando i fattori secondo pesi specifici, si ottiene una proiezione realistica della produzione mensile di pistacchi.<br />

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
