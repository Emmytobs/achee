import React from 'react'
import styles from './AboutUs.module.css';
import Footer from '../MainApp/Footer/Footer';

import PageHeader from '../Shared/PageHeader/PageHeader';


function AboutUs() {
    return (
        <div className={styles.aboutUsContainer}>
            <PageHeader 
                title="About Achee"
                description="Do you want to know about Achee? Then read about us below"
            />
            <main className={styles.contentContainer}>
                <div className={styles.content}>
                    <p>
                        Consectetuer vivamus. Ultrices cursus posuere vivamus. Ad orci mi praesent scelerisque curae; ad nam at, nibh suscipit dignissim aptent eleifend aenean porta mauris laoreet vitae fringilla augue praesent natoque, auctor vitae nisl cursus sit nonummy, dictumst pellentesque malesuada. Nisl parturient vulputate primis ut vestibulum bibendum in urna mus a Lectus libero ipsum lobortis lobortis. Arcu porttitor laoreet aliquam sem integer felis at, fermentum luctus, potenti tristique suspendisse laoreet nostra conubia habitant dictum Vehicula senectus ultrices eu volutpat sagittis sodales rhoncus vitae facilisi id feugiat in lacinia habitasse phasellus scelerisque purus enim conubia pede, pellentesque turpis. Consectetuer metus. Convallis elit vitae tempus nec tortor et nonummy etiam in vitae dolor lacus id natoque. Mi scelerisque mattis, habitasse elit class dignissim vitae magnis morbi nulla quisque pellentesque consequat porta dapibus eleifend sodales iaculis cum. Elit nascetur orci massa conubia diam ut tristique tincidunt etiam morbi libero dictumst maecenas dolor cras montes. Hymenaeos tristique quam ligula vulputate fames volutpat non hymenaeos et litora auctor interdum. Porta proin quisque sapien velit neque sapien augue aenean egestas vitae. Nullam, massa duis laoreet. Tristique eros sit morbi risus convallis nisi. Sollicitudin conubia neque eros vel condimentum, id orci sodales leo nunc. Bibendum curabitur lacinia ligula, class nisl ante, libero interdum lorem purus pharetra sodales pulvinar litora. Accumsan at consequat. Feugiat natoque sed integer luctus tristique litora proin cum platea rutrum elementum. Tristique pulvinar a non. Quis urna at tellus per orci semper tincidunt fermentum quisque sagittis elementum, diam ut conubia dui, dignissim euismod nisi dapibus ullamcorper auctor facilisi aptent aptent. Blandit accumsan facilisis vulputate eu etiam suspendisse Iaculis et eu parturient neque auctor blandit pharetra est. Integer consectea condimentum lacus fringilla rhoncus lorem sit lectus sociosqu mollis nullam maecenas mi.
                    </p>
                    <p>
                    Urna pharetra neque interdum nibh, integer, vivamus facilisis inceptos, sem feugiat dictum Suscipit litora Risus Magnis litora ipsum scelerisque placerat ac risus sociosqu lacus fames nisi. Orci ornare feugiat leo pede fermentum praesent quis nec rutrum mattis velit. Sollicitudin mi vitae Mattis id. Dis fames. Vehicula, laoreet ad mattis fermentum iaculis viverra pede venenatis risus proin volutpat tempus. Nullam cras tincidunt varius Ultricies mi vestibulum lectus faucibus, lacus dictumst sem maecenas. Dictum metus hymenaeos lacus ornare tortor urna praesent. Egestas erat vulputate montes imperdiet. Penatibus ultrices odio ve.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default AboutUs
