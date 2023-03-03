import Navigation from './components/Navigation'
import './globals.css'

export const metadata = {
  title: 'Imaginnest',
  description: 'Creatividad, diseño, mercadeo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
