import styled from "styled-components";
import CircleChart from "../components/CircleChart";
import Profile from "../components/Profile";

export default function EditorsListFeature () {
    return <EditorsListWrapper>
        <Profile name= "Filipe Alves" description="Administrador"/>
        <Profile name= "Eder Riotinto" description="Editor"/>
        <Profile name= "Guilherme" description="Editor"/>
        <Profile name= "Reylan" description="Editor"/>
        <Profile name= "Matheus" description="Editor"/>
    </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
`