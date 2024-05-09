import { Ul, Wrapper, Logo, Li, Topo } from "./StyleHeader"

import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <Topo>
                <Wrapper>
                    <Logo>Logo</Logo>
                    <Ul>
                        <Link className="link" to={"/"}>
                            <Li>
                                <a href="">
                                    Cadastro
                                    <hr />
                                </a>
                            </Li>
                        </Link>

                        <Link className="link" to={"/consultar"}>
                            <Li>
                                <a href="">
                                    Consulta
                                    <hr />
                                </a>
                            </Li>
                        </Link>
                    </Ul>
                </Wrapper>
            </Topo>
        </>
    )
}