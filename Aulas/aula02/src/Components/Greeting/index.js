const Greeting = ({user}) => {
//const user = props.user
    const greetingText = () => {
        if(user.lastName === '01'){
            return `${user.firstName} ${user.lastName}`;
        }
        return 'Turma desconhecida';
    }

    return(
        <h1>Olá, {greetingText()}!</h1>
    )
}

export default Greeting;