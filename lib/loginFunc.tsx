import { useRouter } from "next/router"
import { magic } from "./magic-client";
import Link from "next/link";

export const LogoutFunc = () => {

    const router = useRouter();

    const handleLogout = async () => {
        try {
            const logout = await magic.user.logout();
            if (logout) {
                router.reload()
            }
        }
        catch (error) {
            console.log("Error", error)
        }
    }

    return (
        <Link onClick={handleLogout}
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light">
            Logout
        </Link>
    )
}