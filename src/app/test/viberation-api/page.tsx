'use client';

import Scaffold from "@/components/utilities/scaffold";
import ScaffoldBody from "@/components/utilities/scaffold-body";
import { DefaultButtonStyle } from "@/enum/style";
import { CopyBlock } from 'react-code-blocks';

export default function ViberationTest() {


    return (
        <Scaffold appBar={{ title: 'Vibrate API test' }}>
            <ScaffoldBody>
                <div>Vibrate api test</div>
                <button onClick={() => navigator.vibrate(200)} className={DefaultButtonStyle}>Vibrate</button>
                <CopyBlock
                    text={`navigator.vibrate(200);`}
                    language={'javascript'}
                    showLineNumbers={true}
                    wrapLongLines={true}
                />
                <button onClick={() => navigator.vibrate([200, 300])} className={DefaultButtonStyle}>Vibrate</button>
                <CopyBlock
                    text={`navigator.vibrate([200, 300]);`}
                    language={'javascript'}
                    showLineNumbers={true}
                    wrapLongLines={true}
                />
            </ScaffoldBody>
        </Scaffold>
    )
}