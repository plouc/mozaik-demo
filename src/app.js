import React      from 'react'
import { render } from 'react-dom'
import Mozaik     from 'mozaik/ui'
import github     from 'mozaik-ext-github'
import travis     from 'mozaik-ext-travis'


Mozaik.Registry.addExtensions({
    github,
    travis,
});

render(<Mozaik.Mozaik />, document.getElementById('mozaik'))
