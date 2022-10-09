import React from "react";
import TicketLayout from "../../layouts/ticket-layout";
// import { getPostBySlug, getAllPosts } from './api/posts';
import { GetStaticPropsContext } from "next";
import { Ticket } from "models/ticket";
import HomeHeader from "components/headers/home-header";

export default function TicketPage(props: Ticket) {
    return (
        <TicketLayout
            title={props.title}
            description={props.description}
            thumbnailUrl='https://webtools.rocks/og-imager/imgs/SKLC-ZK-TR7H/ticket.png'
            content={props.content}
        />

    )
}