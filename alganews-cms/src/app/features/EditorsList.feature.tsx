import { useEffect } from "react";
import styled from "styled-components";
import PostService from "../../sdk/services/Post.service";
import CircleChart from "../components/CircleChart";
import Profile from "../components/Profile";

export default function EditorsListFeature () {
    useEffect(() => {
        const posts = PostService.getAllPosts()
        console.log(posts)
    }, [])
    return <EditorsListWrapper>
        <Profile editorId={1} name= "Filipe Alves" description="Administrador"/>
        <Profile editorId={2} name= "Eder Riotinto" description="Editor"/>
        <Profile editorId={3} name= "Guilherme" description="Editor"/>
        <Profile editorId={4} name= "Reylan" description="Editor"/>
        <Profile editorId={5} name= "Matheus" description="Editor"/>
    </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
`