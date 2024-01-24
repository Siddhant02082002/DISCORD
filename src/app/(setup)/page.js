import { initialProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ServerCreateModal } from "@/components/modals/serverCreateModal";
const SetupPage = async () => {

    const profile = await initialProfile();

    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    })

    if (server) {
        return redirect(`/servers/${server.id}`);
    }
    return (

        <div>
            <ServerCreateModal></ServerCreateModal>
            {/* <UserButton afterSignOutUrl="/sign-in"></UserButton> */}
        </div>
        // <div>
        //     <h1>create server</h1>
        //     <Button>HELLp</Button>
        // </div>
    )

}
export default SetupPage;