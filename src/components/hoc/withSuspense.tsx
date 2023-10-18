import React, {Suspense} from "react";

export function withSuspense(Component) {

        return <Suspense>
        <Component/>
    </Suspense>}



