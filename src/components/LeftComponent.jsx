import React, { useState } from "react";
import styles from "../css/CentralComponent.module.scss"
import classNames from "classnames";

export const LeftComponent = ({ title }) => {

    return (
        <React.Fragment>
            <div className={styles.description_title}>{title === 'Harvest' ? 'Proiezione Mensile della Resa di Pistacchio' : title === 'Resources' ? "Analisi dell'Uso delle Risorse nella Coltivazione del Pistacchio" : 'Performance finanziaria'}</div>
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
                            <React.Fragment>Testo Performance finanziaria</React.Fragment>
                        )}
                </div>
            </div>
        </React.Fragment>

    );
};
