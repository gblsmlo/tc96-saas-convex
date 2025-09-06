import { Inter } from 'next/font/google'

type NextFontWithVariable = ReturnType<typeof Inter>

interface FontFamily {
	sans: NextFontWithVariable
	serif: null
	mono: null
}

const inter = Inter({
	subsets: ['latin'],
})

export const fontFamily: FontFamily = {
	sans: inter,
	serif: null,
	mono: null,
}
