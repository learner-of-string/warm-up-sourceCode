import { Ban } from "lucide-react";
import LiquidGlass from "../../Components/ui/LiquidGlass";

const donateMoney = () => {
    return (
        <form className="space-y-3 my-3">
            <LiquidGlass className="w-full flex-col px-10 py-10 text-center gap-3">
                <Ban className="mx-auto h-10 w-10 text-red-400" />
                <p className="text-5xl font-bold text-slate-800">
                    Coming Never!
                </p>
                <p className="text-xl text-slate-800">
                    This feature is not available yet in this version. We are
                    working hard to make this feature available never. It will
                    not come anymore.
                </p>
                <p className="text-sm text-slate-500 italic mt-3">
                    You can still donate me some extra marks🥺, but not money.
                    💔
                </p>
            </LiquidGlass>
        </form>
    );
};

export default donateMoney;
