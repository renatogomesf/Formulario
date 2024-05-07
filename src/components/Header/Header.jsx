import { Div, Wrapper, Logo, Link, Topo } from "./StyleHeader"


export default function Header() {
    return (
        <>
            <Topo>
                <Wrapper>
                    <Logo>Logo</Logo>
                    <Div>
                        <Link>
                            <a href="">
                                Cadastro
                                <hr />
                            </a>
                        </Link>
                        <Link>
                            <a href="">
                                Consulta
                                <hr />
                            </a>
                        </Link>
                    </Div>
                </Wrapper>
            </Topo>
        </>
    )
}