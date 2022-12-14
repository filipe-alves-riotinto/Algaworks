import usePageTitle from "../../core/hooks/usePageTitle"
import PostListFeature from "../features/PostsList.feature"
import UserEarningsFeature from "../features/UserEarnings.feature"
import UserPerformanceFeature from "../features/UserPerformance.feature"
import UserTopTagsFeature from "../features/UserTopTags.feature"
import DefaultLayout from "../layouts/Default"



export default function HomeView() {
    usePageTitle('Home')

    return <DefaultLayout>
        <div style={{display:'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap:'32px'}}>
            <UserTopTagsFeature/>
            <UserEarningsFeature/>
        </div>
        <UserPerformanceFeature />
        <PostListFeature />
    </DefaultLayout>
}