import {Button} from "@/components/ui/button";

interface ConnectButtonProps {
    name: string;
    connect: () => void;
}

export default function ConnectButton({name, connect}: ConnectButtonProps) {
    return (
        <Button className="m-2" onClick={connect}>
            {name}
        </Button>
    )
}