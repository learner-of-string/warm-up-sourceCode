import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "sonner";
import LiquidGlass from "../../Components/ui/LiquidGlass";

const ConfirmSinOut = () => {
    const { signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success("Successfully Logged Out!");
                navigate("/");
            })
            .catch((error) => {
                console.log(error.code, error.massage);
            });
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <LiquidGlass className="mt-5 mx-auto justify-center items-center">
                    <Button className="text-rose-500 hover:text-red-500 font-semibold">
                        Log Out
                    </Button>
                </LiquidGlass>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you surely sure to Sign Out?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        If you are so dedicated to Sign Out Warm up, then we
                        have no problem but never come here again. Never ever😤
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleSignOut}
                        className="text-rose-500 hover:text-red-500 font-semibold"
                    >
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default ConfirmSinOut;
