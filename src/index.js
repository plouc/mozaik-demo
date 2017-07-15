import React         from 'react'
import { render }    from 'react-dom'
import Mozaik, { Registry } from '@mozaik/ui'

import github        from '@mozaik/ext-github'
import travis        from '@mozaik/ext-travis'

Registry.addExtensions({
    github,
    travis
})

render(
    <Mozaik />,
    document.getElementById('mozaik')
)
