import { Ticket } from 'models/ticket'
import Head from 'next/head'

import Image from 'next/image'

interface TicketLayoutProps extends Ticket {
}

export default function TicketLayout(props: TicketLayoutProps) {
    return (
        <main>
            <Head>
                <title>{props.title}</title>

                <meta name="description" content={props.description} />

                <meta property="og:site_name" content="Devfest Cerrado" />

                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />

                <meta property="og:image" content={props.thumbnailUrl} />
                <meta property="og:image:type" content="image/png" />

                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={props.title} />
                <meta name="twitter:description" content={props.description} />
                <meta name="twitter:image" content={props.thumbnailUrl} />
            </Head>


            <div>
                <Image alt="background" layout="fill" src='/og.png' sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw" />

            </div>


            teste
        </main>
    )
}