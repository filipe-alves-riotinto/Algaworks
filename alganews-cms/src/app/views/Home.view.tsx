import usePageTitle from "../../core/hooks/usePageTitle"
import PostListFeature from "../features/PostsList.feature"
import UserPerformanceFeature from "../features/UserPerformance.feature"
import UserTopTagsFeature from "../features/UserTopTags.feature"
import DefaultLayout from "../layouts/Default"



export default function HomeView() {
    usePageTitle('Home')

    return <DefaultLayout>
        <UserTopTagsFeature/>
        <UserPerformanceFeature />
        <PostListFeature />
    </DefaultLayout>
}