'use client'

import {useAccount, useBalance, useConnect, useDisconnect} from "wagmi";
import ConnectButton from "@/components/walletOption/connect-button";
import AccountCard from "@/components/walletOption/account-card";

export default function WalletOptions() {
    const {connectors, connect} = useConnect();
    const {disconnect} = useDisconnect();
    const {
        isConnected,
        chain,
        address,
        connector
    } = useAccount();
    const balance = useBalance({
        address,
        query: {
                enabled: isConnected
            }
    });
    return (
        <div className="flex justify-center bg-blue-600 p-4">
            {!isConnected ?
                connectors.map((connector) => (
                    <ConnectButton name={connector.name} connect={() => connect({connector})}/>
                )) :
                <AccountCard
                    address={address?.toString()}
                    balance={balance.data?.value.toString()}
                    chain={chain?.name}
                    wallet={connector?.name}
                    disconnect={disconnect}
                />
            }

        </div>
    )
}