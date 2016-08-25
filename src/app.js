import React      from 'react'
import { render } from 'react-dom'
import Mozaik     from 'mozaik/ui'
import travis     from 'mozaik-ext-travis'


Mozaik.Registry.addExtensions({
    travis,
});

render(<Mozaik.Mozaik />, document.getElementById('mozaik'))
