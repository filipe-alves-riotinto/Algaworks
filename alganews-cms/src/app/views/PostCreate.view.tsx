import DefaultLayout from "../layouts/Default"
import usePageTitle from "../../core/hooks/usePageTitle"
import PostForm from "../features/PostForm.feature"

export default function PostCreateView() {
    usePageTitle('Novo post')


    return <DefaultLayout>
        <PostForm />
    </DefaultLayout>
}