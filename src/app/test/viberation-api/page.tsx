'use client';

import Scaffold from "@/components/utilities/scaffold";
import ScaffoldBody from "@/components/utilities/scaffold-body";
import { DefaultButtonStyle } from "@/enum/style";

export default function ViberationTest() {


    const vibrate = () => {
        navigator.vibrate(200);
    }

    return (
        <Scaffold appBar={{ title: 'Vibrate API test' }}>
            <ScaffoldBody>
                <div>Vibrate api test</div>
                <button onClick={vibrate} className={DefaultButtonStyle}>Vibrate</button>
            </ScaffoldBody>
        </Scaffold>
    )
}