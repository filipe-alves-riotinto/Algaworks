import ErrorBoundary from "../components/ErrorBoundary"
import EditorProfile from "../features/EditorProfile.feature"
import DefaultLayout from "../layouts/Default/Default.layout"

function EditorProfilieView () {
    return <DefaultLayout>
        <ErrorBoundary>
          <EditorProfile hidePersonalData/>            
        </ErrorBoundary>
    </DefaultLayout>  
}

export default EditorProfilieView