'use client';

import Scaffold from "@/components/utilities/scaffold";
import ScaffoldBody from "@/components/utilities/scaffold-body";
import { useEffect, useState } from "react";
import { CopyBlock } from 'react-code-blocks';



export interface BatteryManger {
    charging: boolean,
    chargingTime: number,
    dischargingTime: number,
    level: number,
    onchargingchange?: any,
    onchargingtimechange?: any,
    ondischargingtimechange?: any,
    onlevelchange?: any
}


export default function BatteryStatus() {


    const [battery, setBattery] = useState<BatteryManger>();

    useEffect(() => {
        (navigator as any).getBattery().then((battery: BatteryManger) => {
            (battery as any).addEventListener("levelchange", (event: any) => {
                console.log('levelchange');
                const batt: BatteryManger = event.target;
                setBattery(battery => ({
                    ...battery,
                    charging: batt.charging,
                    chargingTime: batt.chargingTime,
                    dischargingTime: batt.dischargingTime,
                    level: batt.level
                }));
            });
            (battery as any).addEventListener("chargingtimechange", (event: any) => {
                console.log('chargingtimechange');
                const batt: BatteryManger = event.target;
                setBattery(battery => ({
                    ...battery,
                    charging: batt.charging,
                    chargingTime: batt.chargingTime,
                    dischargingTime: batt.dischargingTime,
                    level: batt.level
                }));
            });
            (battery as any).addEventListener("dischargingtimechange", (event: any) => {
                console.log('dischargingtimechange');
                const batt: BatteryManger = event.target;
                setBattery(battery => ({
                    ...battery,
                    charging: batt.charging,
                    chargingTime: batt.chargingTime,
                    dischargingTime: batt.dischargingTime,
                    level: batt.level
                }));
            });
            (battery as any).addEventListener("chargingchange", (event: any) => {
                console.log('chargingchange');
                const batt: BatteryManger = event.target;
                setBattery(battery => ({
                    ...battery,
                    charging: batt.charging,
                    chargingTime: batt.chargingTime,
                    dischargingTime: batt.dischargingTime,
                    level: batt.level
                }));
            });

            setBattery(battery);
            console.log(battery);
        })
    }, [])


    useEffect(() => {
        console.log('battery status changed', battery)
    }, [battery])

    return (
        <Scaffold appBar={{ title: "Battery Status API" }}>
            <ScaffoldBody>
                <CopyBlock
                    text={`navigator.getBattery().then((battery) => {
    console.log(battery)
})`}
                    language={'javascript'}
                    showLineNumbers={true}
                    wrapLongLines={true}
                />
                <div className="flex flex-col gap-1">
                    <span>{`Charging: ${battery?.charging}`}</span>
                    <span>{`Charging Time: ${battery?.chargingTime}`}</span>
                    <span>{`Discharging Time: ${battery?.dischargingTime}`}</span>
                    <span>{`Level: ${(battery?.level || 0) * 100}%`}</span>
                </div>
            </ScaffoldBody>
        </Scaffold>
    )
}