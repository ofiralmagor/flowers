import logoImg from '../assets/logo.jpg';

export default function Header() {
    return (
        <header id='main-header'>
            <div id='title'>
                <img src={logoImg} alt='A bouquet of flowers' />
                <h1>פרחי הארץ</h1>
            </div>
        </header>
    );
}
