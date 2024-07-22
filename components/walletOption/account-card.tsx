import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import DisconnectBtn from "@/components/walletOption/disconnect-btn";

interface AccountCardProps {
    address: string | undefined;
    balance: string | undefined;
    chain: string | undefined;
    wallet: string | undefined;
    disconnect: () => void;
}

export default function AccountCard({address,balance,chain,wallet,disconnect}: AccountCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>账户信息</CardTitle>
                <CardDescription>当前钱包：{wallet}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>地址：{address}</p>
                <p>余额：{balance}</p>
                <p>网络：{chain}</p>
            </CardContent>
            <CardFooter className="flex justify-center">
                <DisconnectBtn disconnect={disconnect}/>
            </CardFooter>
        </Card>
    )
}