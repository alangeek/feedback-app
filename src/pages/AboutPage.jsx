import { Card } from "../components/shared/Card"
import {Link} from 'react-router-dom'

export const AboutPage = () => {
  return (
    <>
      <div className='container'>
      <Card>
        <div className="about">
          <h1>Sobre esse projeto</h1>
          <p>Essa aplicação de feedback para produtos e serviços</p>
          <p>Versão: 1.0.0</p>
          <Link to="/">
            <p>Voltar para home</p>
          </Link>
        </div>
      </Card>
      </div>
    </>
  )
}
