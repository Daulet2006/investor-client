// ISIS UP ISIS ONE LOVE

import { useEffect, useState } from "react"

interface Investor {
	id: number
	name: string
	strategyType: "AGGRESSIVE" | "CONSERVATIVE"
}

export const useGetInvestors = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [investors, setInvestors] = useState<Array<Investor>>([])

    useEffect(() => {
		async function fetchPost() {
			setIsLoading(true)
			try {
				const response = await fetch('http://localhost:8080/investors')
				if (!response.ok) {
					const errorData = await response.json()
					setError(errorData.error || 'Failed to fetch post')
				} else {
					const data = await response.json()
					setInvestors(data)
				}
			} catch (err) {
                console.log(err)
				setError('An error occurred while fetching the post')
			} finally {
				setIsLoading(false)
			}
		}

		fetchPost()
	}, [])

    return {
        isLoading,
        error,
        investors
    } as const
}

export const addInvestor = () => {}

export const updateInvestor = () => {}

export const deleteInvestor = () => {}