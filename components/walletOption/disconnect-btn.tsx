import {Button} from "@/components/ui/button";

interface DisconnectButtonProps {
    disconnect: () => void;
}

export default function DisconnectBtn({disconnect}: DisconnectButtonProps) {
    return (
        <Button variant="destructive" onClick={disconnect}>
            断开连接
        </Button>
    )
}