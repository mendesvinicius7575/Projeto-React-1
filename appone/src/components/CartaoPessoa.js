import styles from './CartaoPessoa.module.css'

function CartaoPessoa({nome, foto, profissao, bio}){
    return(
        <div className={styles.container}>
            <div className={styles.cartao}>
                <h2>Nome: {nome}</h2>
                <p>{foto}</p>
                <p>Profissão: {profissao}</p>
                <p>Biografia: {bio}</p>
            </div>
        </div>
    )
}

export default CartaoPessoa;