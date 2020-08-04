import { useEffect, useRef, useState } from 'react'

const defaultState = {
	data: null,
	error: null,
	loading: true
}

export const useFetch = ( url ) => {
	const isMounted = useRef(true)
	const [ state, setState ] = useState({...defaultState})

	useEffect(() => {
		return () => {
			isMounted.current = false
		}
	}, [])

	useEffect(() => {
		setState({...defaultState})

		fetch(url)
			.then(response => response.json())
			.then(data => {
				if ( isMounted.current ) {
					setState({
						data,
						error: null,
						loading: false
					})
				} else {
					console.info('Set state is prevented when component unmounted with useRef')
				}
			})
			.catch(() => {
				setState({
					data: null,
					error: 'Bad request',
					loading: false
				})
			})
	}, [ url ])

	return state
}
