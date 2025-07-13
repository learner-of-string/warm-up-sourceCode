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
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import { toast } from "sonner";
import LiquidGlass from "../../Components/ui/LiquidGlass";

const ResetPasswordConfirmation = ({ email }) => {
    const { resetForgottenPassword } = useContext(AuthContext);

    const handleResetPassword = () => {
        resetForgottenPassword(email)
            .then(() => {
                toast.success(
                    "Password reset mail sent successful! Check check you mail please."
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <LiquidGlass className="px-2 cursor-pointer">
                    <span className="text-rose-600 text-sm text-right hover:underline">
                        Forgot password?
                    </span>
                </LiquidGlass>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Have you seriously forgotten your password?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {email
                            ? `By clicking Confirm, an email will be sent to your
                        provided mail. If not, please check spam or junk
                        folder😭`
                            : `Enter your email address first`}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleResetPassword}>
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default ResetPasswordConfirmation;
