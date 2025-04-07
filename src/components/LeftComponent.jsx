import React, { useState } from "react";
import styles from "../css/CentralComponent.module.scss"
import classNames from "classnames";

export const LeftComponent = ({ title }) => {

    return (
        <React.Fragment>
            <div className={styles.description_title}>{title}</div>
            <div className={classNames(styles.description_container)}>
                <div className={classNames(styles.description)}>
                    Proiezione Mensile della Resa di Pistacchio<br/>
                    La produzione del pistacchio segue un ciclo annuale. Dopo la fioritura primaverile, i frutti si sviluppano e vengono raccolti generalmente verso fine estate o inizio autunno. Tipicamente il picco della raccolta è concentrato nei mesi di agosto e settembre.<br/>
                    Il grafico mostra l'efficienza stimata della produzione mensile, espressa in chilogrammi, per un ettaro sulla base dei fattori agronomici selezionati.<br/>
                    Per ottenere i dati mostrati nel grafico, sono stati presi in considerazione diversi fattori agronomici che influenzano la produzione del pistacchio.<br/>
                    Ogni mese dell'anno è stato associato a un "valore" di produzione, mentre ogni fattore agronomico contribuisce con un peso diverso alla resa del pistacchio.<br/>
                    I valori di questi fattori sono stati applicati a un modello di previsione dell'"efficienza" di produzione per ciascun mese. Combinando i fattori secondo pesi specifici, si ottiene una proiezione realistica della produzione mensile di pistacchi.<br/>
                </div>
            </div>
        </React.Fragment>

    );
};
