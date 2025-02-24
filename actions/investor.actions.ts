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
	const [c, setC] = useState<number>(0)

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
	}, [c])

    return {
        isLoading,
        error,
        investors,
		setC
    } as const
}

export const useAddInvestor = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

	const addInvestor = async ({ name, strategyType }: { name: string, strategyType: "AGGRESSIVE" | "CONSERVATIVE" }) => {
		setIsLoading(true)
		try {
			const response = await fetch(`http://localhost:8080/investors?name=${name}&strategy=${strategyType}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					body: "T"
				})
			})
			if (!response.ok) {
				const errorData = await response.json()
				setError(errorData.error || 'Failed to add investor')
			}
		} catch (err) {
			console.log(err);
			setError('An error occurred while adding the investor')
		} finally {
			setIsLoading(false)
		}
	}

	return {
		isLoading,
		error,
		addInvestor
	} as const
}

export const updateInvestor = () => {}

export const deleteInvestor = () => {}