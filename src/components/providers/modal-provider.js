"use client";

import { useEffect, useState } from "react";
import { CreateServerModal} from "../modals/CreateServerModal";
import { InvitationModal} from "../modals/InvitationModal";
export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <CreateServerModal/>
            <InvitationModal></InvitationModal>
        </>
    )
}