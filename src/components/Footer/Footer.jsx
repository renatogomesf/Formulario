import { Rodape, Logo, Wrapper } from "./StyleFooter"

export default function Footer() {
    return (
        <>
            <hr />
            <Rodape>
                <Wrapper>
                    <Logo>Logo</Logo>
                    <p>&copy; Renato Gomes</p>
                </Wrapper>
            </Rodape>
        </>
    )
}