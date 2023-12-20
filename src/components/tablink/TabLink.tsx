import './TabLink.css'
import React from "react";
import { useMatch, Link } from 'react-router-dom';

interface TabLinkProps {
    special?: boolean, 
    to: string,
    children?: React.ReactNode,
    className?: string
}

export default function TabLink(props: TabLinkProps){
    const isActive = useMatch(`/${props.to}`);

    const className = ["link", props.className].join(" ");

    return <Link to={props.to} data-active={Boolean(isActive)} className={className}>{props.children}</Link>
}