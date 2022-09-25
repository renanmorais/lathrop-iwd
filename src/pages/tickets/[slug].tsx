import React from "react";
import TicketLayout from "../../layouts/ticket-layout";
// import { getPostBySlug, getAllPosts } from './api/posts';
import { GetStaticPropsContext } from "next";
import { Ticket } from "models/ticket";

export default function TicketPage(props: Ticket) {
    return (
        <TicketLayout
            title={props.title}
            description={props.description}
            thumbnailUrl={props.thumbnailUrl}
            content={props.content}
        />
    )
}

/*export async function getStaticProps(context: GetStaticPropsContext) {
     return {
         props: await getPostBySlug(context.params.slug)
     }
}

export async function getStaticPaths() {
    //let paths = await getAllPosts()

    paths = paths.map(post => {
        return {
            params: { slug: post.slug }
        }
    });

    return {
        paths: paths,
        fallback: false
    }
}*/