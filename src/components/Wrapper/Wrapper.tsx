import * as S from "./styles";

export function Wrapper(props: WrapperInterface){
    return(
        <S.ContainerWrapper>
            {props.children}
        </S.ContainerWrapper>
    )
}

interface WrapperInterface {
    children: JSX.Element;
}