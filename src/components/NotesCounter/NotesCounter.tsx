import * as S from "./styles"
import { NotesProgressBar } from "@components/ProgressBarContainer"

export function NotesCounter(){
    return (
        <S.NotesCounterContainer>
            <S.TitleCounter>You have 1/2 notes completed</S.TitleCounter>
            <NotesProgressBar />
        </S.NotesCounterContainer>
    )
}