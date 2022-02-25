import spinner from '../assets/spinner.gif'

export const Spinner = () => {
  return (
    <img 
      src={spinner} 
      alt="imagem carregando" 
      style={{width: '100px', margin: 'auto', display: 'block'}} 
    />
  )
}
