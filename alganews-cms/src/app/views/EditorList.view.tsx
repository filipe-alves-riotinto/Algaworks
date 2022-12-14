import DefaultLayout from "../layouts/Default"
import usePageTitle from "../../core/hooks/usePageTitle"
import EditorsListFeature from "../features/EditorsList.feature"

export default function EditorListView() {
    usePageTitle('Lista de editores')


    return <DefaultLayout>
        <EditorsListFeature/>
    </DefaultLayout>
}